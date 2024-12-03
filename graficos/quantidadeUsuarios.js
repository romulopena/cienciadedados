import { getCSS, tickConfig } from "./common.js"

async function quantidadePessoasTrabalhando() {
    const url = 'https://raw.githubusercontent.com/romulopena/cienciadedados/refs/heads/main/basededados/trabalho-ocupacoes.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasAreas = Object.keys(dados)
    const quantidadeDeEmpregados = Object.values(dados)

    const data = [
        {
            x: nomeDasAreas, 
            y: quantidadeDeEmpregados, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Área de trabalho com mais empregados',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das Áreas',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de trabalhadores ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadePessoasTrabalhando()
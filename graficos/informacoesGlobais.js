const url = 'https://raw.githubusercontent.com/romulopena/cienciadedados/refs/heads/main/basededados/trabalho-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasTrabalhando = (dados.total_pessoas_empregadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_trabalho_por_semana)
    const minutos = Math.round((dados.tempo_medio_trabalho_por_semana - horas) * 100)
    const porcentagemDesempregadas = ((pessoasTrabalhando / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasTrabalhando} bilhões</span> estão trabalhando em alguma ocupação e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> Trabalhando.<br>Porém, ainda existe aproximadamente <span>${porcentagemDesempregadas}%</span> de pessoas desempregadas .`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()

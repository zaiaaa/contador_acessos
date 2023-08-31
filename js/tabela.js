const times = document.getElementsByClassName("time")
const logo = document.getElementsByClassName('logo')
const pontos = document.getElementsByClassName('pontos')
const jogos = document.getElementsByClassName('jogos')
const golsPro = document.getElementsByClassName('golsPro')
const golsContra = document.getElementsByClassName('golsContra')
const vitorias = document.getElementsByClassName('vitorias')
const empates = document.getElementsByClassName('empates')
const derrotas = document.getElementsByClassName('derrotas')

async function tabela(){
    const tabelaApiUrl = 'https://apiv3.apifootball.com/?action=get_standings&league_id=99&APIkey=fb4986f0ea27314661825299f974bc53aa83bc835540ff096a51b2ac20adeba0'
    const fetching = await fetch(tabelaApiUrl).then(response => response.json())
    const equipes = fetching.map(e => e.team_name)
    const logos = fetching.map(e => `<img src="${e.team_badge}" alt="">`)
    const pontos_time = fetching.map(e => parseInt(e.home_league_PTS) + parseInt(e.away_league_PTS))
    const jogos_time = fetching.map(e => e.overall_league_payed)
    const gols_time = fetching.map(e => e.overall_league_GF)
    const gols_contra_time = fetching.map(e => e.overall_league_GA)
    const vitorias_time = fetching.map(e => e.overall_league_W)
    const empates_time = fetching.map(e => e.overall_league_D)
    const derrotas_time = fetching.map(e => e.overall_league_L)

    console.log(fetching)
    for (let i = 0; i < fetching.length; i++) {
        times[i].innerHTML = logos[i] + equipes[i]
        pontos[i].innerHTML = pontos_time[i]
        jogos[i].innerHTML = jogos_time[i]
        golsPro[i].innerHTML = gols_time[i]
        golsContra[i].innerHTML = gols_contra_time[i]
        vitorias[i].innerHTML = vitorias_time[i]
        empates[i].innerHTML = empates_time[i]
        derrotas[i].innerHTML = derrotas_time[i]
        //logo[i].innerHTML = 
    }

    if(window.screen.width < 601){
        for (let i = 0; i < golsContra.length; i++) {
            console.log('oi')
            golsContra[i].remove()
        }
    }
}

tabela()
const time = document.getElementsByClassName('time')
const jogador = document.getElementsByClassName('jogador')
const gols = document.getElementsByClassName('gols')

async function artilheiros() {
    const url = 'https://apiv3.apifootball.com/?action=get_topscorers&league_id=99&APIkey=fb4986f0ea27314661825299f974bc53aa83bc835540ff096a51b2ac20adeba0'
    const fetching = await fetch(url).then(response => response.json())
    console.log(fetching)

    for (let i = 0; i < fetching.length; i++) {
        time[i].innerHTML = fetching[i].team_name
        jogador[i].innerHTML = fetching[i].player_name
        gols[i].innerHTML = fetching[i].goals
    }
}

artilheiros()
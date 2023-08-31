const input = document.getElementById('pesquisa')
const botao = document.getElementById('botao')
const header = document.querySelector('.card-header')
const namePlayer = document.getElementById('name')
const time = document.querySelector('.time')
const matches = document.querySelector('.matches')
const gols = document.getElementById('gols')
const assist = document.getElementById('assists')
const ga = document.getElementById('ga')
const age = document.getElementById('age')
const ct_cards = document.getElementById('ct_cards')

let value = 'Tiquinho Soares'
Jogador(value)

botao.addEventListener('click', () => {
    value = input.value
    console.log(value)
    Jogador(value)
})

async function Jogador(nome){
    const url = `https://apiv3.apifootball.com/?action=get_players&player_name=${nome}&APIkey=fb4986f0ea27314661825299f974bc53aa83bc835540ff096a51b2ac20adeba0` 
    const fetching = await fetch(url).then(res => res.json())
    console.log(fetching)
    const filtro = fetching.filter(e => e.player_image !== '' && e.team_key == 1875 || e.team_key == 546 || e.team_key == 558 || e.team_key == 542 || e.team_key == 1879 || e.team_key == 2015 || e.team_key == 551 || e.team_key == 2018 || e.team_key == 1865 || e.team_key == 1738 || e.team_key == 556 || e.team_key == 1875 || e.team_key == 1745 || e.team_key == 2017 ||e.team_key == 559 ||e.team_key == 1938 ||e.team_key == 1985 ||e.team_key == 566 ||e.team_key == 1877 ||e.team_key == 2019 ||e.team_key == 1736)
    console.log(filtro)
    header.innerHTML = `
    <img src="${filtro[0].player_image != 404 ? filtro[0].player_image : '../assets/unnamed(19).png'}" alt="">
    <span>#${filtro[0].player_number}</span>
    `
    namePlayer.innerHTML = filtro[0].player_name
    time.innerHTML = filtro[0].team_name
    matches.innerHTML = `${filtro[0].player_match_played} Jogos`
    gols.innerHTML = filtro[0].player_goals
    assist.innerHTML = filtro[0].player_assists
    const goals = parseInt(filtro[0].player_goals)
    const assists = parseInt(filtro[0].player_assists)
    const golsMaisAssists = goals + assists
    ga.innerHTML = golsMaisAssists
    age.innerHTML = filtro[0].player_age + ' anos'

    console.log(filtro.length)
    if (filtro.length > 1) {
        ct_cards.style.height = '100%'
        for (let i = 1; i < filtro.length; i++) {
            ct_cards.innerHTML += `
            <div class="card-jogador">
            <div class="card-header">
            <img src="${filtro[i].player_image[0] == '404' ? '../assets/unnamed(19).png' : filtro[i].player_image}" alt="">
            <span>#${filtro[i].player_number}</span>
            </div>
            <h1 id="name">${filtro[i].player_name}</h1>
            <div class="stats">
                <h3 align="center" class="time">${filtro[i].team_name}</h3>
                <h5 align="center" class="matches">${filtro[i].player_match_played} Jogos</h5>
                <ul class="stats-player">
                    <li align="center">Gols: <span id="gols">${filtro[i].player_goals}</span></li>
                    <li class="assistencias">Assistências: <span id="assists" align="center">${filtro[i].player_assists}</span></li>
                    <li>G+A: <span id="ga">${golsMaisAssists}</span></li>
                </ul>
                <h4 align="center" id="age">${filtro[i].player_age} anos</h4>
            </div>
        </div>
            `
            
        }
    }

}




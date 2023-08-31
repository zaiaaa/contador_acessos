const homeTeam = document.getElementsByClassName('homeTeam')
const awayTeam = document.getElementsByClassName('awayTeam')
const golsCasa = document.getElementsByClassName('golsCasa')
const golsFora = document.getElementsByClassName('golsFora')
const date = document.getElementsByClassName('data')
const rodadaPartida = document.getElementsByClassName('rodada')
//console.log(homeTeam)
async function Rodada(){
    const url = 'https://apiv3.apifootball.com/?action=get_events&from=2023-08-25&to=2023-08-28&league_id=99&APIkey=fb4986f0ea27314661825299f974bc53aa83bc835540ff096a51b2ac20adeba0'
    const fetching = await fetch(url).then(response => response.json())
    console.log(fetching)
            for (let i = 0; i < fetching.length; i++) {
                
                rodadaPartida[i].innerHTML = fetching[i].match_round
                homeTeam[i].innerHTML = `
                <img src="${fetching[i].team_home_badge}"  alt="">
                <h4>${fetching[i].match_hometeam_ft_score
                }</h4>
                `
                awayTeam[i].innerHTML = `
                <img src="${fetching[i].team_away_badge}"  alt="">
                <h4>${fetching[i].match_awayteam_ft_score
                }</h4>
                `

                date[i].innerHTML = fetching[i].match_date.split('-').reverse().join('/') + '<br>' + fetching[i].match_time;
        
                if(fetching[i].goalscorer.length !== 0){
                    if(fetching[i].goalscorer.home_scorer !== ''){
                        golsCasa[i].innerHTML = `${fetching[i].goalscorer.map(e => `<li class="listaHome">${e.home_scorer !== '' ? e.time + "'" : ''} ${e.home_scorer}</li>`).join('')}`
                    }
                    if(fetching[i].goalscorer.away_scorer !== ''){
                        golsFora[i].innerHTML = `${fetching[i].goalscorer.map(e => `<li class="listaHome">${e.away_scorer !== '' ? e.time + "'" : ''} ${e.away_scorer}</li>`).join('')}`
                    }
                }
                
            }
        
       
}
Rodada()
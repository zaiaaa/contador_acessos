const btnBurger = document.getElementById('burger')
const btnClose = document.getElementById('close')
const menu = document.getElementById('dropDown')



setInterval(() => {
    if(window.innerWidth > 1200){
        btnBurger.style.display = 'none'
        btnClose.style.display = 'none'
        menu.style.display = 'none'
    }else if(window.innerWidth < 1200 && (btnBurger.style.display == 'none' && btnClose.style.display == 'none')){
        btnBurger.style.display = 'block'
    }
    
}, 500);

btnBurger.addEventListener('click', () => {
    btnBurger.style.display = 'none'
    btnClose.style.display = 'block'
    menu.style.display = 'block'
})

btnClose.addEventListener('click', () => {
    btnClose.style.display = 'none'
    btnBurger.style.display = 'block'
    menu.style.display = 'none'
})

const apiToken = 'fb4986f0ea27314661825299f974bc53aa83bc835540ff096a51b2ac20adeba0'

const tabelaApiUrl = 'https://apiv3.apifootball.com/?action=get_standings&league_id=99&APIkey=fb4986f0ea27314661825299f974bc53aa83bc835540ff096a51b2ac20adeba0'

const rodada = 'https://apiv3.apifootball.com/?action=get_events&from=2023-08-25&to=2023-08-28&league_id=99&APIkey=fb4986f0ea27314661825299f974bc53aa83bc835540ff096a51b2ac20adeba0'

//const artilheiros = 'https://apiv3.apifootball.com/?action=get_topscorers&league_id=99&APIkey=fb4986f0ea27314661825299f974bc53aa83bc835540ff096a51b2ac20adeba0'

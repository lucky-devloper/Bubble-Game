let btnE1 = document.querySelector('button')

function createbubble() {
    var clutter = "";
    for (let i = 1; i <= 42; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector(".pbuttom").innerHTML = clutter
}
createbubble()

let timer = 20
function runTimer(){
    var interval =setInterval(()=>{
        if (timer >= 0) {
            document.querySelector("#time").innerHTML = `${timer--}`
        }else{
            clearInterval(interval)
            document.querySelector(".pbuttom").innerHTML = `<h2>Game Over</h2>`
            btnE1.style.display = "block"
        }
    },1000)
}
runTimer()

let hitrandumnum = 0
function getNewHit(){
    hitrandumnum = Math.floor(Math.random()*10)
    document.querySelector("#hit").innerHTML = hitrandumnum
}
getNewHit()

let score = 0
function increaseScore(){
    document.querySelector("#scoreval").innerHTML = score
    score += 10
}
increaseScore()

document.querySelector(".pbuttom").addEventListener('click', function(details){
    let clicknum = Number(details.target.innerHTML)
    if (clicknum === hitrandumnum) {
        increaseScore()
        createbubble()
        getNewHit()
    }
})


btnE1.onclick = function(){
    window.location.reload()
}
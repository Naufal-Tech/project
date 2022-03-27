/*Variable List*/
const rock_user = document.getElementById('r-u');
const paper_user = document.getElementById('p-u');
const scissors_user = document.getElementById('s-u');
const rock_com = document.getElementById('r-c');
const paper_com = document.getElementById('p-c');
const scissors_com = document.getElementById('s-c');
const winBox = document.getElementById('box');
const inFo = document.getElementById("h1");
const refresh = document.getElementById("refresh");
const x = document.querySelector(".user-tool");
const addElement1 = [...document.getElementsByClassName("dissap")];
const button = document.querySelector('button');

let SCORE = 0

/*tombol ajaib*/
const coba = document.getElementById('coba');
document.getElementById('mybutton').onclick = function(){
    coba.classList.toggle('fade');
}
/*Hide and Show*/

/*Blink by Class*/
function blinkIt() {
    var blinks = document.getElementsByClassName("boxR");
    for(var i = 0, l = blinks.length; i < l; i++){
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    blink.style.visibility = visiblity == 'visible' ? 'hidden' : 'visible';
    }
}
setInterval(blinkIt, 500);

/*End of Blink by Class*/

/*BLINK BY ID
window.addEventListener("load", function() {
    var f = document.getElementById('h1');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);

}, false);
*/

/*Math Calculation and Result Box*/
function comThink() {
    var choices = ['Batu', 'Gunting', 'Kertas'];
    var randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];
}

//Color Change 
function resultObject() {
    winBox.classList.add('winBox'),
        inFo.setAttribute("style", "font-size:36px; color:white;");
}

function resultDraw() {
    winBox.classList.add('drawBox');
    inFo.setAttribute("style", "font-size:36px; color:white;");
}

function resultLose() {
    winBox.classList.add('loseBox');
    inFo.setAttribute("style", "font-size:36px; color:white;");
}
/*Math Calculation and Result Box*/

/*Win - Lose - Draw*/
function win() {
    console.log("You Win!");
    resultObject();
    inFo.innerText = "You Win!"
    setScore(SCORE + 1);
}

function lose() {
    console.log("You Lose!");
    resultLose();
    inFo.innerText = "You Lose!"
}

function draw() {
    console.log("Draw");
    resultDraw();
    inFo.innerText = "Draw"
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}
/*End of Win - Lose - Draw*/

/*Get Game Winner*/
function getWinner(userHand) {
    const cpHand = comThink();
    console.log("Hasil User = " + userHand);
    console.log("Hasil Computer = " + cpHand);

    switch (userHand + cpHand) {
        case "BatuGunting":
        case "GuntingKertas":
        case "KertasBatu":
            win();

            break;
        case "GuntingBatu":
        case "BatuKertas":
        case "KertasGunting":
            lose();

            break;
        case "GuntingGunting":
        case "BatuBatu":
        case "KertasKertas":
            draw();
    }

    switch (cpHand) {
        case "Batu":
            rock_com.classList.add('chosen');
            break;

        case "Gunting":
            scissors_com.classList.add('chosen');
            break;

        case "Kertas":
            paper_com.classList.add('chosen');
    }
}
/*End of Get Game Winner*/

/*Human Choice*/
function play() {
    rock_user.addEventListener('click', function () {
        this.classList.add('chosen');
        getWinner("Batu");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    paper_user.addEventListener('click', function () {
        this.classList.add('chosen');
        getWinner("Kertas");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    scissors_user.addEventListener('click', function () {
        this.classList.add('chosen');
        getWinner("Gunting");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;");
        })
    })
}

play();

/*Refresh and remove box*/
refresh.addEventListener('click', function () {
    /*tidak usah dipakai ribet
    window.location.reload();
    */

    addElement1.forEach(addElement2 => {
        addElement2.classList.remove('chosen')
    });
    addElement1.forEach(addElement3 => {
        addElement3.removeAttribute("style", "cursor: not-allowed;pointer-events: none;")
    });

    winBox.classList.remove('winBox');
    winBox.classList.remove('drawBox');
    winBox.classList.remove('loseBox');
    inFo.removeAttribute("style", "color: ''; font-size:'' ");

    inFo.style.marginTop = null;
    inFo.style.fontSize = null;
    inFo.innerText = "VS";
    button.disabled = false;
})
/*End Refresh and Remove Box*/
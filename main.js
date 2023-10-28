document.addEventListener('DOMContentLoaded', () =>{
const width= 10;
const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));

const score = document.querySelector('#score');

const startButton = document.querySelector('#start-button');

const lTetromino =[
    [1, width + 1, width*2 + 1, 2],
    [width, width+1, width+2, width*2+2],
    [width*2, 1, width +1, width*2+1],
    [width, width*2,width*2+1,width*2+2],
]

const zTetromino=[
    [width*2,width*2+1,width+1,width+2],
    [0,width,width+1,width*2+1],
    [width*2,width*2+1,width+1,width+2],
    [0,width,width+1,width*2+1],
]

const tTetromino=[
    [width, 1, width+1, width+2],
    [1, width+1, width*2+1,width+2],
    [width,width+1,width+2,width*2+1],
    [width,1,width+1,width*2+1],
]

const oTetromino=[
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
]

const iTetromino=[
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
]

const theTetrominoes=[
    lTetromino,zTetromino, tTetromino,oTetromino,iTetromino
]

let currentPosition = 4;
let currentRotation =0
let random = Math.floor(Math.random()*theTetrominoes.length)

let current= theTetrominoes[random][0];

function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
}

function undraw(){
    current.forEach(index=>{
        squares[currentPosition + index].classList.remove('tetromino')
    })
}

const timerId = setInterval(moveDown,1000);

function moveDown(){

}

})
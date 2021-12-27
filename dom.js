const playButton = document.getElementById('playButton');
const input = document.getElementById('numberOfBox');
const container = document.getElementById('gridContainer');
const buttonBoxes = 'buttonBoxes';
const titleNumber = document.getElementById("titleNumber");
const popup = document.getElementById("popup");
const newGame = document.getElementById("newGame");
let btn;
let random;
let isPlayer = true;
const x = 'X';
const o = 'O';

playButton.onclick = () => {
    let numberOfbox = input.value;
    let boxes = Math.pow(numberOfbox, 2);
    if (numberOfbox <= 2) {
        alert('Min length is 3!');
    } else {
        input.style.display = 'none';       
        playButton.style.display = 'none';
        titleNumber.style.display = 'none';
        container.style.gridTemplateColumns = `repeat(${numberOfbox}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${numberOfbox}, 1fr)`;
        for (i = 0; i < boxes; i++) {
            const box = document.createElement('button');
            container.appendChild(box);
            box.style.border = '1px solid black';
            box.className = buttonBoxes;
            box.style.textAlign = 'center';
            box.style.fontSize = '80px';
            if(numberOfbox>3 && numberOfbox<6){
                box.style.fontSize = '50px';
            }else if(numberOfbox>=6 && numberOfbox<= 8){
                box.style.fontSize = '34px';
            }else if(numberOfbox>8){
                box.style.fontSize = '20px';
            }
        }
    }
    btn = document.getElementsByClassName(buttonBoxes);
    function randomItem(a) {
        return Math.floor(Math.random()*a);
    }
    random = randomItem(btn.length)
}
playButton.addEventListener('click', () => {
    for (i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            if (this.innerHTML === '') {
                if (isPlayer) {
                    this.innerHTML = x;
                    isPlayer = false;
                        checkHorizontalWin();
                        checkVerticalWin();
                        checkLeftDiagonal();
                        checkRightDiagonal();
                    setTimeout(()=>{
                        function randomItem(a) {
                            return Math.floor(Math.random()*a);
                        }
                        let arr = Array.from(btn);
                        // horizontal
                        if(arr[0].innerHTML === x && arr[1].innerHTML ===x && arr[2].innerHTML ===''){
                            arr[2].innerHTML = o
                        }else if(arr[1].innerHTML === x && arr[2].innerHTML ===x && arr[0].innerHTML ===''){
                            arr[0].innerHTML = o
                        }else if(arr[0].innerHTML === x && arr[2].innerHTML ===x && arr[1].innerHTML ===''){
                            arr[1].innerHTML = o
                        }

                        else if(arr[3].innerHTML === x && arr[4].innerHTML ===x && arr[5].innerHTML ===''){
                            arr[5].innerHTML = o
                        }else if(arr[3].innerHTML === x && arr[5].innerHTML ===x && arr[4].innerHTML ===''){
                            arr[4].innerHTML = o
                        }else if(arr[4].innerHTML === x && arr[5].innerHTML ===x && arr[3].innerHTML ===''){
                            arr[3].innerHTML = o
                        }

                        else if(arr[6].innerHTML === x && arr[7].innerHTML ===x && arr[8].innerHTML ===''){
                            arr[8].innerHTML = o
                        } else if(arr[6].innerHTML === x && arr[8].innerHTML ===x && arr[7].innerHTML ===''){
                            arr[7].innerHTML = o
                        } else if(arr[7].innerHTML === x && arr[8].innerHTML ===x && arr[6].innerHTML ===''){
                            arr[6].innerHTML = o
                        }

                        //vertical
                        else if(arr[0].innerHTML === x && arr[3].innerHTML ===x && arr[6].innerHTML ===''){
                            arr[6].innerHTML = o
                        }else if(arr[3].innerHTML === x && arr[6].innerHTML ===x && arr[0].innerHTML ===''){
                            arr[0].innerHTML = o
                        }else if(arr[0].innerHTML === x && arr[6].innerHTML ===x && arr[3].innerHTML ===''){
                            arr[3].innerHTML = o
                        }

                        else if(arr[1].innerHTML === x && arr[4].innerHTML ===x && arr[7].innerHTML ===''){
                            arr[7].innerHTML = o
                        }else if(arr[1].innerHTML === x && arr[7].innerHTML ===x && arr[4].innerHTML ===''){
                            arr[4].innerHTML = o
                        }else if(arr[4].innerHTML === x && arr[7].innerHTML ===x && arr[1].innerHTML ===''){
                            arr[1].innerHTML = o
                        }

                        else if(arr[2].innerHTML === x && arr[5].innerHTML ===x && arr[8].innerHTML ===''){
                            arr[8].innerHTML = o
                        }else if(arr[2].innerHTML === x && arr[8].innerHTML ===x && arr[5].innerHTML ===''){
                            arr[5].innerHTML = o
                        }else if(arr[5].innerHTML === x && arr[8].innerHTML ===x && arr[2].innerHTML ===''){
                            arr[2].innerHTML = o
                        }

                        //diagonals
                        else if(arr[0].innerHTML === x && arr[4].innerHTML ===x && arr[8].innerHTML ===''){
                            arr[8].innerHTML = o
                        }else if(arr[4].innerHTML === x && arr[8].innerHTML ===x && arr[0].innerHTML ===''){
                            arr[0].innerHTML = o
                        }else if(arr[8].innerHTML === x && arr[0].innerHTML ===x && arr[4].innerHTML ===''){
                            arr[4].innerHTML = o
                        }
                        else if(arr[2].innerHTML === x && arr[4].innerHTML ===x && arr[6].innerHTML ===''){
                            arr[6].innerHTML = o
                        }else if(arr[4].innerHTML === x && arr[6].innerHTML ===x && arr[2].innerHTML ===''){
                            arr[2].innerHTML = o
                        }else if(arr[6].innerHTML === x && arr[2].innerHTML ===x && arr[4].innerHTML ===''){
                            arr[4].innerHTML = o
                        }

                        else {
                            let filtered = arr.filter(el=>el.innerHTML==='')
                            random = randomItem(filtered.length);
                            filtered[random].innerHTML = o;
                        }
                        isPlayer = true;
                        checkHorizontalWin();
                        checkVerticalWin();
                        checkLeftDiagonal();
                        checkRightDiagonal();
                    },1000)
                }
                } 
            else {
                alert('Field is already taken!');
            }
        }
    }
})

const checkHorizontalWin = () => {
    let horizontalArray = Array.from(btn);
    let newHorizontal;
    while (horizontalArray.length > 0) {
        newHorizontal = horizontalArray.splice(0, input.value);
        if (newHorizontal.every(el => el.innerHTML === x)) {
            popup.style.display = 'block';
            changeColor(newHorizontal);
            return false
        } else if (newHorizontal.every(el => el.innerHTML === o)) {
            alert('LOOSER!');
            return changeColor(newHorizontal);
        }
    }
}

const checkVerticalWin = () => {
    let verticalArray = Array.from(btn);
    let n = parseInt(input.value);
    for (k = 0; k < n; k++) {
        let arr = []
        for (i = k; i < verticalArray.length; i += n) {
            arr.push(verticalArray[i]);
        }
        if (arr.every(el => el.innerHTML === x)) {
            popup.style.display = 'block';
             changeColor(arr);
             return false
        } else if (arr.every(el => el.innerHTML === o)) {
            alert('LOOSER!');
            changeColor(arr);
        }
    }
}

const checkLeftDiagonal = () => {
    let leftDiagonalArray = Array.from(btn);
    let leftDiagonal = parseInt(input.value) + 1;
    let arr = [];
    for (i = 0; i < leftDiagonalArray.length; i += leftDiagonal) {
        arr.push(leftDiagonalArray[i]);
    }
    if (arr.every(el => el.innerHTML === x)) {
        popup.style.display = 'block';
         changeColor(arr);
         return false
    } else if (arr.every(el => el.innerHTML === o)) {
        alert('LOOSER!');
        changeColor(arr);
    }
}

const checkRightDiagonal = () => {
    let rightDiagonalArray = Array.from(btn);
    let rightDiagonal = parseInt(input.value) - 1;
    let arr = [];
    for (i = rightDiagonal; i < rightDiagonalArray.length - 1; i += rightDiagonal) {
        arr.push(rightDiagonalArray[i]);
    }
    if (arr.every(el => el.innerHTML === x)) {
        popup.style.display = 'block';
        changeColor(arr);
        return false
    } else if (arr.every(el => el.innerHTML === o)) {
        alert('LOOSER!');
        changeColor(arr);
    }
}

const checkDraw = ()=>{
    let  drawArray = Array.from(btn);
    if(drawArray.every(el=>el.innerHTML!=='')){
        isPlayer = true
        return alert('Draw!');
    }
}

const changeColor=(array)=>{
    for(i=0; i<array.length; i++){
        array[i].style.color = 'rgb(224, 19, 111)';
    }
}

newGame.onclick=()=>{
    for (let i = 0; i < btn.length; i++){
        btn[i].innerHTML = '';
        popup.style.display = 'none';
        btn[i].style.color = '#000'
    }
}



const width = +getComputedStyle(document.body).getPropertyValue("--width--").substring(0,2)
const bar = +getComputedStyle(document.body).getPropertyValue("--bar-value--").substring(0,2)
const gap = +getComputedStyle(document.body).getPropertyValue("--gap--").substring(0,1)
// Start Functions
const under28 = function () {return Math.floor(Math.random()*1000) %28+2;}
function search(num,arr) {
    const len = arr.length;
    for (let i =0; i < len ;i++) {
        if(arr[i] === num) return true;
    }
    return false;
}
function searchForClass(ele,word) {
    const n = ele.classList.length;
    const arrr = ele.classList;
    for (let i =0; i <n; i++) {
        if (arrr[i] === word) return true;
    }
    return false;
}
// End Functiona
// Put Elements In Veriables
const pieces = document.getElementById("77").children, upper = document.querySelector(".up"),down = document.querySelector(".down"), bo = document.querySelector("body"), left = document.querySelector(".left"),right = document.querySelector(".right");
// Array Of Random Order From 1 To 28

    let ar = [under28()]; 
    let temp = under28();
    for (let i =1; i < 28; i++) {
        while(search(temp,ar) === true) temp = under28();
        ar.push(temp)
    }

// Finish The Array
// Clone Pieces In Places
for (let i = 0;i < 7;i++)  upper.appendChild(pieces[ar[i]].cloneNode(true));
for (let i = 7;i < 14;i++)  down.appendChild(pieces[ar[i]].cloneNode(true));
for (let i = 14;i < 21;i++)  left.appendChild(pieces[ar[i]].cloneNode(true));
for (let i = 21;i < 28;i++)  right.appendChild(pieces[ar[i]].cloneNode(true));
// End Cloning
// Rrmove Elements
{
    let n = bo.childElementCount - 1;
    for (let i = 2; i < n ;i++) {
        if (bo.children[i] === undefined)continue;
        bo.children[i].remove();
        i--;
    }
}
// End Removing
let mainPeices = document.querySelectorAll(".bar .piece");
let lLeftValu = 0,rLeftValue = 0, leftValue = 0,counter=0,leftCounter = 0,rightCounter = 0,temp1,temp2,rightPart,leftPart,bool1,bool2,bool3,bool4,degree = 90,eleTemp,swit, noEleUpper, noEleDown,upperWin = 0,lowerWin = 0,winningFunction = false, leftTopValue = 0,rightTopValue = 0,FinalTopValue = 0,stopLeft = false, stopRight = false;
let upperPeices = document.querySelectorAll(".bar .up .piece");
let lowerPieces = document.querySelectorAll(".bar .down .piece");
for (let i = 0; i < 28; i++) {
    mainPeices[i].addEventListener('click', function() {
        // Start Function


        if (winningFunction) return;
        if (counter > 0){
            if (swit === this.parentElement.classList[0]) return;
            
            swit  = this.parentElement.classList[0];
            temp1 = this.children[1];
            temp2 = this.children[3];
            bool1 = temp1.classList[2] === rightPart.classList[2];
            bool2 = temp1.classList[2] === leftPart.classList[2];
            bool3 = temp2.classList[2] === rightPart.classList[2];
            bool4 = temp2.classList[2] === leftPart.classList[2];
            if (!bool1 && !bool2 && !bool3 && !bool4)  return;
            let tt = 2*width - width/2,
            ll = width*2 - width/2;
            if (bool1) {
                rightPart = temp2;
                if (!stopRight) {
                    rLeftValue = width*2*rightCounter;
                    if (width*2*rightCounter <= (width*gap)/2){
                        rightCounter++;
                        degree = -90;
                    }
                    else {
                        rLeftValue-=ll;
                        degree = 360;
                        if (rightTopValue == 0) rightTopValue+=tt
                        else rightTopValue +=width*2;
                    }
                }
                if (rightTopValue >= ((width*gap)/2) ) {
                    stopRight = true;
                    FinalTopValue = rightTopValue - (width*2 - width/2);
                    degree = 90;
                    rLeftValue-=width*2 
                }
                else FinalTopValue = rightTopValue;
                leftValue = rLeftValue;
            }
            else if (bool2) {
                leftPart = temp2;
                if (!stopLeft) {
                    lLeftValu = -width*2*leftCounter;
                    if (width*2*leftCounter <= (width*gap)/2) {
                        leftCounter++;
                        degree = 90;
                    }
                    else {
                        lLeftValu+=ll;
                        degree = 180;
                        if( leftTopValue == 0 )leftTopValue+=tt ;
                        else leftTopValue +=width*2;
                    }
                }
                if (leftTopValue >= ((width*gap)/2) ) {
                    stopLeft = true;
                    FinalTopValue = -(leftTopValue - (width*2 - width/2));
                    degree = -90;
                    lLeftValu+=width*2


                }
                else FinalTopValue = -leftTopValue;
                leftValue = lLeftValu;

            }
            else if (bool3) {
                rightPart = temp1;
                if (!stopRight) {
                    rLeftValue = width*2*rightCounter;
                    if (width*2*rightCounter <= (width*gap)/2) {
                        rightCounter++;
                        degree = 90;
                    }
                    else  {
                        rLeftValue-=ll;
                        degree = 180;
                        if( rightTopValue == 0 ) rightTopValue+=tt ;
                        else rightTopValue +=width*2;
                    }
                }
                if (rightTopValue >= ((width*gap)/2) ) {
                    stopRight = true;
                    FinalTopValue = rightTopValue - (width*2 - width/2);
                    degree = -90;
                    rLeftValue-=width*2

                }
                else FinalTopValue = rightTopValue;
                leftValue = rLeftValue 
            }
            else if (bool4) {
                leftPart = temp1;
                if (!stopLeft) {
                    lLeftValu = -width*2*leftCounter;
                    if (width*2*leftCounter <= (width*gap)/2)  {
                        leftCounter++;
                        degree = -90;
                    }
                    else {
                        lLeftValu+=ll;
                        degree = 360;
                        if( leftTopValue == 0 )leftTopValue+=tt ;
                        else leftTopValue +=width*2;
                    }
                }
                if (leftTopValue >= ((width*gap)/2) ) {
                    stopLeft = true;
                    FinalTopValue = -(leftTopValue - (width*2 - width/2));
                    degree = 90;
                    lLeftValu+=width*2

                }
                else FinalTopValue = -leftTopValue;
                leftValue = lLeftValu;
            }
            
        }
        else {
            if (this.innerHTML !== eleTemp.innerHTML ) return;
            swit = this.parentElement.classList[0];
            counter++;
            leftCounter++;
            rightCounter++;
            rightPart = this.children[1];
            leftPart = this.children[3];
        }
        this.style.position = "absolute"
        this.style.top = `${( ( width*bar ) /2) + FinalTopValue}px`;
        this.style.left = `calc(50% + ${leftValue}px)`
        this.style.transform =  "rotate("+degree+"deg)";
        this.classList.add("done");

        if (swit === "up") {
            upperWin++;
            if (upperWin === upperPeices.length) {
                console.log("Upper Won !");
                winningFunction = true;
                winFun('upper');
                return;
            }
            checkDown(); 
            borderAll(upperPeices);
            MainLoop:while (noEleDown === 0) {
                if (!checkAppend()) {
                    console.log("Done!");
                    if (swit === "up") swit = "down";
                    else swit = "up";
                    break MainLoop;
                }
                append(swit);
                checkDown();
            }
            
            
        }
        else {
            lowerWin++;
            if (lowerWin === lowerPieces.length) {
                console.log("Lower Won !");
                winningFunction = true;
                winFun('lower');
                return;
            }
            checkUp();
            borderAll(lowerPieces);
            MainLoop: while (noEleUpper === 0) {
                if (!checkAppend()) {
                    console.log("Done");
                    if (swit === "up") swit = "down";
                    else swit = "up";
                    break MainLoop;
                }
                append(swit);
                checkUp();
            }
            
        }
     
        
        // End Function

    })
}
function checkDown() {
    lowerPieces = document.querySelector(".bar .down").children;
    const n = lowerPieces.length;
    noEleDown = 0;
    for (let i = 0; i< n; i++) {
        temp1 = lowerPieces[i].children[1];
        temp2 = lowerPieces[i].children[3];
        bool1 = temp1.classList[2] === rightPart.classList[2];
        bool2 = temp1.classList[2] === leftPart.classList[2];
        bool3 = temp2.classList[2] === rightPart.classList[2];
        bool4 = temp2.classList[2] === leftPart.classList[2];
        if (!bool1 && !bool2 && !bool3 && !bool4)  {
            lowerPieces[i].style.backgroundColor = "#999"
            continue;
        }
        else {
            lowerPieces[i].style.backgroundColor = "#fff";
            if(!searchForClass(lowerPieces[i],"done")) noEleDown++;
        }
    }
}
function checkUp() {
    upperPeices = document.querySelector(".bar .up").children;
    const n = upperPeices.length;
    noEleUpper = 0;
    for (let i = 0; i< n; i++) {
        temp1 = upperPeices[i].children[1];
        temp2 = upperPeices[i].children[3];
        bool1 = temp1.classList[2] === rightPart.classList[2];
        bool2 = temp1.classList[2] === leftPart.classList[2];
        bool3 = temp2.classList[2] === rightPart.classList[2];
        bool4 = temp2.classList[2] === leftPart.classList[2];
        if (!bool1 && !bool2 && !bool3 && !bool4)  {
            upperPeices[i].style.backgroundColor = "#999"
        }
        else {
            upperPeices[i].style.backgroundColor = "#fff"
            if(!searchForClass(upperPeices[i],"done")) noEleUpper++;

        }
    }
}
function startCheck() {
    let max = 0,temp;
    for (let i = 0; i < 7; i++) {
        if (upperPeices[i].classList.length === 2) {
            temp = upperPeices[i].classList[1];
            if (temp > max) { 
                max = temp; 
                eleTemp = upperPeices[i]; 
            }
            }
        
        if (lowerPieces[i].classList.length === 2) {
            temp = lowerPieces[i].classList[1] ;
            if (temp > max) { 
                max = temp; 
                eleTemp = lowerPieces[i];
            }

        }
    }    
    for (let i = 0; i < 7; i++) {
        if (upperPeices[i].innerHTML !== eleTemp.innerHTML) {
            upperPeices[i].style.backgroundColor = "#999"
        }
        if (lowerPieces[i].innerHTML !== eleTemp.innerHTML) {
            lowerPieces[i].style.backgroundColor = "#999"
        }
    }   
}
startCheck();
function borderAll(EleArr) {
    const n = EleArr.length;
    for (let i =0; i < n ; i++) {
        EleArr[i].style.backgroundColor  ="#999"
    }
}
function append(side) {
    const letfPieces = document.querySelectorAll(".bar .left .piece")
    const rightPieces = document.querySelectorAll(".bar .right .piece")
    let swit2;
    if (swit === "up") swit2 = "down";
    else swit2 = "up";
    const theMain = document.querySelector(`.bar .${swit2}`);
    if (letfPieces.length !== 0) theMain.appendChild(letfPieces[0]);
    else if (rightPieces.length !== 0) theMain.appendChild(rightPieces[0]);
    else {
        return false;
    }
    
}
function checkAppend() {
    const letfPieces = document.querySelectorAll(".bar .left .piece")
    const rightPieces = document.querySelectorAll(".bar .right .piece")
    if (letfPieces.length === 0 && rightPieces.length === 0) return false;
    return true;
}
function winFun(side) {
    side[0] = side[0].toUpperCase();
    document.getElementById('start-layer').style.display = "flex"
    document.getElementById('text').innerHTML = `${side} Is Won!`
    document.getElementById('text').style.backgroundColor = `#000`
    document.getElementById('text').style.border = `none`
    document.getElementById('text').removeEventListener('click',noName,false)
}
document.getElementById('text').addEventListener('click',noName)
function noName() {
    document.getElementById('start-layer').style.display = "none"
}
// Uncompleted Tasks

// [x] Append Pieces When Three's No Move 
// [x] Winning Point
// [x] Move On Top When Left Overflow 
// [ ] No Piece And No One Won !



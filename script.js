//un hover for gameDiv
function unHoverGameDiv(){
    var gameDiv = document.getElementById('gameDiv');
    gameDiv.style.transition = '1s ease-in-out';
    gameDiv.style.opacity = '0';
}

//hover for gameDiv
function hoverGameDiv(){
    const gameDiv = document.getElementById('gameDiv');
    gameDiv.style.backgroundColor = 'white';
    gameDiv.style.paddingTop = '10px'
    gameDiv.style.marginTop = '10px'
    gameDiv.style.paddingBottom = '30px';
    gameDiv.style.borderRadius = '20px'
    gameDiv.style.marginLeft = '200px';
    gameDiv.style.marginRight = '200px';
    gameDiv.style.borderStyle = 'none';
    gameDiv.style.textAlign = 'center';
    gameDiv.style.opacity = '1';
    gameDiv.style.transition = '1s ease-in ';
}

function clearInputs(){
    for(let clearingInps = 1; clearingInps <= 3; clearingInps++){
        document.getElementById('gameInpsCol' + clearingInps + 'Row' + '1').value = '';
        document.getElementById('gameInpsCol' + clearingInps + 'Row' + '2').value = '';
        document.getElementById('gameInpsCol' + clearingInps + 'Row' + '3').value = '';
    }

}

function checkWhowWon(){
    let gameInpCol1Row1 = document.getElementById('gameInpsCol1Row1').value;
    let gameInpCol2Row1 = document.getElementById('gameInpsCol2Row1').value;
    let gameInpCol3Row1 = document.getElementById('gameInpsCol3Row1').value;
    let gameInpCol1Row2 = document.getElementById('gameInpsCol1Row2').value;
    let gameInpCol2Row2 = document.getElementById('gameInpsCol2Row2').value;
    let gameInpCol3Row2 = document.getElementById('gameInpsCol3Row2').value;
    let gameInpCol1Row3 = document.getElementById('gameInpsCol1Row3').value;
    let gameInpCol2Row3 = document.getElementById('gameInpsCol2Row3').value;
    let gameInpCol3Row3 = document.getElementById('gameInpsCol3Row3').value;

    //checking for x
    if(gameInpCol1Row1 == 'x' && gameInpCol2Row1 == 'x' && gameInpCol3Row1 == 'x'){
        alert('Player 1 Won!');
        clearInputs();

        //passed
    } else if(gameInpCol1Row2 == 'x' && gameInpCol2Row2 == 'x' && gameInpCol3Row2 == 'x'){
        alert('Player 1 Won!');
        //passed
        clearInputs();
    } else if(gameInpCol1Row3 == 'x' && gameInpCol2Row3 == 'x' && gameInpCol3Row3 == 'x'){
        alert('Player 1 Won!');
        //passed
        clearInputs();
    } else if(gameInpCol1Row1 == 'x' && gameInpCol1Row2 == 'x' && gameInpCol1Row3 == 'x'){
        //passed
        alert('Player 1 Won!');
        clearInputs();
    } else if(gameInpCol2Row1 == 'x' && gameInpCol2Row2 == 'x' && gameInpCol2Row3 == 'x'){
        //passed
        alert('Player 1 Won!');
        clearInputs();
    } else if(gameInpCol3Row1 == 'x' && gameInpCol3Row2 == 'x' && gameInpCol3Row3 == 'x'){
        alert('Player 1 Won!');
        //passed
        clearInputs();
    } else if(gameInpCol1Row1 == 'x' && gameInpCol2Row2 == 'x' && gameInpCol3Row3 == 'x'){
        alert('Player 1 Won!');
        clearInputs();
    } else if(gameInpCol3Row1 == 'x' && gameInpCol2Row2 == 'x' && gameInpCol1Row3 == 'x'){
        alert('Player 1 Won!');
        clearInputs();
    }

    //checking for o
    if(gameInpCol1Row1 == 'o' && gameInpCol2Row1 == 'o' && gameInpCol3Row1 == 'o'){
        alert('Player 2 Won!');
        clearInputs();
    } else if(gameInpCol1Row2 == 'o' && gameInpCol2Row2 == 'o' && gameInpCol3Row2 == 'o'){
        alert('Player 2 Won!');
        clearInputs();
    } else if(gameInpCol1Row3 == 'o' && gameInpCol2Row3 == 'o' && gameInpCol3Row3 == 'o'){
        alert('Player 2 Won!');
        clearInputs();
    } else if(gameInpCol1Row1 == 'o' && gameInpCol1Row2 == 'o' && gameInpCol1Row3 == 'o'){
        alert('Player 2 Won!');
        clearInputs();
    } else if(gameInpCol2Row1 == 'o' && gameInpCol2Row2 == 'o' && gameInpCol2Row3 == 'o'){
        alert('Player 2 Won!');
        clearInputs();
    } else if(gameInpCol3Row1 == 'o' && gameInpCol3Row2 == 'o' && gameInpCol3Row3 == 'o'){
        alert('Player 2 Won!');
        clearInputs();
    } else if(gameInpCol1Row1 == 'o' && gameInpCol2Row2 == 'o' && gameInpCol3Row3 == 'o'){
        alert('Player 2 Won!');
        clearInputs();
    } else if(gameInpCol3Row1 == 'o' && gameInpCol2Row2 == 'o' && gameInpCol1Row3 == 'o'){
        alert('Player 2 Won!');
        clearInputs();
    }
}

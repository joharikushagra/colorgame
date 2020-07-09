var numSquares=6;
var colors= [];
var pickedcolor;
var squares = document.querySelectorAll(".Square");
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}


function setupModeButtons(){
for(i=0;i<modeButtons.length;i++){    
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="Easy" ? numSquares=3 : numSquares=6;
        reset();
    
    })
}
}


function setupSquares(){
    for(var i=0; i<squares.length ;i++)
{
   // squares[i].style.backgroundColor = colors[i];
    //grab a color 
    squares[i].addEventListener("click",function(){
        var clickedcolor= this.style.backgroundColor;
        if(clickedcolor===pickedcolor)
        {messagedisplay.textContent="Correct!";
        changecolor(clickedcolor);
        h1.style.backgroundColor=clickedcolor;
        resetbutton.textContent="Playagain?";}
        else
        {this.style.backgroundColor="#232323";
        messagedisplay.textContent="Try again!";}
    })
}
}

resetbutton.addEventListener("click",function(){
    reset();
})

function reset(){
    resetbutton.textContent="New colors";
    messagedisplay.textContent= "";
    colors=generaterandomcolors(numSquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0; i<squares.length ;i++){
        if(colors[i]){
            squares[i].style.display= "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display= "none";
        }
    
}
    h1.style.backgroundColor="steelblue";

}

// easybtn.addEventListener("click",function(){
//     hardbtn.classList.remove("selected");
//     easybtn.classList.add("selected");
//     numSquares=3;
//     colors=generaterandomcolors(numSquares);
//     pickedcolor=pickcolor();
//     colordisplay.textContent=pickedcolor;
//     for(i=0;i<squares.length;i++){
//         if(colors[i])
//         squares[i].style.backgroundColor=colors[i];
//         else
//         squares[i].style.display="none";
//     }

// })



// hardbtn.addEventListener("click",function(){
//     hardbtn.classList.add("selected");
//     easybtn.classList.remove("selected");
//     numSquares=6;
//     colors=generaterandomcolors(numSquares);
//     pickedcolor=pickcolor();
//     colordisplay.textContent=pickedcolor;
//     for(i=0;i<squares.length;i++){
        
//         squares[i].style.backgroundColor=colors[i];
//         squares[i].style.display="block";
//     }

// })




//colordisplay.textContent=pickedcolor;


// resetbutton.addEventListener("click",function(){
//     resetbutton.textContent="New colors";
//     messagedisplay.textContent= "";
//     colors=generaterandomcolors(numSquares);
//     pickedcolor=pickcolor();
//     colordisplay.textContent=pickedcolor;
//     for(var i=0; i<squares.length ;i++)
// {
//     squares[i].style.backgroundColor = colors[i];
// }
//     h1.style.backgroundColor="steelblue";
// })


// for(var i=0; i<squares.length ;i++)
// {
//    // squares[i].style.backgroundColor = colors[i];
//     //grab a color 
//     squares[i].addEventListener("click",function(){
//         var clickedcolor= this.style.backgroundColor;
//         if(clickedcolor===pickedcolor)
//         {messagedisplay.textContent="Correct!";
//         changecolor(clickedcolor);
//         h1.style.backgroundColor=clickedcolor;
//         resetbutton.textContent="Playagain?";}
//         else
//         {this.style.backgroundColor="#232323";
//         messagedisplay.textContent="Try again!";}
//     })
// }

function changecolor(color)
{
    //change all squares to correct color
    for(i=0;i< squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

//generating random numbers
function pickcolor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterandomcolors(num)
{
    //create array
    var arr=[];
    //add num colors to array
    for(i=0;i<num;i++)
    {
     arr.push(randomcolor());
    }
    //return array
    return arr;
}

function randomcolor()
{
    //create red 0 to 255
    var r= Math.floor(Math.random() * 256);
    //create green 0 to 255
    var g= Math.floor(Math.random() * 256);
    //create blue 0 to 255
    var b= Math.floor(Math.random() * 256);
    return "rgb("+ r +", " +g+ ", " + b+")";

}

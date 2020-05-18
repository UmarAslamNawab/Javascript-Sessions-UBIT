function makeInvisible(){
    document.getElementById('ugly').className="hidden"
}

function makeBig(){
    document.getElementById('bigtext').className+=' big'
}


function swapPic(eId, newPic) {
document.getElementById(eId).src = newPic;
}

var par = document.getElementsByTagName("p");  //[0,1,2]
var textInMiddleParagraph = par[1].innerHTML;
// console.log(textInMiddleParagraph)
alert(textInMiddleParagraph)
textInMiddleParagraph = "My name is umar"
console.log(textInMiddleParagraph)
alert(textInMiddleParagraph)

var e = document.getElementById("mypara");
var paragraphs = e.getElementsByTagName("h1")
console.log(paragraphs[0].innerHTML)
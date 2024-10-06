
/*
function ChangeHTML(){
var oldParagraph=document.getElementById('bar');
var newParagraph="This is a new paragraph, Paragraph 1";

for (let i = 2; i < 11; i++) {
    newParagraph= newParagraph + "<br>This is a new paragraph, Paragraph " + i;
}

oldParagraph.innerHTML=newParagraph;
}
*/

function createNewDivs(){
    for (let i = 0; i < 5; i++) {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode("Hello! I am div " + i);
        newDiv.appendChild(newContent);
        newDiv.id = "Div" + i;
        document.body.appendChild(newDiv);
    }
}


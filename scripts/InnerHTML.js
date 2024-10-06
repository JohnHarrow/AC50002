
function ChangeHTML(){
var oldParagraph=document.getElementById('Par1');
var newParagraph="This is a new paragraph, Paragraph 1";

for (let i = 2; i < 11; i++) {
    newParagraph= newParagraph + "<br>This is a new paragraph, Paragraph " + i;
}

oldParagraph.innerHTML=newParagraph;
}


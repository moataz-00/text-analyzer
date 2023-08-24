document.addEventListener("DOMContentLoaded",function(){
    const analyzebutton=document.getElementById("analyzebutton");
    analyzebutton.addEventListener("click",analyzetext);
});

function analyzetext(){
    const textinput=document.getElementById("textinput").value;
console.log(textinput);
    const wordcount= textinput.trim().split(/\s+/).length;
    console.log(wordcount);
    const charcount=textinput.length;
    let total=0;
    textinput.trim().split(/\s+/).forEach((word)=>{
    total+=word.length;
});

const avgword=total/wordcount;
dispaly(wordcount,charcount,avgword);
}

function dispaly(wordcount,charcount,avgword){
    const word=document.getElementById("wordcount");
    const char=document.getElementById("charcount");
    const avg=document.getElementById("avg");

    word.textContent=wordcount;
    char.textContent=charcount;
    avg.textContent=avgword.toFixed(2);
}
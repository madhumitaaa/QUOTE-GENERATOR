function generatequote() {
    const myquote=document.getElementById("quote");
    const random=Math.floor(Math.random()*quotes.length);
    myquote.textContent=quotes[random];


}
window.onload=generatequote();

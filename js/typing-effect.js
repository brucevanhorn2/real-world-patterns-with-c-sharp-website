// shout out to Joseph at https://codepen.io/josephwong2004/pen/ExgoKde?editors=1010
// thanks dude!
const carouselText = [
    {text: "make your eyes glaze over.", color: "orange"},
    {text: "cause your head to explode.", color: "orange"},
    {text: "make you question your career choice.", color: "orange"},
    {text: "lead to a broken heart.", color: "orange"},
    {text: "force you switch to JavaScript.", color: "orange"},
    {text: "compel you to become a long haul trucker.", color: "orange"},
    {text: "cause you to seek psychological help.", color: "orange"},
    {text: "make you cry in your energy drink.", color: "orange"},
    {text: "make you feel like a total poser.", color: "orange"},
    {text: "lead to general malaise.", color: "orange"},
    {text: "bring about a state of utter depression.", color: "orange"},
    {text: "lead you to make GoF voodoo dolls.", color: "orange"},
]

$( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
        await waitForMs(50);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
const quotes = [
    {
        quotes: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘 존슨",
    }, 
    {
        quotes: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더많이 실험할수록 더나아진다.",
        author: "랄프 왈도 에머슨",
    }, 
    {
        quotes: "계단을 밟아야 계단 위에 올라설수 있다.",
        author: "터키 속담",
    }, 
    {
        quotes: "일하는 시간과 노는 시간을 뚜렷이 구분하라. 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젋은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다",
        author: "루이사 메이 올콧",
    }, 
    {
        quotes: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    }, 
    {
        quotes: "절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다.",
        author: "마이크 맥라렌",
    }, 
    {
        quotes: "그대 자신의 영혼을 탐구하라. 다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요, 그대 혼자 가야할 길임을 명심하라. 비록 다른 이들과 함께 걸을 수는 있으나 다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라.",
        author: "인디언 속담",
    }, 
    {
        quotes: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author: "괴테",
    }, 
    {
        quotes: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author: "아인슈타인",
    }, 
    {
        quotes: "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다.",
        author: "루소",
    }, 
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.round() 소수점 아래 반올림
// Math.ceil() 천장까지 숫자 올리기
// Math.floor() 바닥까지 숫자 내리기
// Math.random() 숫자 랜덤으로 표시

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
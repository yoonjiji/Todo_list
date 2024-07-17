const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // new 는 Date란 object를 만드는 생성자 함수
    // 얘넨 단독으로 못 쓰고 변수 만들어서 씀
    // object를 만들고 Date안에 날짜, 시간 정보를 꺼낼 수 있다.
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock, 1000); 


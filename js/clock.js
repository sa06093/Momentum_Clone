// html에서 clock 관련 태그 불러와주기
const clock = document.querySelector("div#clock");

// 시간 양식 만들어주는 함수
function getClock() {
    const date = new Date();    // 시간 데이터 가져오기
    const hours = String(date.getHours()).padStart(2, "0"); // 가져와서 hour만 빼내기. 'Padstart'는 만약 한자리 수라면 앞이 0인 두자리수 만들어주기
    const minutes = String(date.getMinutes()).padStart(2, "0"); // minute
    const seconds = String(date.getSeconds()).padStart(2, "0"); // second
    clock.innerText = `${hours}:${minutes}`;
}

// 1초 후에 Clock이 뜨니까, 처음에 Clock 한번 줘서 바로 뜨게 해줌
getClock();

// 1000ms = 1s마다 getClock함수 호출
setInterval(getClock, 1000);
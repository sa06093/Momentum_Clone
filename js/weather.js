// 내 openweathermap API_KEY
const API_KEY = "69637017de128f9ce30bba0a9af30aca"

// 위치정보를 성공적으로 얻었을 때 호출되는 함수
function onGeoOk(position){
    // 현재 위치의 위도와 경도를 변수에 저장
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // OpenWeatherMap API를 이용하여 현재 위치의 날씨 정보를 가져오기 위한 URL 생성
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // URL을 사용하여 OpenWeatherMap API에 요청을 보내고 응답을 처리
    fetch(url)
        // 서버 응답을 JSON으로 parsing
        .then((response) => response.json())
        .then((data) => {
            // 날씨 정보를 표시할 HTML 엘리먼트 선택
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            // API에서 받아온 데이터를 이용하여 HTML element에 날씨 정보 표시
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
            city.innerText = data.name;
            
            // 위치 정보를 localstorage에 저장
            const list1 = [lat, lon];
            localStorage.setItem(LOCATION_KEY, JSON.stringify(list1));
    });
}

// 위치정보를 얻기 실패했을 때 호출되는 함수
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// 여기서부터 위치권한 새로고침 시 계속 발생하는 문제 해결
const LOCATION_KEY ="location";
const savedLocation = localStorage.getItem(LOCATION_KEY);

// 만약 localStorage에 내 위치정보가 저장되어있지 않다면
if (savedLocation === null){
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} else{
    // 위치 정보가 저장되어 있다면 해당 정보를 사용하여 onGeoOk 함수 호출
    const [lat, lon] = JSON.parse(savedLocation);
    const fakePosition = {
        coords: {
            latitude: lat,
            longitude: lon
        }
    };
    onGeoOk(fakePosition);
}
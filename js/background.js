const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

// 0~1의 난수 * 이미지 개수(3) => 0 < x < 3의 난수
// Math.floor을 통해 내림 => 0, 1, 2중 하나
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// 생성한 이미지 엘리먼트의 속성인 'src'에 이미지 파일 경로를 할당
bgImage.src = `img/${chosenImage}`

// body에 HTML에 추가해주기
document.body.appendChild(bgImage)
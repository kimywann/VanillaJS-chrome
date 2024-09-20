const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`;
bgImage.style.position = "absolute";
bgImage.style.top = "50%";
bgImage.style.left = "50%";
bgImage.style.transform = "translate(-50%, -50%)";
bgImage.style.width = "100%";
bgImage.style.height = "100%"; // 화면 전체를 덮도록 설정
bgImage.style.objectFit = "cover"; // 이미지 비율 유지하면서 전체 덮음
bgImage.style.zIndex = "-1";

document.body.appendChild(bgImage);
//폴더안에 있는 이미지 이름들을 JS파일에서도 똑같이 쓴다!
const images = ["0.jpg", "1.jpg", "2.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//JS에서 뭔갈 생성해서 그걸 html에 추가하는 것 document.createElement("")
//이미지가 0,1,2 뭐가 될지 모르니 이미지를 추가하기 위해선 html말고 JS가 필요
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//bgImage를 html body내부에 추가, appendchild()는 body에 html을 추가
document.body.appendChild(bgImage);

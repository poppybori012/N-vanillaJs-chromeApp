const colck = document.querySelector("h2#clock");

//시계 만들기~
function getClock() {
  const date = new Date(); //Date object 새로생성, 이걸 호출하는 당시의 현재 날짜랑 시간을 알려줌
  const hours = String(date.getHours()).padStart(2, "0"); //number타입을 받았는데 이걸 string으로 바꾸고 싶음.
  const minutes = String(date.getMinutes()).padStart(2, "0"); //padStart() function은 내가 가지고 있는 string을 보다 길게 만들어야 할때 사용, 원하는 만큼의 길이가 아니라면 string의 앞쪽에 문자를 넣음
  const seconds = String(date.getSeconds()).padStart(2, "0"); //2글자가 되길 원하고, 그렇지 않다면 string앞쪽에 0을 추가
  clock.innerText = `${hours}:${minutes}:${seconds}`; //구한 시간을 id가 clock인 h2의 innerText로 넣어줌
}

getClock(); //새로고침하면 시간을 바로 보여주지 않음. 1초를 기다려야함. 그러므로 getClock()호출
setInterval(getClock, 1000); //실시간으로 보이게 하는 부분, 매초마다 실행

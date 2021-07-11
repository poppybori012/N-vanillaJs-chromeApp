// https://openweathermap.org/ -> 계정 만들기 , 로그인하면 API로 이동 가능. API -> Current Weather Data -> By geographic coordinates Api call복붙하고 {lat}이런 값 복붙
//API는 다른 서버와 이야기 할 수 있는 방법
//JS에서 url 부르는 방법 -> fetch()

const API_KEY = "e7f54a3a378ab31e889c6f5d18ee4c06";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    }); //개발자도구창 Network들어가면 weather?lat=클릭 Preview에 보여지는 모든것 json, fetch는 promise(당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어남)
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

//위치(geolocatioin)을 줌.
//브라우저에서 위치 좌표를 줌.(wifi, 위치, GPS 등)
//getCurrentPosition()는 두개의 함수를 인자로 받음, 성공했을때 실패했을때 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

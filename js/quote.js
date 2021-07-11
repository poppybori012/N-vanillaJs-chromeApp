//명언들을 array로 만듬, 이 배열들은 object로 이루어져있고, 각 object들은 (,)로 구분
const quotes = [
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해", //string으로
    author: "찰리 채플린",
  },
  {
    quote:
      "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
    author: "헬렌켈러",
  },
  { quote: "피할 수 없으면 즐겨라", author: "로버트 엘리엇" },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
  },
  { quote: "계단을 밟아야 계단 위에 올라설수 있다", author: "터키속담" },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다.",
    author: "메이벨 뉴컴버",
  },
  { quote: "1퍼센트의 가능성, 그것이 나의 길이다", author: "나폴레옹" },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "괴테",
  },
  {
    quote:
      "이룰수 없는 꿈을 꾸고 이길수 없는 적과 싸우며, 이룰수 없는 사랑을 하고 견딜 수 없는 고통을 견디고, 잡을수 없는 저 하늘의 별도 잡자",
    author: "세르반테스",
  },
  {
    quote:
      "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자",
    author: "헨리포드",
  },
  {
    quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다",
    author: "동아프리카속담",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;

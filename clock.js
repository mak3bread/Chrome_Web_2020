//시계

const clockContainer=document.querySelector(".js-clock");//js-clock 이라는 class 이름을 찾음
//query selector -> element의 자식을 탐색(여기선 .js-clock의 자식)
const clockTitle=clockContainer.querySelector("h1");

function getTime(){//시계
  const date=new Date();//날짜
  const hours=date.getHours();//시간
  const minutes=date.getMinutes();//분
  const seconds=date.getSeconds();//초
  clockTitle.innerText = `${hours< 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes }:${seconds < 10 ? `0${seconds}`:seconds }`;
  //시간 : 분 : 초 형식 01 ~ 09 형식

}


function init(){
   getTime();//현재 시간을 얻는 함수
   setInterval(getTime,1000);//setInterval 2개의 파라미터를 받는다.  1.실행할 함수를 받고 2. 해당 함수를 실행하고 싶은 시간(기준 ms)
}

init();
//username

const form=document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting=document.querySelector(".js-greetings");
//querySelector -찾은 첫 번째를 가져옴

const USER_LS="currentUser" //local storage
 SHOWING_CN ="showing"

 function saveName(text){//name 저장 function
    localStorage.setItem(USER_LS,text);
 }

 function handleSubmit(event){//submit 시 handle func
     event.preventDefault();//이벤트 기본 동작 막음 / 새로고침
     const currentValue=input.value;//input된 값을 저장하는 currentValue
     paintGreeting(currentValue);
     saveName(currentValue);
 }

function askForName(){//currentuser null일 때 사용 function
   //currentUser add
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);//form에 submit 하면 처리
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
greeting.innerText=`Hello ${text}`
}

function loadName(){//current user load function
    const currentUser=localStorage.getItem(USER_LS) 
    if(currentUser===null){
        //currentUser -> null 없는 경우
        askForName();
    }
    else{//localstorage에 유저가 있는 경우
      paintGreeting(currentUser);
    }
}

function init(){
loadName();
}

init();
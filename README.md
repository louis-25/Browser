# Browser

- ## chapter 1 - window함수 간단히 사용해보기

  window.screen : 모니터의 해상도 <br>
  window.outer : 브라우저 창 크기 <br>
  window.inner : 브라우저의 페이지가 표기되는 부분 (스크롤바 포함) <br>
  documentElement.clientWidth : 스크롤바를 제외한 영역 <br>

- ## chapter 2 - 좌표

  getBoundingClientRect() : DOM요소의 특정위치를 알아낼 수 있다<br>
  client : 마우스로 클릭한곳의 좌표<br>
  page : 마우스로 클릭한곳이 페이지상에서 위치하는 좌표

- ## Window Load
  스크립트 defer옵션 : HTML만 완료되면 호출이된다
  window.addEventListener(' '()=>{});  
  DOMContentLoaded : HTML만 다운로드 완료되면 이벤트 발생
  load : 모든 리소스(css, image)가 다운받아진 후에 이벤트 발생
  beforeunload : 리소스가 다운받아지기 전에 발생하는 이벤트
  unload : 페이지가 unload 되었을때 발생되는 이벤트

# Browser

- ## chapter 1 - window함수 간단히 사용해보기

  window.screen : 모니터의 해상도 <br>
  window.outer : 브라우저 창 크기 <br>
  window.inner : 브라우저의 페이지가 표기되는 부분 (스크롤바 포함) <br>
  documentElement.clientWidth : 스크롤바를 제외한 영역 <br>
  window.scrollBy : 원하는 좌표로 스크롤을 이동한다 <br>

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

- ## 좌표 프로젝트

  mousemove이벤트를 등록하여 마우스커서를 따라다니고 좌표를 표시해보자 <br/>
  JavaScript에서 css값과 HTML요소를 변경할 수 있다<br/>
  <b>
  const tag = document.querySelector('.tag');<br/>
  tag.style.top = `${y}px`; <br/>
  tag.innerHTML = `${x}px ${y}px`; <br/>
  </b>

- ## Find a rabbit

  버튼 클릭시 원하는 위치좌표로 스크롤을 해보자<br/>
  <b>
  const rabbit = document.querySelector('.rabbit');<br/>
  rabbit.scrollIntoView({behavior:"smooth", block: 'center'});<br>
  </b>

- ## shopping_list

  HTML CSS JavaScript를 사용하여 쇼핑리스트를 작성해보자<br>
  HTML로 골격을 세우고, CSS로 꾸미고, JavaScript로 동적인 요소를 추가<br>
  JavaScript로 HTML요소를 동적으로 생성하여 추가할 수 있다<br>

- ## 이벤트

  addEventListner : 특정요소에 이벤트를 등록한다<br>
  removeEventListner : 특정요소에 이벤트를 제거한다<br>
  dispatchEvent : 인공적으로 이벤트를 발생<br>

- ## 이벤트 capturing, bubbling
  이벤트 요소가 겹쳐있을때
  capturing : 상위에서 하위요소로
  bubbling : 하위에서 상위요소로
  이벤트가 겹쳐서 일어나는것을 말한다
  event.target : 이벤트가 발생한 요소
  event.currentTarget : 현재 요소

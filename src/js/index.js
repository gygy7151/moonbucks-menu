// STEP1 요구사항

// TODO LIST 메뉴추가
// - [] 에스프레소 메뉴에 새로운 메뉴가 확인 버튼을 클릭시 추가된다.
// - [] 에스프레소 메뉴에 새로운 메뉴가 엔터키 입력으로 추가된다.
// - [] 메뉴추가 한 후 input은 빈 값으로 초기화된다.
// - [] 사용자 입력값이 빈 값이라면 추가되지 않는다.
// - [] 추가되는 메뉴의 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.


// TODO LIST 메뉴수정
// - [] 수정 버튼 클릭이벤트를 이벤트 리스너로 받는다.
// - [] 수정 버튼 클릭시 브라우저에서 제공하는 propmt 인터페이스 모달창이 띄워진다.
// - [] 수정메뉴를 입력 받고, 확인버튼을 누르면 메뉴가 수정된다.

// TODO LIST 메뉴삭제
// - [] 메뉴 삭제 버튼 클릭이벤트를 받고, 메뉴 삭제 컨펌 모달창이 뜬다
// - [] 확인버튼을 누르면, 클릭이벤트가 발생한 가장 가까운 li 태그가 삭제된다.

// TODO LIST 총 갯수 출력
//  총 메뉴 갯수를 li태그갯수를 count하여 상단에 보여준다.

const $ = (selector) => document.querySelector(selector);

function App() {
    // 메뉴 이름을 입력받는거
    // 입력받으려면 뭐가 가장 먼저 필요할까?
    // 이미 입력창은 있겠지?
    document
    .querySelector("#espresso-menu-name")
    .addEventListener("keypress", (e) => {
        console.log(e.key);
        
        
    });

    
}

App();
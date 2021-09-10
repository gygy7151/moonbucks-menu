
// STEP2 요구사항

// TODO LIST localStorage Read & Write
// - [] localStorage에 데이터를 저장한다.
// - [] localStorage에 있는 데이터를 읽어온다.

// TODO LIST 카테고리별 메뉴판 관리
// - [] 에스프레소 메뉴판을 관리할 수 있게 만든다.
// - [] 프라푸치노 메뉴판을 관리할 수 있게 만든다.
// - [] 블렌디드 메뉴판을 관리할 수 있게 만든다.
// - [] 티바나 메뉴판을 관리할 수 있게 만든다.
// - [] 디저트 메뉴판을 관리할 수 있게 만든다.

// TODO LIST 페이지 접근시 최초 데이터 Read & Rendering
// - [] 페이지가 최초로 로딩될때 로컬스토리지에 있는 에스프레소 메뉴명들을 호출한다.
// - [] 호출한 메뉴명들을 메인페이지에 매핑한다.

// TODO LIST
// - [] 수정버튼을 클릭시 e.target.closest메소드를 이용해 클릭한 요소를 상태변경클래스와 연결한다.
// - [] sold-out class를 추가하여 해당 요소에 가운데줄 긋기를 통해 상태변경한다.
// - [] 수정버튼을 재 클릭시 sold-out class를 삭제한다.



const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    localStorage.getItem("menu");
  },
};


function App() {
  
  const updateMenuCount = () => {
    const menuCount = $("#espresso-menu-list").querySelectorAll("span").length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
  }

  const adddMenuName = () => {
    const espressoMenuName = $("#espresso-menu-name").value;
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    
    const menuItemTemplate = (espressoMenuName) => { return `<li class="menu-list-item d-flex items-center py-2">
    <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
    <button
      type="button"
      class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    >
      수정
    </button>
    <button
      type="button"
      class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
    >
      삭제
    </button>
  </li>`
};
$("#espresso-menu-list").insertAdjacentHTML('afterbegin', menuItemTemplate(espressoMenuName));
updateMenuCount();
$("#espresso-menu-name").value = "";
  }

  const updateMenuName = () => {
    const menuName = $menuName.innerText;
    const updatedMenuName = prompt("메뉴명을 수정하세요", menuName);
    $menuName.innerText = updatedMenuName;
  }

    document
    .querySelector("#espresso-menu-list")
    .addEventListener("click", (e) => {
      const $menuName = e.target
        .closest("li")
        .querySelector(".menu-name");

      if(e.target.classList.contains("menu-edit-button")) {
        updateMenuName();
      }

      if(e.target.classList.contains("menu-remove-button")) {
        if(confirm("정말 삭제하시겠습니까?")) {
          e.target.closest("li").remove();
          updateMenuCount();
        }
      }
    });

    document
    .querySelector("#espresso-menu-form")
    .addEventListener("submit", (e) => {
        e.preventDefault();
    });

    document
    .querySelector("#espresso-menu-submit-button")
    .addEventListener("click",adddMenuName);
    

    document
    .querySelector("#espresso-menu-name")
    .addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
          adddMenuName();
    }
        
    });

}

App();
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
const emailInput = document.querySelector("#userEmail");
const passwordInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector(".btn-login");

// 정규표현식
function emailReg() {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailInput.value).toLowerCase());
}
function pwReg() {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(passwordInput.value).toLowerCase());
}

// validation에 따른 클래스 추가와 제거
function handleEmailInput() {
  const isValid = emailReg();
  if (isValid) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }
}
function handlePasswordInput() {
  const isValid = pwReg();
  if (isValid) {
    passwordInput.classList.remove("is--invalid");
  } else {
    passwordInput.classList.add("is--invalid");
  }
}

// input에 입력되는 시점마다 validation에 따른 클래스 추가/제거 함수가 실행
emailInput.addEventListener("input", handleEmailInput);
passwordInput.addEventListener("input", handlePasswordInput);

// 입력된 데이터에 있는 user id와 pw를 비교하여 일치하면 로그인 성공페이지로 이동, 실패하면 alert창 실행
function handler() {
  if (emailReg() && pwReg()) {
    if (emailInput.value === user.id && passwordInput.value === user.pw) {
      window.location.href = "welcome.html";
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  } else {
    alert("입력형식에 맞는 아이디와 비밀번호를 입력해주세요");
  }
}

loginBtn.addEventListener("click", handler);

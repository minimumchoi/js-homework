## 네이버 로그인 페이지 구현

---

#### 과제설명

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

#### 문제 1

```javascript
const emailInput = document.querySelector("#userEmail");
const passwordInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector(".btn-login");

function emailReg() {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailInput.value).toLowerCase());
}

if (emailReg()) {
  emailInput.classList.remove("is--invalid");
} else {
  emailInput.classList.add("is--invalid");
}
```

정규표현식을 통한 validation으로 클래스를 추가하고 제거하는 기능을 구현하려했으나 해당 조건문으로는 구현할수 없었습니다.

#### 문제 1 - 해결

```javascript
function handleEmailInput() {
  const isValid = emailReg();
  if (isValid) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }
}

emailInput.addEventListener("input", handleEmailInput);
```

이메일이 입력되는 시점마다 validation이 실행되지 않고 초기 로드 시 한 번만 실행되는 문제점으로 `emailInput.addEventListener("input", handleEmailInput)` 를 통해 입력내용을 수정할때마다 `emailReg()`를 통해 검사를 실행하여 유효성을 업데이트 되도록 수정했습니다.

#### 문제 2

```javascript
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
```

입력된 아이디와 비밀번호가 `user.id` `user.pw`와 일치할 경우 "welcome.html"로 이동하게끔 코드를 짰으나 페이지가 작동하지 않았습니다.

#### 문제 1 - 해결

문제 2는 해결하지 못했습니다.

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

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 객체에서 특정 키의 값을 안전하게 가져오는 함수

function getValueAtObject(obj, key) {
  const hasKey = Object.prototype.hasOwnProperty.call(obj, key);
  if (hasKey === true) {
    console.log(obj[key]);
  } else {
    throw new Error("Error !");
  }
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

// 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수

function getNumberAtArray(arr, index) {
  if (arr.length > index && index >= 0) {
    return arr[index];
  } else {
    throw new Error("Error !");
  }
}

const numbers = [10, 20, 30, 40, 50];

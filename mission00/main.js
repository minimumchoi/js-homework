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

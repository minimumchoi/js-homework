import { getNode, setStyle, isString } from "../lib/index.js";
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode("ul");
const visual = getNode(".visual img");
const body = getNode("body");
const elemname = getNode(".nickName");

function handleClick(e) {
  const target = e.target.closest("li");
  if (!target) return;

  const targetIndex = target.dataset.index;
  const dataNumber = data[targetIndex - 1];

  setImage(visual, dataNumber);
  setNameText(elemname, dataNumber.name);
  setBgcolor(body, dataNumber.color[0], dataNumber.color[1]);
}

nav.addEventListener("click", handleClick);

// setNameText 함수
function setNameText(node, text) {
  node.textContent = text;
}

//setImage 함수
function setImage(node, imgNum) {
  node.src = `./assets/${imgNum.name}.jpeg`;
  node.alt = imgNum.alt;
}

// setBgcolor 함수
function setBgcolor(node, value = "#000", value2) {
  if (!value2) {
    node.style.background = value;
    return;
  }
  node.style.background = `linear-gradient(to bottom, ${value},${value2})`;
}

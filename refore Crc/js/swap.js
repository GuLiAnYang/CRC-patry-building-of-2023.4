let oLeft = document.querySelector(".left");
let oRight = document.querySelector(".right");
let oImgList = document.querySelector(".img-list");

// 克隆
let clonefirstImg = oImgList.firstElementChild.cloneNode();
oImgList.appendChild(clonefirstImg);

let index = 0;
let lock = true;
function handleRightBtn() {
  if (!lock) return;
  index++;
  oImgList.style.left = index * -1693 + "px";
  oImgList.style.transition = "1.2s ease";

  if (index === 4) {
    index = 0;
    setTimeout(() => {
      oImgList.style.left = 0;
      oImgList.style.transition = "none";
    }, 1200);
  }

  setCircles();
  lock = false;
  setTimeout(() => {
    lock = true;
  }, 500);
}

// 右按钮
oRight.addEventListener("click", handleRightBtn);

// 左按钮
oLeft.addEventListener("click", () => {
  if (!lock) return;
  index--;
  if (index === -1) {
    oImgList.style.left = 4 * -1693 + "px";
    oImgList.style.transition = "none";
    index = 3;
    setTimeout(() => {
      oImgList.style.left = index * -1693 + "px";
      oImgList.style.transition = "1.2s ease";
    }, 0);
  } else {
    oImgList.style.left = index * -1693 + "px";
  }

// 圆点高亮
  setCircles();

  lock = false;
  setTimeout(() => {
    lock = true;
  }, 500);
});

// 获取圆点
const circles = document.querySelectorAll(".circle");

// 高亮显示
function setCircles() {
  for (let i = 0; i < circles.length; i++) {
    if (i === index) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }
  }
}

// 圆点点击切换
const oCircle = document.querySelector(".circle-list");
oCircle.addEventListener("click", (e) => {
  if (e.target.nodeName.toLowerCase() === "li") {
    const n = Number(e.target.getAttribute("data-n"));
    index = n;
    setCircles();
    oImgList.style.transition = "1.2s ease";
    oImgList.style.left = index * -1693 + "px";
  }
});

let autoplay = setInterval(handleRightBtn, 3200);
const oWrap = document.getElementById("wrap");

oWrap.addEventListener("mouseenter", () => {
  clearInterval(autoplay);
});

oWrap.addEventListener("mouseleave", () => {
  clearInterval(autoplay);
  autoplay = setInterval(handleRightBtn, 2000);
});
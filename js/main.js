const cursor = () => {
  const cursor = document.querySelector(".cursor");
  const follow = document.querySelector(".follow");
  const links = document.querySelectorAll(".container__item-link");

  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  gsap.to({}, 0.016, { // 空のオブジェクトを使って毎フレーム実行（60fps）
    repeat: -1, // 無限ループ
    onRepeat: () => { // ループ毎に実行する
      posX += (mouseX - posX) / 7;
      posY += (mouseY - posY) / 7;

      gsap.set(cursor, {
        css: {
          left: mouseX - 5, // cursorの中心をマウス座標に合わせるために-5
          top: mouseY - 5,
        },
      });
      gsap.set(follow, {
        css: {
          left: posX - 15, // followの中心をマウス座標に合わせるために-15
          top: posY - 15,
        },
      });
    },
  });

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  })

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      follow.classList.add("active");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      follow.classList.remove("active");
    });
  })
};

cursor();

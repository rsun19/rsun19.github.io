import { useState } from "react";


const Menu = () => {
  const [page, setPage] = useState(0);

  const navigatePage = (pageNum: number) => {
    const firstPage = document.getElementById("first-page");
    const secondPage = document.getElementById("second-page");
    const thirdPage = document.getElementById("third-page");
    const handle = document.getElementById("handle");
    setPage(pageNum);
    if (pageNum === 0 && handle && firstPage) {
      const firstPageWidth = firstPage.offsetWidth;
      handle.style.marginLeft = '0%';
      if (firstPageWidth) {
        handle.style.width = (firstPageWidth+36).toString() + 'px';
      }
    } else if (pageNum === 1 && handle && secondPage) {
      const secondPageWidth = secondPage.offsetWidth;
      handle.style.marginLeft = '27%';
      if (secondPageWidth) {
        handle.style.width = (secondPageWidth + 22).toString() + 'px';
      }
    } else if (pageNum === 2 && handle && thirdPage) {
      const thirdPageWidth = thirdPage.offsetWidth;
      handle.style.marginLeft = '55%';
      if (thirdPageWidth) {
        handle.style.width = (thirdPageWidth + 40).toString() + 'px';
      }
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="mb-5">
      <div page-num={page} className="switch">
        <div id="handle" />
        <a href="#" id="first-page" onClick={() => navigatePage(0)}>
          Home
        </a>
        <a href="#portfolio" id="second-page" onClick={() => navigatePage(1)}>
          Portfolio
        </a>
        <a href="#WorkXP" id="third-page" onClick={() => navigatePage(2)}>
          Experience
        </a>
      </div>
    </div>
  );
};

// const spring = {
//   type: "spring",
//   stiffness: 700,
//   damping: 30
// };

export default Menu;

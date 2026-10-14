import React, { useEffect } from "react";

const Menu = (): React.JSX.Element => {
  const arrangeMenu = () => {
    const homeDiv = document.getElementById("homeTop");
    const portfolioDiv = document.getElementById("portfolio");
    const workXpDiv = document.getElementById("WorkXP");
    if (homeDiv && portfolioDiv && workXpDiv) {
      const homeBorder = homeDiv.getBoundingClientRect();
      const portfolioBorder = portfolioDiv.getBoundingClientRect();
      const workBorder = workXpDiv.getBoundingClientRect();
      if (workBorder.top < 0 && -workBorder.top >= portfolioBorder.top) {
        navigatePage(2);
      } else if (homeBorder.top < 0 && -homeBorder.top >= workBorder.top) {
        navigatePage(1);
      } else {
        navigatePage(0);
      }
    }
  };

  const navigatePage = (pageNum: number) => {
    const firstPage = document.getElementById("first-page");
    const secondPage = document.getElementById("second-page");
    const thirdPage = document.getElementById("third-page");
    const handle = document.getElementById("handle");
    if (pageNum === 0 && handle && firstPage) {
      const firstPageWidth = firstPage.offsetWidth;
      handle.style.marginLeft = "0%";
      if (firstPageWidth) {
        handle.style.width = (firstPageWidth + 36).toString() + "px";
      }
    } else if (pageNum === 1 && handle && secondPage) {
      const secondPageWidth = secondPage.offsetWidth;
      handle.style.marginLeft = "26%";
      if (secondPageWidth) {
        handle.style.width = (secondPageWidth + 30).toString() + "px";
      }
    } else if (pageNum === 2 && handle && thirdPage) {
      const thirdPageWidth = thirdPage.offsetWidth;
      handle.style.marginLeft = "63%";
      if (thirdPageWidth) {
        handle.style.width = (thirdPageWidth + 37).toString() + "px";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", arrangeMenu);

    return () => {
      window.removeEventListener("scroll", arrangeMenu);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="mb-5"
    >
      <div className="switch">
        <div id="handle" />
        <a href="#" id="first-page" onClick={() => navigatePage(0)}>
          Home
        </a>
        <a href="#WorkXP" id="second-page" onClick={() => navigatePage(1)}>
          Experience
        </a>
        <a href="#portfolio" id="third-page" onClick={() => navigatePage(2)}>
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default Menu;

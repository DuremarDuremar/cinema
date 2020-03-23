let cart = document.querySelector(".header-cart");

window.onresize = function() {
  if (window.matchMedia("screen and (max-width:992px)").matches) {
    document.querySelector(".header-logo").append(cart);
  } else {
  }
};

///////////////////Сортировка на сайте фильмов///////////////////////////////////////////////

let logo1 = document.querySelector(".tabs-item01");
let logo2 = document.querySelector(".tabs-item02");
let logo3 = document.querySelector(".tabs-item03");
let logo4 = document.querySelector(".tabs-item04");

let tab1 = document.querySelectorAll("#tabs01 .film");
let tab2 = document.querySelectorAll("#tabs02 .film");
let tab3 = document.querySelectorAll("#tabs03 .film");
let tab4 = document.querySelectorAll("#tabs04 .film");

let newfilms = [tab2[03], tab2[08]];
let popular = [tab3[00], tab3[04], tab3[05], tab3[06]];
let stocks = [tab4[00], tab4[05], tab4[09]];

logo2.onclick = function() {
  for (let item of tab2) {
    item.style.display = "none";
  }
  for (let item of newfilms) {
    item.style.display = "block";
  }
};

logo3.onclick = function() {
  for (let item of tab3) {
    item.style.display = "none";
  }
  for (let item of popular) {
    item.style.display = "block";
  }
};

logo4.onclick = function() {
  for (let item of tab4) {
    item.style.display = "none";
  }
  for (let item of stocks) {
    item.style.display = "block";
  }
};

let costRed = document.querySelectorAll(".stocks .film-cost");
let costStocks = document.querySelectorAll(".stocks .film-cost .cost");

for (let item of costRed) {
  item.style.color = "red";
}

for (let item of costStocks) {
  // console.log(item.textContent);
  item.textContent = item.textContent / 2;
}

////////////////ПОИСК ПО САЙТУ/////////////////////////////////////////////////////////

let seaInp = document.querySelector(".search-input");

let seaBtn = document.querySelector(".search-button");

seaInp.oninput = function() {
  let seaFilm = this.value.trim().toUpperCase();
  let film = document.querySelectorAll("#tabs01 .film");
  if (seaFilm != " ") {
    film.forEach(function(elem) {
      if (elem.innerText.toUpperCase().search(seaFilm) == -1) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    film.forEach(function(elem) {
      elem.classList.remove("hide");
    });
  }
};

//////////////////////////СОЗДАНИЕ КАРТОЧЕК////////////////////////////////////////////////////////

let filmName = document.querySelectorAll(".film");

let modal = document.querySelector(".tabs-modal");

let close = document.querySelector(".modal-close");

// for (let item of filmName) {
//   item.onclick = function() {
//     modal.style.display = "flex";
//     item2 = item.cloneNode(true);
//     document.querySelector(".modal-content").appendChild(item2);
//     item2.className = "window";
//   };
//   close.onclick = function() {
//     modal.style.display = "none";
//     document.querySelector(".modal-content").removeChild(item2);
//   };
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//       document.querySelector(".modal-content").removeChild(item2);
//     }
//   };
// }

//////////////////////////////////РАЗДЕЛ ИНФО В КАРТОЧКАХ/////////////////////////////////////////////////////

let info = document.querySelector(".modal-wrap");

for (let item of filmName) {
  item.onmouseover = function() {
    switch (true) {
      case item.classList.contains("f00"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2008</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Sam Mendes</p>";
        break;
      case item.classList.contains("f01"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1993</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Robert Altman</p>";
        break;
      case item.classList.contains("f02"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1990</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Rob Reiner</p>";
        break;
      case item.classList.contains("f03"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2019</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Robert Eggers</p>";
        break;
      case item.classList.contains("f04"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1979</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Francis Ford Coppola</p>";
        break;
      case item.classList.contains("f05"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2017</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Denis Villeneuve</p>";
        break;
      case item.classList.contains("f06"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1985</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Terry Gilliam</p>";
        break;
      case item.classList.contains("f07"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2012</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>David Cronenberg</p>";
        break;
      case item.classList.contains("f08"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2018</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Matteo Garrone</p>";
        break;
      case item.classList.contains("f09"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2008</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>John Patrick Shanley</p>";
        break;
      case item.classList.contains("f10"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1992</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>James Foley</p>";
        break;
      case item.classList.contains("f11"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2001</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Marc Forster</p>";
        break;
      case item.classList.contains("f12"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1988</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Robert Bierman</p>";
        break;
      default:
        info.innerHTML = "";
    }
  };
}

/////////////////////////////////////ПЕРЕКЛЮЧАТЕЛЬ НАВИГАЦИИ////////////////////////////////////////////////////////////////////////////////
let btnItem = document.querySelectorAll(".tabs-item a");
let tabsItem = document.querySelectorAll(".tabs-item");

let btnItem01 = document.querySelector(".tabs-item01 a");
let btnItem02 = document.querySelector(".tabs-item02 a");
let btnItem03 = document.querySelector(".tabs-item03 a");
let btnItem04 = document.querySelector(".tabs-item04 a");

btnItem01.onclick = function() {
  btnItem01.classList.add("btnItem-onclick");
  btnItem02.classList.remove("btnItem-onclick");
  btnItem03.classList.remove("btnItem-onclick");
  btnItem04.classList.remove("btnItem-onclick");
};
btnItem02.onclick = function() {
  btnItem02.classList.add("btnItem-onclick");
  btnItem01.classList.remove("btnItem-onclick");
  btnItem03.classList.remove("btnItem-onclick");
  btnItem04.classList.remove("btnItem-onclick");
};
btnItem03.onclick = function() {
  btnItem03.classList.add("btnItem-onclick");
  btnItem02.classList.remove("btnItem-onclick");
  btnItem01.classList.remove("btnItem-onclick");
  btnItem04.classList.remove("btnItem-onclick");
};
btnItem04.onclick = function() {
  btnItem04.classList.add("btnItem-onclick");
  btnItem02.classList.remove("btnItem-onclick");
  btnItem03.classList.remove("btnItem-onclick");
  btnItem01.classList.remove("btnItem-onclick");
};

/////////////////////////////////////////////////////////////////////////////////////////

let slaiderAll = document.querySelector(".window .c00");

let right = document.querySelector(".modal-right");
console.log(right);

// for (let item of filmName) {
//   item.onclick = function() {
//     modal.style.display = "flex";
//     item2 = item.cloneNode(true);
//     document.querySelector(".modal-content").appendChild(item2);
//     item2.className = "window";
//   };
//   close.onclick = function() {
//     modal.style.display = "none";
//     document.querySelector(".modal-content").removeChild(item2);
//   };
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//       document.querySelector(".modal-content").removeChild(item2);
//     }
//   };
//
let windows = document.querySelector(".window .c00");
console.log(windows);

// windows.onclick = function() {
//   this.style.display = "none";
// };

let close2 = document.querySelector(".modal-close p");
console.log(close2);

for (let item of filmName) {
  item.onclick = function itemOn() {
    modal.style.display = "flex";
    item2 = item.cloneNode(true);
    document.querySelector(".modal-content").appendChild(item2);
    item2.className = "window";
  };
  close.onclick = function() {
    modal.style.display = "none";
    document.querySelector(".modal-content").removeChild(item2);
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.querySelector(".modal-content").removeChild(item2);
    }
  };
}

for (let item of filmName) {
  item3 = item.cloneNode(true);
  right.onmousedown = function() {
    document.querySelector(".modal-content").removeChild(item2);
  };

  right.onmouseup = function() {
    document.querySelector(".modal-content").appendChild(item3);
    modal.style.display = "flex";
    item3.className = "window";
  };
  close2.onclick = function() {
    modal.style.display = "none";
    right.style.color = "white";
    document.querySelector(".modal-content").removeChild(item3);
  };
}

right.onclick = function() {
  switch (right.style.color) {
    case (right.style.color = "white"):
      right.style.color = "red";
      break;
    case (right.style.color = "red"):
      right.style.color = "green";
      break;
    case (right.style.color = "green"):
      right.style.color = "yellow";
      break;
    case (right.style.color = "yellow"):
      right.style.color = "blue";
      break;
    case (right.style.color = "blue"):
      right.style.color = "black";
      break;
    case (right.style.color = "black"):
      right.style.color = "white";
      break;
  }
};

// item.classList.contains("f00"):

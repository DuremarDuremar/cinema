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
let popular = [tab3[00], tab3[04], tab3[05], tab3[06], tab3[17], tab3[18]];
let stocks = [tab4[00], tab4[05], tab4[09], tab4[13]];

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

// let seaFilm;

let seaInp = document.querySelector(".search-input");

let seaBtn = document.querySelector(".search-button");

let film = document.querySelectorAll("#tabs01 .film");

seaInp.oninput = function() {
  let seaFilm = this.value.trim().toUpperCase();
  if (seaFilm != " ") {
    film.forEach(function(elem) {
      if (elem.innerText.toUpperCase().search(seaFilm) == -1) {
        elem.classList.add("hide");
        // elem.style.opacity = "0.1";
        elem.style.display = "none";
      } else {
        elem.classList.remove("hide");
        // elem.style.opacity = "1";
        elem.style.display = "flex";
      }
    });
  } else {
    film.forEach(function(elem) {
      elem.classList.remove("hide");
      // elem.style.opacity = "1";
      elem.style.display = "flex";
    });
  }
};

seaBtn.onclick = function() {
  document.querySelector(".paginator_active").click();
  seaInp.value = " ";
};

//////////////////////////СОЗДАНИЕ КАРТОЧЕК////////////////////////////////////////////////////////

let filmName = document.querySelectorAll(".film");

let modal = document.querySelector(".tabs-modal");

let close = document.querySelector(".modal-close");

for (let item of filmName) {
  item.onclick = function() {
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
      case item.classList.contains("f13"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2007</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Tony Gilroy</p>";
        break;
      case item.classList.contains("f14"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2017</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Paul Thomas Anderson</p>";
        break;
      case item.classList.contains("f15"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>2003</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Bong Joon-ho</p>";
        break;
      case item.classList.contains("f16"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1997</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Tsai Ming-liang</p>";
        break;
      case item.classList.contains("f17"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1960</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Federico Fellini</p>";
        break;
      case item.classList.contains("f18"):
        info.innerHTML =
          "<p style='font-size:18px; color:#fff'>1950</p> <p style = 'color:#8acc6e; font-weight:700;padding-top:5px'>Billy Wilder</p>";
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

////////////////////////ПАГИНАЦИЯ///////////////////////////////////////////////////////

var count = 19; //всего записей
var cnt = 16; //сколько отображаем сначала
var cnt_page = Math.ceil(count / cnt); //кол-во страниц

//выводим список страниц
var paginator = document.querySelector(".paginator");
var page = "";
for (var i = 0; i < cnt_page; i++) {
  page +=
    "<span data-page=" +
    i * cnt +
    '  id="page' +
    (i + 1) +
    '">' +
    (i + 1) +
    "</span>";
}
paginator.innerHTML = page;

// выводим первые записи {cnt}
let div_num = document.querySelectorAll("#tabs01 .film");

for (var i = 0; i < div_num.length; i++) {
  if (i < cnt) {
    div_num[i].style.display = "flex";
  }
}

var main_page = document.getElementById("page1");
main_page.classList.add("paginator_active");

//листаем
function pagination(event) {
  var e = event || window.event;
  var target = e.target;
  var id = target.id;

  if (target.tagName.toLowerCase() != "span") return;

  var num_ = id.substr(4);
  var data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  var j = 0;
  for (var i = 0; i < div_num.length; i++) {
    var data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";
  }
  for (var i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "flex";
    j++;
  }
}

window.onload = function() {
  document.querySelector(".paginator_active").click();
  document.querySelector(".active").click();
};
///////////////////////////////////////////////////////////////////////////////////////////////

let film4 = document.querySelectorAll("#tabs01");

// let filmRandom = film.sort(function() {
//   return Math.random() - 0.5;
// });
console.log(film);

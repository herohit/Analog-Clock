function show_clock() {
  let h = document.querySelector(".hr");
  let m = document.querySelector(".mn");
  let s = document.querySelector(".ss");

  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seonds = date.getSeconds();

  h.style.transform = `rotate(${(hours % 12) * 30}deg)`;
  m.style.transform = `rotate(${(minutes) * 6}deg)`;
  s.style.transform = `rotate(${(seonds) * 6}deg)`;
}

setInterval(show_clock, 1000);

const display = document.getElementById(`watch`) as HTMLDivElement;
let timer: number;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  } else {
    debil();
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  } else {
    debil2();
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 3600))
    .toString()
    .padStart(2, "0");
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let seconds = Math.floor((elapsedTime / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let miliseconds = Math.floor((elapsedTime % 1000) / 10)
    .toString()
    .padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

function debil() {
  window.alert(`no juz przeciez leci timer po co to klikasz`);
}

function debil2() {
  window.alert(`juz bardziej tego timera nie zatrzymasz`);
}

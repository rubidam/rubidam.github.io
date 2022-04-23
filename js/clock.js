const clock = document.querySelector("#clock");
const interval = 1000;

function handleTimes() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hour}:${min}:${sec}`;
}

//setInterval(sayHello, 5000);
handleTimes();
setInterval(handleTimes, interval);

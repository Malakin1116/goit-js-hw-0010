
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const daysData = document.querySelector("[data-days]");
const hoursData = document.querySelector("[data-hours]");
const minutesData = document.querySelector("[data-minutes]");
const secondsData = document.querySelector("[data-seconds]");
const inputData = document.querySelector("#datetime-picker");
const buttonStart = document.querySelector("[data-start]");

buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      iziToast.error({
        title: 'Ошибка',
        message: 'Оберіть дату у майбутньому',
      });
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
      iziToast.success({
        title: 'Готово',
        message: 'Готово, натискайте START',
      });
    }
  },
};

flatpickr(inputData, options);

buttonStart.addEventListener("click", timerCounter);

function timerCounter() {
  buttonStart.disabled = true;
  const chosenDate = new Date(inputData.value);

  const interval = setInterval(() => {
    const timeNow = new Date();
    let countdownTime = chosenDate - timeNow;

    if (countdownTime <= 0) {
      clearInterval(interval);
      iziToast.success({
        title: 'Время вышло',
        message: 'Час вийшов',
      });

      daysData.textContent = '0';
      hoursData.textContent = '0';
      minutesData.textContent = '0';
      secondsData.textContent = '0';
      return;
    }

    daysData.textContent = addLeadingZero(Math.floor(countdownTime / 1000 / 60 / 60 / 24));
    hoursData.textContent = addLeadingZero(Math.floor((countdownTime / 1000 / 60 / 60) % 24));
    minutesData.textContent = addLeadingZero(Math.floor((countdownTime / 1000 / 60) % 60));
    secondsData.textContent = addLeadingZero(Math.floor((countdownTime / 1000) % 60));
  }, 1000);
}

const addLeadingZero = value => (value < 10 ? `0${value}` : `${value}`);

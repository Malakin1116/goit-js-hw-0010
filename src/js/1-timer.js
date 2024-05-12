
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
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
      iziToast.success({
        title: 'Ready',
        message: 'Ready, press START',
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

    inputData.disabled = true;

    if (countdownTime <= 0) {
      clearInterval(interval);
      inputData.disabled = false;

      iziToast.success({
        title: 'Time’s up',
        message: 'Time has expired',
      });

      daysData.textContent = '00';
      hoursData.textContent = '00';
      minutesData.textContent = '00';
      secondsData.textContent = '00';
      return;
    }

    daysData.textContent = addLeadingZero(Math.floor(countdownTime / 1000 / 60 / 60 / 24));
    hoursData.textContent = addLeadingZero(Math.floor((countdownTime / 1000 / 60 / 60) % 24));
    minutesData.textContent = addLeadingZero(Math.floor((countdownTime / 1000 / 60) % 60));
    secondsData.textContent = addLeadingZero(Math.floor((countdownTime / 1000) % 60));
  }, 1000);
}

const addLeadingZero = value => value.toString().padStart(2, '0');

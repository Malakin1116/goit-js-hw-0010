import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elForm = document.querySelector('.form');


elForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const delay = parseInt(event.target.elements.delay.value);  
    const stateInputs = event.target.elements.state;  
    const state = Array.from(stateInputs).find(radio => radio.checked)?.value;  

   const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    })

    promise.then(delay => {
        iziToast.success({
            title: 'Fulfilled',
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight'
        });
    })
    .catch(delay => {
        iziToast.error({
            title: 'Rejected',
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight'
        });
    });
});

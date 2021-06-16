const countDate = new Date("Jun 30, 2021 23:59:00").getTime();
const dayElement = document.getElementsByClassName('days');
const hoursElement = document.getElementsByClassName('hours');
const minutesElement = document.getElementsByClassName('mins');
const secondsElement = document.getElementsByClassName('secs');

const countUpdate = setInterval(()=>{
    const now = new Date().getTime();

    const difference = countDate - now;

    const days = ('0' + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2);
    const hours = ('0' + Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    const minutes = ('0' + Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    const seconds = ('0' + Math.floor((difference % (1000 * 60)) / 1000)).slice(-2);

    function appendData(array, value){
        for(let i = 0; i < array.length; i++){
            if(array[i].parentElement.classList.contains('flap') && array[i].textContent > value){
                array[i].parentElement.classList.add("close");
                setTimeout(()=>{
                    array[i].parentElement.classList.remove("close");
                },600);
            }

            array[i].textContent = value;

        }
    }


    appendData(dayElement,days);
    appendData(hoursElement,hours);
    appendData(minutesElement,minutes);
    appendData(secondsElement,seconds);



},1000)
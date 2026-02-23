// JavaScript Program to Create Countdown Timer
{
    function startCountdown(seconds) {
        let counter = seconds;

        const timer = setInterval(() => {
            console.log(counter);
            counter--;

            if (counter < 0) {
                clearInterval(timer);
                console.log("Time's up!");
            }
        }, 1000);
    }

    startCountdown(10);
}
const init = (initialCount, delay) => {
    console.time();
    console.log('The script has been successfully launched!')
    let counter = initialCount;

    const intervalId = setInterval(() => {
        console.log(`${counter}...`);
        counter--;
        
        if (counter === 0) {
            console.log('The script completed successfully!');
            clearInterval(intervalId);
            console.timeEnd();
        }
    }, delay);
} 

init(3, 200)
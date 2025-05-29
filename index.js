const init = (initialCount, delay) => {
    console.time('timer');

    if(initialCount <= 0) {
        console.warn('Abort script. InitialCount must be greater than 0');
        return;
    };
    let counter = initialCount;
    console.log('The script has been successfully launched!');
    
    const intervalId = setInterval(() => {
        console.log(`${counter}...`);
        counter--;
        
        if (counter === 0) {
            clearInterval(intervalId);
            console.log('The script completed successfully!');
            console.timeEnd('timer');
        }
    }, delay);
} 

init(3, 200);
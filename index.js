const minnum = 1;
const maxnum = 100;
answer = Math.floor(Math.random() * (maxnum - minnum
    + 1) + minnum);
let guess;
let attempts=0;
let running = true;


while (running) {
    guess = window.prompt(`guess the number between ${minnum}-${maxnum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Enter a valid number");
    }
    else if (guess < minnum || guess > maxnum) {
        window.alert(`Enter the number between ${minnum}-${maxnum}`);
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Too low..try again");
        }
        else if (guess > answer) {
            window.alert("Too high..try again");
        }
        else {
            window.alert(`your guess is correct it took you ${attempts} attempts`);
            running = false;
        }

    }



}   

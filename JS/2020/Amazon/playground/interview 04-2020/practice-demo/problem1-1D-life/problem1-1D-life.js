// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function cellCompete(states, days)
{
    // WRITE YOUR CODE HERE

    // console.log('input states: ', states);

    const isAlive = function(states, i) {
        switch (states[i]) {
            case undefined:
            case 0:
            case 2:
                return false;
            case 1:
            case -1:
                return true;
        }
    }

    const setAlive = function(num) {
        switch (num) {
            case 0:
                return 2;
            case 1:
                return 1;
        }
    }

    const setDead = function(num) {
        switch (num) {
            case 0:
                return 0;
            case 1:
                return -1
                break;
        }

    }

    for (let day = 0; day < days; day++) {

        for (let i = 0; i < states.length; i++) {

            // alive left/right
            if (isAlive(states, i - 1) && isAlive(states, i + 1)) {
                states[i] = setDead(states[i]);
            } else if (!isAlive(states, i - 1) && !isAlive(states, i + 1)) {
                states[i] = setDead(states[i]);
            } else if (isAlive(states, i - 1) && !isAlive(states, i + 1)) {
                states[i] = setAlive(states[i]);
            } else if (!isAlive(states, i - 1) && isAlive(states, i + 1)) {
                states[i] = setAlive(states[i]);
            }

        }

        console.log('day/after states: ', day, '/', states);

        // cleanup current day
        for (let i = 0; i < states.length; i++) {
            switch (states[i]) {
                case -1:
                    states[i] = 0
                    break;
                case 2:
                    states[i] = 1
                    break;
            }
        }

        console.log('day/cleaned up states:', day, '/', states);
    }

    return states;
}
// FUNCTION SIGNATURE ENDS

console.log('results: ', cellCompete([1,0,0,0,0,1,0,0], 1));


function genLetNSay(iterations) {

  let _iteration = 1;

  function loop(str) {

    console.log(str);

    let prevChar = str[0];
    let numConsecutives = 0;
    let _str = str + ' ';
    let newStr = ''

    _iteration++

    if (_iteration > iterations) {
      return str;
    } else {
      (Array.from(_str)).forEach(ch => {
        if (ch === prevChar) {
          numConsecutives++;
        } else {
          newStr = newStr + numConsecutives + prevChar;
          numConsecutives = 1;
          prevChar = ch;
        }
      });

    }

    loop(newStr);

  }

  loop('1');

}

const iterations = 40;
genLetNSay(iterations)


console.log(`DONE with ${iterations} iterations of look n say`);

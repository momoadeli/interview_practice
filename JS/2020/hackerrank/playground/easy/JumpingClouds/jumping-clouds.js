function jumpingClouds(strClouds) {

    let minJumps = 0;
    let cloudIdx = 0;

    let clouds = strClouds.map(el => JSON.parse(el));

    while(cloudIdx < clouds.length - 1 ) {

      if (clouds[cloudIdx + 2] !== undefined && clouds[cloudIdx + 2] === 0) {
        minJumps++;
        cloudIdx += 2;
      } else if (clouds[cloudIdx + 1] !== undefined && clouds[cloudIdx + 1] === 0) {
        minJumps++;
        cloudIdx++;
      } else break;
    }

    return minJumps;
}

console.log(jumpingClouds(["0", "1", "0", "1", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1", "0", "0", "0", "0", "1", "0", "1", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "1", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "1", "0", "1", "0", "0", "1", "0", "1", "0", "1", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "1", "0", "0", "0", "1", "0", "0", "1", "0", "1", "0"]));

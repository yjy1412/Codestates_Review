function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  let sortedStuff = stuff.sort((a, b) => a - b).slice();
  let halfLimit = limit / 2;
  
  let count = 0;

  while(sortedStuff.length > 0) {
    let min = sortedStuff.shift();

    if(min > halfLimit) {
      count += 1;
    } else {
      let maxLimit = limit - min;
      
      let i = 0;
      while(sortedStuff[i] <= maxLimit && i < sortedStuff.length) {
        i += 1;
      }
      if (i === 0) {
        count += 1;
      } else {
        sortedStuff.splice(i-1,1);
        count += 1;
      }
    }
  }
  return count;
}
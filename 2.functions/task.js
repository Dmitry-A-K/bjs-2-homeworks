function getArrayParams(...arr) {
  if (!arr.length) return 0;

  let min, max, sum;
  min = max = sum = arr[0];
  min = Math.min(...arr); 
  max = Math.max(...arr); 
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg = (sum / arr.length).toFixed(2);

  return {min: min, max: max, avg: Number(avg)};
}

function summElementsWorker(...arr) {
  if (!arr.length) return 0;

  let sum = arr[0];
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;

  let min, max, difference;
  min = max = difference = arr[0];
  min = Math.min(...arr);
  max = Math.max(...arr);
  difference = max-min;

  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i=0; i < arr.length; ++i){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    }else{
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (i=0; i < arr.length; ++i){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return Number((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (var arr in arrOfArr) {
    const result = func(...arrOfArr[arr]);
    if (result > maxWorkerResult){ maxWorkerResult = result }
  }

  return maxWorkerResult;
}
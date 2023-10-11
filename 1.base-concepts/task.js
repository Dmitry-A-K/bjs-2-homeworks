"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  // discriminant b²-4*a*c
  let D = b ** 2 - 4 * a * c;

  if (D > 0) {
    arr[0] = (-b + Math.sqrt(D)) / (2 * a);
    arr[1] = (-b - Math.sqrt(D)) / (2 * a);
  }

  else if (D == 0) {
    arr[0] = -b / (2 * a);
  }

    return arr;
    
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let position, P, S, everyMonth, total;

  // Годовой процент в месячный
  percent = percent / 12;

  // Линейная интерполяция при помощи уравнения прямой из 0-100 в 0-1
  // Положение числа в исходном отрезке, от 0 до 100
  position = (percent - 0) / (100 - 0);
  // Положение числа в конечном отрезке от 0 до 1
  P = 0 + (1 - 0) * position;

  // Ежемесячный платёж = S * (P + (P / (((1 + P)^n) - 1)))
  S = (amount-contribution);
  everyMonth = S * (P + (P / (((1 + P) ** countMonths) - 1)));

  // Общий платеж с окурглением до двух знаков после точки
  total = Math.round((everyMonth * countMonths) * 100) / 100;
  
  return  total;

}
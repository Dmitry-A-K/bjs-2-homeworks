function parseCount(value) {

  if (Number.isNaN(Number.parseFloat(value))) {
    throw new Error("Невалидное значение");
  } else {              
    return Number(parseFloat(value));
  }

}

function validateCount(value) {

  try {
    const result = parseCount(value);
    return result;
  } catch(error) {
      return error;
  }

    
}
  
class Triangle {
    #perimeter = "Ошибка! Треугольник не существует";
    #area = "Ошибка! Треугольник не существует";
    #a; #b; #c;
    #flag = true;

    constructor(a, b, c) {

        if(a+b <= c || a > b+c || b+c <= a || b > a+c || c+a <= b || c > a+b || a <= 0 || b <= 0 || c <= 0){
            this.#flag = false;
            throw new Error("Треугольник с такими сторонами не существует");
        }

        if(this.#flag){
        this.#a = a;
        this.#b = b;
        this.#c = c;
        this.#perimeter = (this.#a + this.#b + this.#c);
        // Полупериметр треугольника:
        const P = 1/2 * this.#perimeter;
        // Формула Герона для вычисления площади треугольника S по длинам его сторон a, b, c:
        const S = Math.sqrt(P * (P - this.#a) * (P - this.#b) * (P - this.#c));
        this.#area = Number(S.toFixed(3));
        }
    }

    get perimeter() {
      return this.#perimeter;
    }

    get area() {
        return this.#area;
    }

}
  
function getTriangle(a, b, c){
    
  try{
    const result = new Triangle(a, b, c);
    return result;
  }catch{
    const triangl = {};
    triangl.perimeter = "Ошибка! Треугольник не существует";
    triangl.area = "Ошибка! Треугольник не существует";
    Object.freeze(triangl);
    return triangl;
  }

}

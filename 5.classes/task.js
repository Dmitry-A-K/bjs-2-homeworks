
  class PrintEditionItem{
    _state
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
    }

    set state(value) {
      if(value < 0 || value > 100 || parseFloat(value) !== value){
        if (value < 0) value = 0
        if (value > 100) value = 100
        if (parseFloat(value) !== value) value = this.state
      } // (parseFloat(value) !== value) отсеивает всё кроме чисел и числовых значений из строки

      this._state = Number(value.toFixed(0));
    }

    get state() {
      return this._state;
    }

    fix() {
      this.state = this.state * 1.5;
    }

  }

  class Magazine extends PrintEditionItem{
    type = "magazine";
 
  }

  class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }

  }

  class NovelBook extends Book{
    type = "novel";

  }

  class FantasticBook extends Book{
    type = "fantastic";

  }

  class DetectiveBook extends Book{
    type = "detective";

  }

  class Library{
    name
    books = []
    constructor(name){
        this.name = name;
    }

    addBook(book){
      if (book.state > 30) this.books.push(book)
    } //в качестве аргумента объект — книгу или журнал. 

    giveBookByName(bookName){
      let searchIndex = -1;
      let book = null;
      
      searchIndex = this.books.findIndex((item) => item.name == bookName);
      if(searchIndex > -1) {
        book = this.books[searchIndex];
        this.books.splice(searchIndex, 1);
      }

      return book;
    }

    findBookBy(type, value){
      let searchIndex = -1;
      let book = null;

      searchIndex = this.books.findIndex((item) => item[type] == value);
      if(searchIndex > -1) book = this.books[searchIndex];
    
      return book;
    }

}



/* Тесты в консоли

const lib = new Library("Библиотека №115");
lib.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
lib.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
lib.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
lib.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(lib);
console.log(" ");

console.log("поиск по дате (Мурзилка) -> " + lib.findBookBy("releaseDate", 1924));
console.log("поиск по названию (Пикник на обочине) -> " + lib.findBookBy("name", "Пикник на обочине"));
console.log("поиск по страницам (Полное собрание повестей) -> " + lib.findBookBy("pagesCount", 1008));
console.log("поиск по автору (Машина времени) -> " + lib.findBookBy("author", "Герберт Уэллс"));

console.log(" ");

console.log("удаление по названию (Мурзилка) -> " + lib.giveBookByName("Мурзилка"));
console.log("удаление по названию (Пикник на обочине) -> " + lib.giveBookByName("Пикник на обочине"));

console.log(" ");
console.log(lib);


const polka = {
  prototype: new PrintEditionItem("Капитаны", 1994, 82),
  magazine: new Magazine("Работница", 1985, 33),
  book: new Book("Цветаева", "Сборник стихов", 1982, 103),
  novela: new NovelBook("Георгиев", "Карты на столе", 1999, 85),
  funtastic: new FantasticBook( "Булычёв", "Ракета в небе", 1985, 230),
  detective: new DetectiveBook("Маринина", "Соловьи в кустах", 2011, 20)
}

console.log(polka);

*/
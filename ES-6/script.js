const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }


  // 1. Destructuring Objects And Array

  const book = getBook(5);
  /* The below is the usual way to read object properties
     const title = book.title;
     const author = book.author;
     console.log(title, author);
  */ 

  // ES-6 way to destructure
  const {title, author, pages, genres, id, publicationDate} = book;
  
  console.log(title, author);
  console.log(genres);
  console.log(pages);

  // Array
  const [primaryGenre, secondaryGenre] = genres;

  console.log(primaryGenre, secondaryGenre);

  // 2. Rest Operator
  // copies the rest of the elements as an array to a new variable
  const [firstGenre, secondGenre, ...otherGenres] = genres;
  console.log(otherGenres, primaryGenre);

  /* will not work
    A rest element must be the last in the destructuring pattern
    const [firstGenre, ...otherGenres, secondGenre] = genres;
  */

  // 3. Spread Operator

  /*
    copies array or object
  */

  const updatedGenre = [genres, 'action'];
  console.log(updatedGenre);

  /*
  The above results in an array inside and array : [ [ 'fantasy', 'high-fantasy', 'novel', 'fantasy fiction' ],
  'action' ]

  Hence, to avoid this, spread operator can be used to copy the existing genre to a new updated genre array.
  */

  const updatedGenreUsingSpread = [...genres, 'action'];
  console.log(updatedGenreUsingSpread); // [ 'fantasy', 'high-fantasy', 'novel', 'fantasy fiction', 'action' ]

  /*
    For objects, spread operator can be used to copy existing object, add a new property to an object 
    or update and existing property in the object.
    
    Without Spread Operator : 
    const updatedBook = {book, 'hardcover': 89 }

    The updatedBook will contain the book object as a whole(association) instead of copying the properties individually

    updatedBook = {book : {id...}, 'hardcover': 89};
  */

  const updatedBook = {...book, 'hardcover': 89 };
  console.log(updatedBook);

  /*
    Updating a property in the object, the spread operator should be first , else property will not 
    be overriden

    const bookWithUpdatedPages = { 'pages': 890, ...book, }; will not update the number of pages
  */

    const bookWithUpdatedPages = { ...book, 'pages': 890 }; 
    console.log(bookWithUpdatedPages);

    // 3. Template Literals

    console.log(title);
    const summary = `The name of the book is : ${title} and published in ${publicationDate.split('-')[0]} `;
    console.log(summary);

    // 4. Arrow Function

    const splitFuncn = (str) => str.split('-');
    console.log(splitFuncn(publicationDate));


    // 5. 


    // 6. Array : map, filter, reduce, sort

    // map
    const arr = [1,3,4,6,8,9];

    const doubledArr = arr.map((num) => num * 2)

    console.log(doubledArr);

    const books = getBooks();

    const bookTitles = books.map((book) => book.title);

    console.log(bookTitles);

    const updatedBookSeller = books.map((book) => ({...book, seller: 'Amazon'}));

    console.log(updatedBookSeller);

    const essentialData = books.map((book) => {
        return {
            pages: book.pages,
            seller: 'Flipkart'
        }
    });

    console.log(essentialData);

    const essentialData1 = books.map((book) => ({
            pages: book.pages,
            seller: 'Flipkart'
    }));

    console.log(essentialData1);
    
    // filter
    const booksWithPagesGreaterThanThousand = books.filter((book) =>  book.pages > 1000);

    console.log(booksWithPagesGreaterThanThousand);

    const booksWithFantasyGenre = books.filter((book) => book.genres.includes('fantasy') && book.pages < 1000);

    console.log(booksWithFantasyGenre);

    const booksWithFantasyGenre1 = books.filter((book) => book.genres.includes('fantasy'))
                                       .filter((book) => book.pages > 1000);
    console.log(booksWithFantasyGenre1);

    const bookTitlesWithPageLessThanThousand = books.filter((book) => book.pages < 1000)
                                                    .map((book) => book.title);
    
    console.log(bookTitlesWithPageLessThanThousand);

    // reduce

    const sumOfPages = books.reduce((sum, book) => sum + book.pages, 0);
    console.log(sumOfPages);

    // sort

    /*
        using sort on an array, sorts the original array as well

        to avoid this, use slice() , which creates a copy of the array and sorts it
    */

    const arr_1 = [1,5,3,2,4];

    const arr_2 = arr_1.sort((a,b) => (a-b));


    console.log(arr_1);
    console.log(arr_2);

    console.log(arr_1 === arr_2); // true

    const arr_3 = [100,51,13,22,41];

    const arr_4 = arr_3.slice().sort((a,b) => (b-a)); // b-a sorts in descending

    console.log(arr_3);
    console.log(arr_4);

    // &&, || , ?? , ?

    console.log(1 && "Should Get Printed");

    console.log(0 && "Should Not Get Printed");

    console.log(undefined && "Should Not Get Printed");

    console.log(0 || "Should Get Printed");

    console.log(undefined || "Should Get Printed");

    console.log(1 || "Should Not Get Printed");


    const temperature = 0;

    const currentTemperature = temperature || 'no-data';

    console.log(currentTemperature);

    /*
     The currentTemperature prints no-data, however 0 degree is a valid temperature.
     Hence, instead of || operator, use nullish coalesce operator ??
     
     the nullish coalesce checks for undefined/null values only
    */

     const currentTemp = temperature ?? 'no-data';
     console.log(currentTemp);

     console.log(undefined ?? 'should get printed')

     console.log(0 ?? 'should not get printed')
     
     // Promises, async-await
    
     /*
     fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then((res) => res.json())
     .then((data) => console.log(data))
     console.log('Hi')
     */

     const promise = fetch('https://dummyjson.com/products/1')
     
     promise.then(response => {
       response.json()
       .then(data => console.log(data))
     }, reject => {
        console.error(reject.message);
     });
     console.log('Hello');

     











    








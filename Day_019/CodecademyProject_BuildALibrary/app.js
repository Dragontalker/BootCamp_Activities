// Task 1: Create an empty class called Media.
class Media {
    // Task 2: Create an empty constructor() method that takes on parameter.
    constructor (title) {
        // Task 3: Inside the contructor, set the values for the properties that Book, CD, and Movie share.
        this._title = title;
        this._isCheckedOut = false;
        this._rating = [];
    }

    // Task 4: Create getters for the title, isCheckOut, and ratings properties.
    get title() {
        return this._title;
    }

    get _isCheckedOut() {
        return this._isCheckedOut;
    }

    get _rating() {
        return this._rating;
    }

    // Task 5: Create a setter for the isCheckedOut property.
    set _isCheckedOut(value) {
        this_isCheckedOut = value; 
    }

    // Task 6: Create a method name toggleCheckOutStatus that changes the value saved to the _isCheckedOut property.
    toggleCheckOutStatus () {
        this._isCheckedOut = !this.isCheckedOut;
    }
    
    // Task 7: Create a method anem getAverageRating. Return the average value of the ratings array.
    getAverageRating () {
        let ratingSum = this.rating.reduce((accumulator, rating) => {
            accumulator + rating;
        })
        return ratingSum / this.ratings.length;
    }

    // Task 8: Add a method name addRating that accepts one argument and uses .push() to add it to the end of the ratings array.
    addRating (value) {
        this._rating.push(value);
    }
}

// Task 9: Build a Book class that extends Media.
class Book extends media {
    // Task 10: Create a constructor that accepts three arguments, which are used to set properties that do not have default values.
    constructor(author, title, pages) {
        // Task 11: Call super on the first line of the Book's constructor uses.
        super(title);
        // Task 12: Use the remaining arguments to set the author and pages properties in Book.
        this._author = author;
        this._pages = pages;
    }

    // Task 13: Create two new getters in the Book class.
    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

// Task 14: Create a Movie class.
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

// Task 15: Create a Book instance with the following properties.
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
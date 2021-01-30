// Task 1: Create an empty class called Media.
class media {
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
        let ratingSum = this.ratings.reduce((accumulator, rating) => {
            accumulator + rating;
        })
        return ratingSum / this.ratings.length;
    }
}
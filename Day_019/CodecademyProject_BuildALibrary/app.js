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
}
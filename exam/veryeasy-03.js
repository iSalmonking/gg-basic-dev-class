// Very Easy-03: Book Shelf

/*
Create a Book constructor that has two properties :

Title
Author
and two methods:

A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
*/

class Book {
	constructor(Title, Author) {
		this.title = Title;
		this.author = Author
	}
	getTitle(){
		return (`Title: ${this.title}`);
	}
	getAuthor(){
		return (`Author: ${this.author}`);
	}
}
let PP = new Book("Pride and Prejudice", "Jane Austen");
let H = new Book("Hamlet", "William Shakespeare");
let WP = new Book("War and Peace", "Leo Tolstoy");

// PP.getTitle()
// PP.getAuthor()

// H.getTitle()
// H.getAuthor()

// WP.getTitle()
// WP.getAuthor()
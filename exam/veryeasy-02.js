// Very Easy-02: Rectangle Series 1: Skeleton

/*
Write a class called Rectangle that represents a rectangular two-dimensional region. 
It should have the following constructor:

constructor(x, y, width, height)
Constructs a new rectangle whose top-left corner is specified by the given coordinates 
and with the given width and height.
 */

class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	toString(){
		return (`[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`)
	}
}

// let a = new Rectangle(1, 2, 5, 6);
// a.toString()
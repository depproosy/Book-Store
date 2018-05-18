var allBooks = data.books;
console.log(allBooks);

for (var i = 0; i < allBooks.length; i++) {
    createBook(allBooks[i]);
}

function createBook() {

    var flipBodies = document.getElementById("flipbodies");

    // Creating elements

    var flip = document.createElement("div");
    flip.className = "flip3D";

    var flipFront = document.createElement("div");
    flipFront.className = "front";

    var flipBack = document.createElement("div");
    flipBack.className = "back";

}

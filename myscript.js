var allBooks = data.books;
console.log(allBooks);

for (var i = 0; i < allBooks.length; i++) {
    createBook(allBooks[i]);
}

function createBook(book) {

    var flipBodies = document.getElementById("flipBodies");

    // Creating elements

    var flip = document.createElement("div");
    flip.className = "flip3D";

    var flipFront = document.createElement("div");
    flipFront.className = "front";

    var flipBack = document.createElement("div");
    flipBack.className = "back";

    // Assigning properties 

    var frontImage = document.createElement("img");
    frontImage.className = "book-logo";
    frontImage.setAttribute("src", book.portada);
    frontImage.setAttribute("alt", book.titula);

    flipFront.append(frontImage);



    var title = document.createElement("h3");

    flipBack.innerHTML = book.descripcion;

    var buttonId = document.createElement("button");
    buttonId.className = "button-click";
    buttonId.innerHTML = "More info";
    buttonId.setAttribute("data-fancybox", "group");
    buttonId.setAttribute("href", book.detalle);

    flipBack.append(buttonId);

    // Build elements

    flip.append(flipFront, flipBack);
    flipBodies.appendChild(flip);


}

$("[data-fancybox]").fancybox({

});

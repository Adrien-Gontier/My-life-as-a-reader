// import {books} from "./books";

console.log(books);

const booksList = document.getElementById('books-list');

const newBooks = books


for (let i = 0 ; 0 < books.length ; i++) {
    
    if (books[i].category === "PTR") {
        
        let div = document.createElement('div');
        div.id = `${books[i].idBook}`;
        div.className = 'books';
        booksList.appendChild(div);
        
        // will be continuing

        // create some functions et files :
        // - one function for the loop with file A
        // - one for the conditional with a file for each conditional with files B, C, D, E
        // - one for the loop content with the file A
        
        
        
        
    }

}





// let newParagraph = document.createElement('p');
//   newParagraph.innerText = `${episode.title}
// ${episode.duration} minutes
// ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
//   newDiv.append(newTitle);
//   newDiv.append(newParagraph);
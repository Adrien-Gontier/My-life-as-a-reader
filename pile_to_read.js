// import {books} from "./module/books.js";

console.log(books);

const booksList = document.getElementById('books-list');

for (let i = 0 ; 0 < books.length ; i++) {
    
    if (books[i].category === 'PTR') {
        
        let div = document.createElement('div');
        div.id = `${books[i].idBook}`;
        booksList.appendChild(div);
        
        // will be continuing
        
        
        
        
    }
    
}





// let newParagraph = document.createElement('p');
//   newParagraph.innerText = `${episode.title}
// ${episode.duration} minutes
// ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
//   newDiv.append(newTitle);
//   newDiv.append(newParagraph);
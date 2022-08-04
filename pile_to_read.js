// import {books} from "./books";

console.log(books);


const booksList = document.getElementById('books-list');


function afficherActivite( idActivite )
{
    for(let i=0; i< books.length ; i++)
    {
        if( books[i].inProgress === idActivite )
        {
            console.log(books[i].idBook);
            
            let divPerBook = document.createElement('div');
            divPerBook.id = `${books[i].idBook}`;
            divPerBook.className = 'books';
            booksList.appendChild(divPerBook);
            
            let div1 = document.createElement('div');
            divPerBook.appendChild(div1);
            
            let pAuthorName = document.createElement('p');
            pAuthorName.className = 'author_name';
            pAuthorName.innerText = `${books[i].author_name}`;
            div1.appendChild(pAuthorName);

            let pAuthorDateBD = document.createElement('p');
            pAuthorDateBD.className = 'author_date_born_death';
            pAuthorDateBD.innerText = `${books[i].author_date_born_death}`;
            div1.appendChild(pAuthorDateBD);

            let pTitleOfTheBook = document.createElement('p');
            pTitleOfTheBook.className = 'title_of_the_book';
            pTitleOfTheBook.innerText = `${books[i].title_of_the_book}`;
            div1.appendChild(pTitleOfTheBook);
            
            
        }
        
    }
}

afficherActivite(2);


// let newParagraph = document.createElement('p');
//   newParagraph.innerText = `${episode.title}
// ${episode.duration} minutes
// ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
//   newDiv.append(newTitle);
//   newDiv.append(newParagraph);
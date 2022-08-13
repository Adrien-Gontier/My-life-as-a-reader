

const booksList = document.getElementById('books-list');


function afficherActivite( idActivite )
{

    let j = 0

    let d = 0

    for(let i=0; i < books.length ; i++)
    {
        
        if( books[i].inProgress === idActivite )
        {

            if (d < j) {

                let hrBeetweenBook = document.createElement('hr');
                hrBeetweenBook.className = 'separation_line_between_books';
                booksList.appendChild(hrBeetweenBook);
    
                d++;
    
            }
            
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

            let pBookYearPublication = document.createElement('p');
            pBookYearPublication.className = 'book_year_publication';
            pBookYearPublication.innerText = `${books[i].book_year_publication}`;
            div1.appendChild(pBookYearPublication);

            let div2 = document.createElement('div');
            divPerBook.appendChild(div2);

            let pSummaryTitle = document.createElement('p');
            pSummaryTitle.className = 'summary_title';
            pSummaryTitle.innerText = `Summary`;
            div2.appendChild(pSummaryTitle);

            let sectionBookSummary = document.createElement('section');
            sectionBookSummary.className = 'book_summary';
            div2.appendChild(sectionBookSummary);

            for(let k = 0 ; k < books[i].book_summary.length ; k++) {
                let pBookSummary = document.createElement('p');
                pBookSummary.innerText = `${books[i].book_summary[k]}`;
                sectionBookSummary.appendChild(pBookSummary);
            }

            j++

        }

    }
}


// wishlist = 1 = WL
// Pile to read = 2 = PTR
// reading in progress = 3 = RIP
// reading finished = 4 = RF
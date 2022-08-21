
const websiteMap = document.getElementById('all_pages_links');

function afficherMapOfTheWebsite() {

    let home = document.createElement('a');
    home.href = 'index.php#home';
    home.innerText = 'Home';
    websiteMap.appendChild(home);

    let readingInProgress = document.createElement('a');
    readingInProgress.href = 'reading_in_progress.php#readinginprogress';
    readingInProgress.innerText = 'Reading in progress';
    websiteMap.appendChild(readingInProgress);

    for( let i = 0 ; i < books.length ; i ++) {

        if (books[i].inProgress === 3) {

            let booksReadingInProgress = document.createElement('a');
            booksReadingInProgress.href = `reading_in_progress.php#${books[i].idBook}`;
            booksReadingInProgress.innerText = `${books[i].author_name} - ${books[i].title_of_the_book}`;
            websiteMap.appendChild(booksReadingInProgress);

        }

    }



}



// Will concatenate the author's name and the book's name for what to display.

// Will be continu



afficherMapOfTheWebsite();
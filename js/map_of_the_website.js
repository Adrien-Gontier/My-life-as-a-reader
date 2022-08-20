
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

}



// Will concatenate the author's name and the book's name for what to display.

// Will be continu



afficherMapOfTheWebsite();
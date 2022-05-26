<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reading in progress - My life as a reader</title>  <!-- Thumb index of the page. -->
    <link href="style.css" rel="stylesheet" type="text/css" />  <!-- This file is connect to the file "style.css" for the stylesheet. -->
  </head>
  <body>
    <header>
      <a href="index.php" class="website_title">My life as a reader</a>  <!-- Title of the website and link to index.html -->
      <nav>
        
        <?php include('navbar.php'); ?>
        
      </nav>
    </header>
    <div class="page_title_head">
      <a id="reading_in_progress" class="page_title">Reading in progress</a>  <!-- Title of the page. -->
      <img class="picture_30_100_size" src="pictures/pexels-pixabay-415071.jpg" alt="Book open in half"> 
    </div>
    <div id="victor_hugo_notre_dame_de_paris" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
      <div>
        <p class="author_name">Victor Hugo</p>  <!-- First name and last name of the author -->
        <p class="author_date_born_death">1802 - 1885</p>  <!-- Year of born and year of death of the author. -->
        <p class="title_of_the_book">Notre-Dame de Paris</p>  <!-- Title of the book. -->
        <p class="book_year_publication">1832</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
      </div>
      <div>  
        <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
        <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
          <p>The plot takes place in Paris in 1482.</p>
          <p>The novel is divided into 11 books.</p>
          <p>Grégoire is a penniless poet. Quasimodo is tried for an attempted kidnapping.
             Esmeralda is arrested for a murder. And she's under the influence of witchcraft.
             The cathedral is obviously a special place in the unfolding of history.</p>
          <p>The novel is too large to be summarized is a few lines. So much that I can only recommend that you read it.</p>
        </section>
      </div>
    </div>

    <hr class="separation_line_between_books">

    <div id="stephen_king_the_outsider" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
      <div>
        <p class="author_name">Stephen King</p>  <!-- First name and last name of the author -->
        <p class="author_date_born_death">1947 -</p>  <!-- Year of born and year of death of the author. -->
        <p class="title_of_the_book">The outsider</p>  <!-- Title of the book. -->
        <p class="book_year_publication">2018</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
      </div>
      <div>  
        <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
        <section class="book_summary"><p>Coming soon ...</p>
        </section>  <!-- Summary of the book. From wikipedia, mostly. -->
      </div>
    </div>
    <footer>

      <?php include('footer.php'); ?>
    
    </footer>
  </body>
</html>

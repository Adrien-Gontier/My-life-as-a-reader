<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reading finished - My life as a reader</title>  <!-- Thumb index of the page. -->
    <link href="style_all_website.css" rel="stylesheet" type="text/css" />
    <link href="style_website_title.css" rel="stylesheet" type="text/css" />
    <link href="style_navbar.css" rel="stylesheet" type="text/css" />
    <link href="style_page_title_and_picture.css" rel="stylesheet" type="text/css" />
    <link href="style_books_content.css" rel="stylesheet" type="text/css" />
    <link href="style_footer.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <header>

      <?php include('website_title.php'); ?>

      <nav>
        
        <?php include('navbar.php'); ?>
        
      </nav>
    </header>

    <main>

    <div class="page_title_head">
      <a id="reading_finished" class="page_title">Reading finished</a>  <!-- Title of the page. -->
      <img class="picture_30_100_size" src="pictures/pexels-pixabay-159711.jpg" alt="Shelves full of books">
    </div> 

    <!-- Put here the links for each book on this page. -->

    <!-- Find a animation (possible in JavaScript) for the books get definitive appear when I scroll the page. -->
    
    <div id="stephen_king_storm_of_the_century" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
      <div>
        <p class="author_name">Stephen King</p>  <!-- First name and last name of the author -->
        <p class="author_date_born_death">1947 -</p>  <!-- Year of born and year of death of the author. -->
        <p class="title_of_the_book">Storm of the century</p>  <!-- Title of the book. -->
        <p class="book_year_publication">1999</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
      </div>
      <div>  
        <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
        <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
          <p>A powerful storm hits the fictional small island town of Little Tall Island.
             So powerful that all access to the island is cut off and no one can get out.</p>
          <p>Martha Clarendon, an elderly resident is brutally killed. Robbie Beals, city manager, investigates.</p>
          <p>Linoge, who claims to know the repetitive inner workings of Hell, is arrested.</p>
          <p>Later that evening, Linoge escapes and causes the same dream to all the sleeping townspeople.</p>
          <p>The next day, Linoge makes three inhabitants disappear.</p>
          <p>Who are its three inhabitants ?</p>
        </section>
      </div>
    </div>

    <hr class="separation_line_between_books">

    <div id="harry_harrison_make_room_make_room" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
      <div>
        <p class="author_name">Harry Harrison</p>  <!-- First name and last name of the author -->
        <p class="author_date_born_death">1925 - 2012</p>  <!-- Year of born and year of death of the author. -->
        <p class="title_of_the_book">Make Room ! Make Room !</p>  <!-- Title of the book. -->
        <p class="book_year_publication">1966</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
      </div>
      <div>  
        <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
        <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
          <p>New York 1999, overcrowded city, Andy Rush, then a police inspector, lives in a half-room with Sol, a retired engineer.</p>
          <p>Following a riot, Billy, who stole some meat, sells some of it to get a job as a messenger.
             Following his first delivery, he kills a wealthy racketeer, Mike.</p>
          <p>Andy takes charge of the investigation. During the latter, he falls in love with Shirl and enjoys Mike's luxurious apartment.
             But the lease coming to an end, they move in together.</p>
          <p>Sol cannot remain passive in the face of overpopulation and decides to join the march against the cancellation of a bill that aims to control the population.
             Following an injury, Sol dies. A family will take its place.</p>
          <p>Billy will eventually die, killed by Andy.</p>
          <p>The story ends with the screen in Times Square announcing that the United States census is 344 million citizens.</p>
        </section>
      </div>
    </div>

    </main>

    <footer>

      <?php include('footer.php'); ?>
    
    </footer>
  </body>
</html>

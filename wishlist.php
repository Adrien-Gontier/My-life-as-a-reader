<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wishlist - My life as a reader</title>  <!-- Thumb index of the page. -->
    <link href="style_all_website.css" rel="stylesheet" type="text/css" />
    <link href="style_website_title.css" rel="stylesheet" type="text/css" />
    <link href="style_navbar.css" rel="stylesheet" type="text/css" />
    <link href="style_but_index_navbar.css" rel="stylesheet" type="text/css" />
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
    <div class="page_title_head">
      <a id="wishlist" class="page_title">Wishlist</a>  <!-- Title of the page. -->
      <img class="picture_30_100_size" src="pictures/pexels-abby-chung-1106468.jpg" alt="Women in front of shelves full of books"> 
    </div> 

    <p>Choose a book</p>
      <select name="Choose books" onChange="location = this.options[this.selectedIndex].value;">
        <option value=""></option>
        <option value="#stephen_king_mr_mercedes">Stephen King - Mr Mercedes</option>
        <option value="#stephen_king_finders_keepers">Stephen King - Finders Keepers</option>
        <option value="#stephen_king_end_of_watch">Stephen King - End of watch</option>
      </select> 

      
    <!-- Find a animation (possible in JavaScript) for the books get definitive appear when I scroll the page. -->
    
    <div id="stephen_king_mr_mercedes" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
      <div>
        <p class="author_name">Stephen King</p>  <!-- First name and last name of the author -->
        <p class="author_date_born_death">1947 -</p>  <!-- Year of born and year of death of the author. -->
        <p class="title_of_the_book">Mr Mercedes</p>  <!-- Title of the book. -->
        <p class="book_year_publication">2014</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
      </div>
      <div>  
        <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
        <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
          <p>A Mercedes drives into the crowd, killing sixteen people and seriously injuring several.</p>
          <p>Bill Hodges, a recently retired detective, receives a letter from an individual claiming to be responsible for the job fair incident, calling himself "Mr. Mercedes".</p>
          <p>The incident had taken place late in Hodges' career and was still unresolved when he retired.</p>
          <p>Hodges is intrigued and begins to investigate the case instead of delivering the letter to his former police colleague, Pete Huntley.</p>
          <p>But there is the existence of Brady Hartsfield. who is he ? How is he related to this case ?</p>
        </section>
      </div>
    </div>

    <hr class="separation_line_between_books">

    <div id="stephen_king_finders_keepers" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
      <div>
        <p class="author_name">Stephen King</p>  <!-- First name and last name of the author -->
        <p class="author_date_born_death">1947 -</p>  <!-- Year of born and year of death of the author. -->
        <p class="title_of_the_book">Finders Keepers</p>  <!-- Title of the book. -->
        <p class="book_year_publication">2015</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
      </div>
      <div>  
        <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
        <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
          <p>Coming soon ...</p>
        </section>
      </div>
    </div>

    <hr class="separation_line_between_books">

    <div id="stephen_king_end_of_watch" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
      <div>
        <p class="author_name">Stephen King</p>  <!-- First name and last name of the author -->
        <p class="author_date_born_death">1947 -</p>  <!-- Year of born and year of death of the author. -->
        <p class="title_of_the_book">End of watch</p>  <!-- Title of the book. -->
        <p class="book_year_publication">2016</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
      </div>
      <div>  
        <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
        <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
          <p>Coming soon ...</p>
        </section>
      </div>
    </div>
    <footer>

      <?php include('footer.php'); ?>
    
    </footer>
  </body>
</html>

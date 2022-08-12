<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wishlist - My life as a reader</title>  <!-- Thumb index of the page. -->
    <link href="../css/style_all_website.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_website_title.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_navbar.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_but_index_navbar.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_page_title_and_picture.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_books_content.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_footer.css" rel="stylesheet" type="text/css" />
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
        <a id="wishlist" class="page_title">Wishlist</a>  <!-- Title of the page. -->
        <img class="picture_30_100_size" src="../pictures/pexels-abby-chung-1106468.jpg" alt="Women in front of shelves full of books"> 
      </div> 


      <!-- Not exactly what I want. Will try with JavaScript -->
      <p class="dropdown_list_title">Choose a book</p>
      <select name="Choose books" onChange="location = this.options[this.selectedIndex].value;">
        <option value=""></option>
        <option value="#stephen_king_mr_mercedes">Stephen King - Mr Mercedes</option>
        <option value="#stephen_king_finders_keepers">Stephen King - Finders Keepers</option>
        <option value="#stephen_king_end_of_watch">Stephen King - End of watch</option>
        </select> 

      
      <!-- Find a animation (possible in JavaScript) for the books get definitive appear when I scroll the page. -->
    
      
      <section id="books-list"></section>


    </main>

    <footer>

      <?php include('footer.php'); ?>
    
    </footer>

    <script src="../js/books.js"></script>
    <script src="../js/book_loop.js"></script>
    <script src="../js/wishlist.js"></script>

  </body>
</html>

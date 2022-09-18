<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reading in progress - My life as a reader</title>  <!-- Thumb index of the page. -->
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
        <a id="reading_in_progress" class="page_title">Reading in progress</a>  <!-- Title of the page. -->
        <img class="picture_30_100_size" src="../pictures/pexels-pixabay-415071.jpg" alt="Book open in half"> 
      </div> 


      <!-- Not exactly what I want. Will try with JavaScript -->
      <p class="dropdown_list_title">Choose a book</p>
      <select name="Choose books" onChange="location = this.options[this.selectedIndex].value;">
        <option value=""></option>
        <option value="#victor_hugo_notre_dame_de_paris">Victor Hugo - Notre-Dame de Paris</option>
        <option value="#stephen_king_the_outsider">Stephen King - The outsider</option>
      </select> 

      
      <!-- Find a animation (possible in JavaScript) for the books get definitive appear when I scroll the page. -->
    
      
      <section id="books-list"></section>


    </main>

    <footer>

      <?php include('footer.php'); ?>
    
    </footer>

    <script src="../js/books.js"></script>
    <script src="../js/book_loop.js"></script>
    <script src="../js/reading_in_progress.js"></script>

  </body>
</html>

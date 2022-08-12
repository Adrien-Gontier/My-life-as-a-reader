<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pile to read - My life as a reader</title>  <!-- Thumb index of the page. -->
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
        <a id="pile_to_read" class="page_title">Pile to read</a>  <!-- Title of the page -->
        <img class="picture_15_100_size" src="../pictures/pexels-sharon-mccutcheon-1148399.jpg" alt="Books stacked on top of each other">
      </div> 

      
      <!-- Not exactly what I want. Will try with JavaScript -->
      <p class="dropdown_list_title">Choose a book</p>
      <select name="Choose books" onChange="location = this.options[this.selectedIndex].value;">
        <option value=""></option>
        <option value="#walter_tevis_the_queen_s_gambit">Walter Tevis - The Queen's Gambit</option>
        <option value="#stephen_king_night_shift">Stephen King - Night Shift</option>
        <option value="#dan_brown_angels_and_demons">Dan Brown - Angels and démons</option>
        <option value="#dan_brown_the_da_vinci_code">Dan Brown - The Da Vinci Code</option>
        <option value="#dan_brown_the_lost_symbol">Dan Brown - The lost symbol</option>
        <option value="#dan_brown_inferno">Dan Brown - Inferno</option>
        <option value="#dan_brown_origin">Dan Brown - Origin</option>
      </select> 


      <!-- Find a animation (possible in JavaScript) for the books get definitive appear when I scroll the page. -->
    

      <section id="books-list"></section>


    </main>

    <footer>

      <?php include('footer.php'); ?>
    
    </footer>

    <script src="../js/books.js"></script>
    <script src="../js/book_loop.js"></script>
    <script src="../js/pile_to_read.js"></script>

  </body>
</html>

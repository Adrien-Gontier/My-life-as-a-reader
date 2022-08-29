<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Map of the website - My life as a reader</title>  <!-- Thumb index of the page. -->
    <link href="../css/style_all_website.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_website_title.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_navbar.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_but_index_navbar.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_page_title_and_picture.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_map_of_the_website.css" rel="stylesheet" type="text/css" />
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

    <a class="page_title">Map of the website</a>  <!-- Title of the page. -->
    
    <section id="all_pages_links"></section>

    <section class="all_pages_links"> <!-- WILL BE REMOVED WHEN THE MANIPULATION OF DOM IS READY -->
      <a href="index.php#home">Home</a> <!-- Manipulate with DOM js -->
      <a href="reading_in_progress.php#readinginprogress">Reading in progress</a>
      <a href="reading_in_progress.php#victor_hugo_notre_dame_de_paris">Victor Hugo - Notre-Dame de Paris</a>
      <a href="reading_in_progress.php#stephen_king_the_outsider">Stephen King - The outsider</a>
      <a href="reading_finished.php#reading_finished">Reading finished</a>
      <a href="reading_finished.php#stephen_king_storm_of_the_century">Stephen King - Storm of the century</a>
      <a href="reading_finished.php#harry_harrison_make_room_make_room">Harry Harrison - Make room ! Make room !</a>
      <a href="pile_to_read.php#pile_to_read">Pile to read</a>
      <a href="pile_to_read.php#walter_tevis_the_queen_s_gambit">Walter Tevis - The Queen's Gambit</a>
      <a href="pile_to_read.php#stephen_king_night_shift">Stephen King - Night shift</a>
      <a href="pile_to_read.php#dan_brown_angels_and_demons">Dan Brown - Angels and démons</a>
      <a href="pile_to_read.php#dan_brown_the_da_vinci_code">Dan Brown - The Da Vinci Code</a>
      <a href="pile_to_read.php#dan_brown_the_lost_symbol">Dan Brown - The lost symbol</a>
      <a href="pile_to_read.php#dan_brown_inferno">Dan Brown - Inferno</a>
      <a href="pile_to_read.php#dan_brown_origin">Dan Brown - Origin</a>
      <a href="wishlist.php#wishlst">Wishlist</a>
      <a href="wishlist.php#stephen_king_mr_mercedes">Stephen King - Mr Mercedes</a>
      <a href="wishlist.php#stephen_king_finders_keepers">Stephen King - Finders Keepers</a>
      <a href="wishlist.php#stephen_king_end_of_watch">Stephen King - End of watch</a>
      <a href="contact.php#contact">Contact</a>
      <a href="who_am_i.php#who_am_i">Who am I</a>
    </section>

    </main>

    <footer>

      <?php include('footer.php'); ?>
    
    </footer>
    
    <script src="../js/books.js"></script>
    <script src="../js/map_of_the_website.js"></script>



  </body>
</html>     
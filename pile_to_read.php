<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pile to read - My life as a reader</title>  <!-- Thumb index of the page. -->
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

    <main>

      <div class="page_title_head">
        <a id="pile_to_read" class="page_title">Pile to read</a>  <!-- Title of the page -->
        <img class="picture_15_100_size" src="pictures/pexels-sharon-mccutcheon-1148399.jpg" alt="Books stacked on top of each other">
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
    
      <div id="walter_tevis_the_queen_s_gambit" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
        <div>
          <p class="author_name">Walter Tevis</p>  <!-- First name and last name of the author -->
          <p class="author_date_born_death">1928 - 1984</p>  <!-- Year of born and year of death of the author. -->
          <p class="title_of_the_book">The Queen's Gambit</p>  <!-- Title of the book. -->
          <p class="book_year_publication">1983</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
        </div>
        <div>  
          <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
          <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
            <p>During her childhood, Beth learns the failures of Mister Shaibel. A few months later, she is introduced to a high school teacher who runs a chess club.</p>
            <p>At the age of 13, Beth was adopted by a couple who separated shortly afterwards. At a local high school chess tournament, she wins.</p>
            <p>From tournament to tournament, she is noticed as a prodigy.</p>
            <p>Finally, following an international career, she meets a group of men in a park who play for love of the game.</p>
          </section>
        </div>
      </div>

      <hr class="separation_line_between_books">

      <div id="stephen_king_night_shift" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
        <div>
          <p class="author_name">Stephen King</p>  <!-- First name and last name of the author -->
          <p class="author_date_born_death">1947 - </p>  <!-- Year of born and year of death of the author. -->
          <p class="title_of_the_book">Night Shift</p>  <!-- Title of the book. -->
          <p class="book_year_publication">1978</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
        </div>
        <div>  
          <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
          <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
            <p>A museum guide discovers a strange curse weighing on his family.</p>
            <p>A police inspector investigates a series of deaths in a laundry.</p>
            <p>A contract killer receives a package with toy soldiers who start attacking him.</p>
            <p>A man approaches a company to mow his lawn.</p>
            <p>A young man euthanizes his mother who has cancer.</p>
            <p>Such are, among other things, the adventures of collecting short stories.</p>
          </section>  
        </div>
      </div>

      <hr class="separation_line_between_books">

      <div id="dan_brown_angels_and_demons" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
        <div>
          <p class="author_name">Dan Brown</p>  <!-- First name and last name of the author -->
          <p class="author_date_born_death">1964 - </p>  <!-- Year of born and year of death of the author. -->
          <p class="title_of_the_book">Angels and démons</p>  <!-- Title of the book. -->
          <p class="book_year_publication">2000</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
        </div>
        <div>  
          <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
          <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
            <p>A prominent person in the CERN lab is murdered and one of the capsules containing antimatter is stolen. The pope dies.</p>
            <p>A video, showing the four favorites to his estate, is sent to the attention of the Vatican by a killer.</p>
            <p>The director of CERN calls on Robert Langdon, a professor at Harvard University.</p>
            <p>Favorites are run one after another through Rome.</p>
            <p>Discover Robert Langton in this first adventure. The famous specialist of the religious symbology.</p>
          </section>  
        </div>
      </div>

      <hr class="separation_line_between_books">

      <div id="dan_brown_the_da_vinci_code" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
        <div>
          <p class="author_name">Dan Brown</p>  <!-- First name and last name of the author -->
          <p class="author_date_born_death">1964 - </p>  <!-- Year of born and year of death of the author. -->
          <p class="title_of_the_book">The Da Vinci Code</p>  <!-- Title of the book. -->
          <p class="book_year_publication">2003</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
        </div>
        <div>  
          <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
          <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
            <p>Robert Langdon is implicated despite himself, during a trip to Paris, in the case of the murder of Jacques Saunière, curator at the Louvre Museum.</p>
            <p>Suspected of the murder, Langton escapes the police.</p>
            <p>Sophie Neveu, cryptologist, asks Langdon to help her understand the message left by the curator of the Louvre.</p>
            <p>Langdon and Neveu later discover that Saunière was in charge of the Priory of Sion.</p>
            <p>But what is the Da Vinci Code ? And what is the secret linked to the latter ?</p>
          </section>
        </div>
      </div>

      <hr class="separation_line_between_books">

      <div id="dan_brown_the_lost_symbol" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
        <div>
          <p class="author_name">Dan Brown</p>  <!-- First name and last name of the author -->
          <p class="author_date_born_death">1964 - </p>  <!-- Year of born and year of death of the author. -->
          <p class="title_of_the_book">The lost symbol</p>  <!-- Title of the book. -->
          <p class="book_year_publication">2009</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
        </div>
        <div>  
          <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
          <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
            <p>One Sunday morning, after his sports ritual in the Olympic swimming pool on the Harvard campus, Robert Langdon learns of an invitation. A seminar on symbolism in architecture the same evening at the United States Capitol.</p>
            <p>The invitation came from Peter Solomon, his mentor, who is head of the Smithsonian Institution.</p>
            <p>But, on arriving, Robert Langton discovers an empty room.</p>
            <p>Why ? Was the invitation really sent by his mentor ?</p>
            <p>Find out by reading the third adventure of the famous specialist in religious symbology.</p>
          </section>
        </div>
      </div>

      <hr class="separation_line_between_books">

      <div id="dan_brown_inferno" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
        <div>
          <p class="author_name">Dan Brown</p>  <!-- First name and last name of the author -->
          <p class="author_date_born_death">1964 - </p>  <!-- Year of born and year of death of the author. -->
          <p class="title_of_the_book">Inferno</p>  <!-- Title of the book. -->
          <p class="book_year_publication">2013</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
        </div>
        <div>  
          <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
          <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
            <p>The suicide of a client of the president. This client wants to be remembered as righteous.</p>
            <p>Robert Langton wakes up in the hospital in Florence with a thirty-six hour hole. He finds himself with a mysterious object in his belongings. And a dream that torments his mind.</p>
            <p>The English doctor Sienna Brooks explains to him that someone tried to kill him by shooting him in the head.</p>
            <p>Moments later, a young woman named Vayentha wanting to go to Robert Langton's room to kill him misses her shot and kills another doctor.</p>
            <p>Siena and Robert flee down the fire escape.</p>
            <p>Where are they going to go? Where will Sienna take Robert ?</p>
            <p>Discover without delay the fourth adventure of the famous expert in religious symbolism..</p>
          </section>
        </div>
      </div>

      <hr class="separation_line_between_books">

      <div id="dan_brown_origin" class="books">  <!-- that's where I describe a book I anticipate to read. It's divide in flex-box. -->
        <div>
          <p class="author_name">Dan Brown</p>  <!-- First name and last name of the author -->
          <p class="author_date_born_death">1964 - </p>  <!-- Year of born and year of death of the author. -->
          <p class="title_of_the_book">Origin</p>  <!-- Title of the book. -->
          <p class="book_year_publication">2017</p>  <!-- Year of the publication of the book. If it's more than one year : choose the most relevant year. -->
        </div>
        <div>  
          <p class="summary_title">Summary</p>  <!-- Title : "summary" of the book. -->
          <section class="book_summary">  <!-- Summary of the book. From wikipedia, mostly. -->
            <p>Robert Langdon, famous professor of religious symbology, arrives at the Guggenheim Museum
               in Bilbao to attend a historic ceremony.
               The host of the evening, Edmond Kirsch, a forty-year-old billionaire whose high-tech inventions
               and audacious predictions have given him worldwide fame.</p>
            <p>Kirsch, a former student of Langdon at Harvard, is about to lay out the results of his research
               that promises to finally provide an answer to the two fundamental questions of humanity :
               where did man come from? where is he going ? But he is murdered.</p>
            <p>Find out what happens next as you follow Robert Langton's fifth adventure.</p>
          </section>
        </div>
      </div>

    </main>

    <footer>

      <?php include('footer.php'); ?>
    
    </footer>
  </body>
</html>

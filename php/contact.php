<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact - My Life as a reader</title>  <!-- Thumb index of the page. -->
    <link href="../css/style_all_website.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_website_title.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_navbar.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_but_index_navbar.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_page_title_and_picture.css" rel="stylesheet" type="text/css" />
    <link href="../css/style_contact.css" rel="stylesheet" type="text/css" />
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
      <a id="contact" class="page_title">Contact</a>  <!-- Title of the page -->
      <img class="picture_15_100_size" src="../pictures/pexels-min-an-1638515.jpg" alt="Desk with what we need to write"> 
    </div>
    <section class="contactform_rules">  <!-- Like the class' name this is the rules for the contact form -->
      <div>
        <p>If you have some questions or suggestions you want to send me ?</p>
        <p>Please send me a message.</p>
        <p>You're message mustn't include : insult, racism, homophoby, ...</p>
        <p>Be polite. That's all !</p>
      </div>
    </section> 
    <!-- method="post" action="contact_form.php --> <!--  Will be decide what method -->
    <!-- will be continue --> 
    <section id="contact_section">
      <div id="contactform">
        <label for="name">First and last name</label>
        <input type="text" id="name" name="name" value=""/>  <!-- Text area for the first name and the last name -->
        <label for="email">Email</label>
        <input type="email" id="email" name="email" value=""/>  <!-- Text area for the email -->
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>  <!-- Text area for the message content -->  <!-- Put a charactere count with a style will change when arrive to 501. And we cannot go over 501. With a limit to send at 500. -->
        <button id="submit" type="submit">Send</button>  <!-- Submit button -->
      </div>
    </section>

    </main>

    <footer>

      <?php include('footer.php'); ?>
    
    </footer>

    <script src="../js/contact.js"></script>

  </body>
</html>

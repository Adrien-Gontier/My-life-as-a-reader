<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact - My Life as a reader</title>  <!-- Thumb index of the page. -->
    <link href="style_all_website.css" rel="stylesheet" type="text/css" />
    <link href="style_website_title.css" rel="stylesheet" type="text/css" />
    <link href="style_navbar.css" rel="stylesheet" type="text/css" />
    <link href="style_page_title_and_picture.css" rel="stylesheet" type="text/css" />
    <link href="style_contact.css" rel="stylesheet" type="text/css" />
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
      <a id="contact" class="page_title">Contact</a>  <!-- Title of the page -->
      <img src="" alt=""> 
    </div>
    <section class="contactform_rules">  <!-- Like the class' name this is the rules for the contact form -->
      <p>If you have some questions or suggestions you want to send me ? Please send me a message.</p>
      <p>You're message mustn't include : insult, racism, homophoby, ...</p>
      <p>Be polite. That's all !</p>
    </section>   
    <section id="contact_section">
      <form id="contactform">
        <label for="name">First and last name</label>
        <input type="text" id="name" name="name" value=""/>  <!-- Text area for the first name and the last name -->
        <label for="email">Email</label>
        <input type="email" id="email" name="email" value=""/>  <!-- Text area for the email -->
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>  <!-- Text area for the message content -->
        <input id="submit" type="submit" value="Submit" />  <!-- Submit button -->
      </form>
    </section>
    <footer>

      <?php include('footer.php'); ?>
    
    </footer>
  </body>
</html>

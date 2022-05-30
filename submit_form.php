<?php

if (!isset($_POST['email']) || !isset($_POST['message']))
{
    echo('Il faut un email et un message pour soumettre le formulaire.');
return; }
$email = $_POST['email'];
$message = $_POST['message'];
?>

<!-- !!! Chek every code line of this page !!! -->

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
    


    <h1>Message bien reçu !</h1>
    <div class="card">
      <div class="card-body">
        <p class="card-title">Rappel de vos informations</p>
        <p class="card-text"><b>Email</b> : <?php echo($email); ?></p>
        <p class="card-text"><b>Message</b> : <?php echo strip_tags($message); ?></p>
      </div>
    </div>
  </body>
</html>
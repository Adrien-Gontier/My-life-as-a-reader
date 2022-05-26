<!DOCTYPE html>
<html lang="en">  <!-- The langage of this page is "english" -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome - My life as a reader</title>  <!-- Thumb index of the page. -->
    <link href="style.css" rel="stylesheet" type="text/css" />  <!-- This file is connect to the file "style.css" for the stylesheet. -->
    <link href="style_index.css" rel="stylesheet" type="text/css"/>  <!-- This file is connect to the file "style_index.css" for the stylesheet : special navbar animation. -->
  </head>
  <body>
    <header>
      <a href="index.php" class="website_title_index">My life as a reader</a>  <!-- Title of the website and link to index.html -->
      <nav>

        <?php include('navbar.php'); ?>
        
      </nav>
    </header>
    <a id="home" class="page_title">Welcome Home</a>  <!-- Title of the page. -->
    <section class="section_welcome_page">
      <article>
        <p>The last book I read was The Storm of the Century by Stephen King. I really liked the fact that it was written in the form of a screenplay. This gives originality to the work.</p>
        <p>If not, what's new in my life as a reader? I always have on my bedside table the big cobblestone that is In Search of Lost Time by Marcel Proust. I had started reading it a few years ago, but since then I haven't touched it again. However, he has been watching me for a long time. But I don't think I have much time right now.</p>
        <p>I don't have a lot of time, because I've been learning computer code since the beginning of the year. this excites me. And at the same time, I really miss reading.</p>
        <p>I really like spending hours reading on my bed with my cat on my legs, preventing me from moving, like an anvil. I like to see the view of the characters in situations and moments of their lives. To be able to appreciate the unfolding of events. To let myself be transported by the rhythm of their dialogue.</p>
        <p>In short, I miss reading.</p>
      </article>
      <aside>
        <p>My name is Adrien Gontier. I'm a reader. And actually I'm a further web developer.</p>
      </aside>
    </section>
    <footer>

      <?php include('footer.php'); ?>
    
    </footer>
  </body>
</html>

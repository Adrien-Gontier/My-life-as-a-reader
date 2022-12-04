import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <h2 className="page-title-head__page-title">Home</h2>
            <section class="section_welcome_page">
                <article>
                    <p>The last book I read is, honestly ? I don't remenber because it's was so far.</p>
                    <p>I spend all my time learning code.</p>
                    <p>In early 2000's, I read several books from John Grisham.</p>
                    <p>In the last decade, I read all Harry Potter's books.</p>
                    <p></p>
                </article>
                <aside>
                    <p>My name is Adrien Gontier. I'm a reader. I'm also in a training programm where my purpuse is to learning coding.</p>
                    <p>I learn coding since the beginning of the year. The stack I learn is HTML, CSS, JavaScript, ReactJS, JAVA, ...</p>
                    <p>I like what I learn and I enjoy my self. Sometimes it's hard, sometimes not.</p>
                    <Link to="/whoami">Who am I ?</Link>
                </aside>
            </section>

        </div>
    )
}


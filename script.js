const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
let darkTheme = localStorage.getItem('darkTheme');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.backgroundColor = 'linen';
        body.style.color = 'black';
        body.style.transition = '2s';
        document.body.classList.remove('darkTheme');
        localStorage.setItem('darkTheme', null);
    }else{
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        document.body.classList.add('darkTheme');
        localStorage.setItem('darkTheme', 'active');
    }
})

if(darkTheme === 'active'){
    toggle.classList.remove('bi-brightness-high-fill');
    toggle.classList.add('bi-moon');
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';
    document.body.classList.add('darkTheme');
}

document.addEventListener('DOMContentLoaded', function() {
  const blogList = document.getElementById('blog-list');
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<h2>${post.title}</h2><p>${post.date}</p><p>${post.content}</p>`;
            blogList.appendChild(listItem);
        });
        })
        .catch(error => console.error('Error fetching posts:', error));
    });

class Specialheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class ="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        `;
    }
}

class Specialfooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
    <footer>
        <hr/>
        author: Andy Hoang
        <p>&copy; copyright reserved</p>
        <a href="mailto:23tdhoang@gmail.com">Contact: 23tdhoang</a> <!-- Links to my email -->
    </footer>
        `;
    }
}

customElements.define('special-header', Specialheader);
customElements.define('special-footer', Specialfooter);
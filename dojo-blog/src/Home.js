import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: '1st Article', body: 'lorem ipsum...', author: 'oaa', id: 1 },
        { title: '2nd Article!', body: 'lorem ipsum...', author: 'dani', id: 2 },
        { title: '3rd Article', body: 'lorem ipsum...', author: 'adrian', id: 3 }
    ])

    return (
        <div className="home">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Home;

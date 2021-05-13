import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: '1st Article', body: 'lorem ipsum...', author: 'oaa', id: 1 },
        { title: '2nd Article!', body: 'lorem ipsum...', author: 'dani', id: 2 },
        { title: '3rd Article', body: 'lorem ipsum...', author: 'adrian', id: 3 },
        { title: 'Last Article', body: 'lorem ipsum...', author: 'oaa', id: 99 },
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('in!')
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs listed down below 👇🏻" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'oaa' )} title="All oaa's blogs listed down below 👇🏻"/>
        </div>
    );
}

export default Home;

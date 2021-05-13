import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: '1st Article', body: 'lorem ipsum...', author: 'oaa', id: 1 },
        { title: '2nd Article!', body: 'lorem ipsum...', author: 'dani', id: 2 },
        { title: '3rd Article', body: 'lorem ipsum...', author: 'adrian', id: 3 }
    ])

    return (
        <div className="home">
                <BlogList blogs={blogs} title="All blogs listed down below 👇🏻"/>
        </div>
    );
}

export default Home;

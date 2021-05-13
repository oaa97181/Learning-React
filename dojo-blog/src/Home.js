// to run json-server do:
// npx json-server --watch data/db.json --port 8000

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch(' http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data=>{
                setBlogs(data)
            })
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs listed down below 👇🏻"/>}
        </div>
    );
}

export default Home;

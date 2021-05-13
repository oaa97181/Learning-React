// to run json-server do:
// npx json-server --watch data/db.json --port 8000

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetch(' http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data=>{
                setBlogs(data)
                setIsPending(false)
            })
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs listed down below 👇🏻"/>}
        </div>
    );
}

export default Home;

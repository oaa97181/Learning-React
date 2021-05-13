// to run json-server do:
// npx json-server --watch data/db.json --port 8000

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(' http://localhost:8000/blogss')
            .then(res => {
                if (!res.ok){
                    throw Error('could not fecth data for that source, sorry ☹')
                }
                return res.json()
            })
            .then(data=>{
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs listed down below 👇🏻"/>}
        </div>
    );
};

export default Home;

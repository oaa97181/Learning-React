// to run json-server do:
// npx json-server --watch data/db.json --port 8000

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs listed down below 👇🏻"/>}
        </div>
    );
}

export default Home;

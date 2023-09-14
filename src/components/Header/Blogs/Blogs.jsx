import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <header className="md:w-2/3">
            {
                blogs.map(blog => <Blog
                    key={(blog.id)}
                    handleAddToBookmark={handleAddToBookmark}
                    blog={blog}></Blog>)
            }
        </header>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Blogs;
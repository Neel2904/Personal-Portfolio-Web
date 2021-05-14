import React from 'react';
import blogs from '../Components/allBlogs';
import Title from "../Components/Title";

const Blogspage = () => {
    return (
        <div>
            <div className="b-title">
                <Title title={"Recent Blogs"} span={"Recent Blogs"} />
            </div>
            <div className="BlogsPage">
            {
                blogs.map((blog)=>{
                    return <div className="blog" key={blog.id}>
                        <div className="blog-content">
                            <img src={blog.image} alt="" />
                            <a href={blog.link} target="_blank" className="blog-link">
                                {blog.title}
                            </a>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    );
}

export default Blogspage;

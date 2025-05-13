import React from "react";
import BlogCard from "./BlogCard";

const Blogs=(props)=>{
    const allowEditing=(id)=>{
        console.log("editing", id);
        props.onEditing(id);
    }
    const allowDeleting=(id)=>{
        props.onDeleting(id);
    }
    console.log(props.blogs);
    return (
        <ul>
            {(props.blogs || []).map((blog)=>{
                return  <BlogCard 
                key={blog.key}
                id={blog.key}
                title={blog.title}
                imageUrl={blog.imageUrl}
                description={blog.description}
                onEditing={allowEditing}
                onDeleting={allowDeleting}
                />
            })}
        </ul>
    )
}

export default Blogs;
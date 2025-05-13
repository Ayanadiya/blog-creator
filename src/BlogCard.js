import React from "react";
import Card from "./UI/Card";
const BlogCard=(props)=>{
    const editHandler=()=>{
        console.log("editing", props.id)
        props.onEditing(props.id);
    }
    const deleteHandler=()=>{
        props.onDeleting(props.id);
    }
    return (
        <Card>
            <h3>{props.title}</h3>
            <img src={props.imageUrl}/>
            <p>{props.description}</p>
            <div>
                <button type="button" onClick={editHandler}>Edit Blog</button>
                <button type="button" onClick={deleteHandler}>Delete Blog</button>
            </div>
        </Card>
    )
}

export default BlogCard;
import React, {useState, useEffect} from "react";
import './AddBlog.css'

const AddBlog=(props)=>{
    const [imageUrl, setimageUrl]=useState("");
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const isEditing=props.isEditing;
    const blogToEdit=props.blogToEdit;

    const imageChangeHandler=(event)=>{
        setimageUrl(event.target.value);
    }

    const titleChangeHandler=(event)=>{
        setTitle(event.target.value);
    }

    const descriptionChangeHandler=(event)=>{
        setDescription(event.target.value);
    }

    useEffect(()=>{
        if (isEditing && blogToEdit) {
            setimageUrl(blogToEdit.imageUrl);
            setTitle(blogToEdit.title);
            setDescription(blogToEdit.description);
          }
    },[isEditing,blogToEdit])

    const postBlogHandler=(event)=>{
        event.preventDefault();
        const newBlog={
            key:isEditing ? blogToEdit.key : Math.random().toString(),
            imageUrl:imageUrl,
            title:title,
            description:description
        }
        if(!isEditing)
            {props.onAdding();}
        props.onSave(newBlog);
        setimageUrl("")
        setTitle("")
        setDescription("")
    }
    return(
        <form className="form" onSubmit={postBlogHandler}>
            <div>
                <label htmlFor="imageUrl">Image Url:</label>
                <input type="text" value={imageUrl} id="imageUrl" name="imageUrl" onChange={imageChangeHandler}/>
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" value={title} id="title" name="title" onChange={titleChangeHandler}/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" value={description} id="description" name="description" onChange={descriptionChangeHandler}/>
            </div>
            <div>
                <button type="submit">{isEditing ? "Update Blog" : "Post Blog"}</button>
            </div>
        </form>
    )
}

export default AddBlog;
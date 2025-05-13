import React, {useState} from 'react';
import './App.css';
import AddBlog from './Forms/AddBlog';
import Blogs from './Blogs'

function App() {
  const [count, setCount]=useState(0);
  const [editing, setEditing]=useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogs, setBlogs]=useState([]);
  
  const editHandler=(id)=>{
    setEditing(true);
    const blogToEdit = blogs.find((blog) => blog.key === id);
    console.log("blog to edit", blogToEdit);
    setEditingBlog(blogToEdit);
  }
  const incrementCount=()=>{
    setCount(count+1);
  }

  const deleteHandler=(id)=>{
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.key !== id));
    setCount((prev) => prev - 1);
  }
  
  const addBlog=(newBlog)=>{
    if(editing){
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.key === editingBlog.key ? newBlog : blog
        )
      );  
      setEditing(false);
      setEditingBlog(null);
    }else{
      setBlogs((prevBlogs)=>{
        return [...prevBlogs,newBlog];
       })
    } 
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Blog</h1>
        <h3>Total Blog:{count}</h3>
      </header>
      <AddBlog onAdding={incrementCount} onSave={addBlog}  isEditing={editing}
        blogToEdit={editingBlog}/>
      <Blogs blogs={blogs} onEditing={editHandler} onDeleting={deleteHandler}/>
    </div>
  );
}

export default App;

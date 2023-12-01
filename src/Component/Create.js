import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario'); //default value
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); //useHistory is a hook

    const handleSubmit = (e) => {
        //why Cannot read properties of undefined (reading 'preventDefault')?
        //https://stackoverflow.com/questions/66954309/cannot-read-properties-of-undefined-reading-preventdefault
        e.preventDefault(); //prevent the page from refreshing
        const blog = { title, body, author }; //object with the values of the form
        setIsPending(true);
        fetch('http://localhost:8000/blogs', { //fetch is a promise so we can chain on a .then() method
            method: 'POST',
            headers: { "Content-Type": "application/json" },    //specify the type of data we are sending to the server
            body: JSON.stringify(blog) //converts the object into a string to send to the server
        }).then(() => {
        console.log("new blog added");    
        setIsPending(false);
        //history.go(-1); //go back one page in the browser history
        history.push('/'); //redirect to the homepage 
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}         //e.target.value is the value of the option that is selected
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>} 
                {/* //if isPending is false, then show the button */}
                {isPending && <button disabled>Adding Blog...</button>} 
                {/* //if isPending is true, then show the button */}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;
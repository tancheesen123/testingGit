import { useParams } from "react-router-dom";  //useParams is a hook
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("blog deleted");
            history.push('/'); //redirect to the homepage

        })
    }
    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - {id}</h2> */}
             { isPending && <div>Loading...</div> }      {/*conditional templating*/ }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick = {handleClick}>Delete Button</button>
                </article>
            )}
        </div>

     );
}
 
export default BlogDetails;
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // let name = 'mario';

  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);
  // const [age,setAge] = useState(2523);
  // const handleClick =() =>{
  //     console.log(name);s
  //     setName('luigi');

  // }

  // const handleClickAgian = (name,e ) => {
  //     console.log('hello' + name,e.target);
  // }

  //   const handleDelete = (id ) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     // filter blog
  //     setBlogs(newBlogs);
  //     // render new blogs
  // }
  //command to run json-server
  ///////////////////////////////////////////////////////////////////

  // npx json-server --watch data/db.json --port 8000

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((res) => {
  //         console.log("This is res",res);
  //         if(!res.ok){
  //           throw Error("could not fetch the data for that resource");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setBlogs(data);
  //         setIsPending(false);
  //         setError(null);
  //       })
  //       .catch(err =>{
  //         // console.log(err.message);
  //         setError(err.message);
  //         setIsPending(false);
  //       })
  //   }, 1000);
  // }, []);

  //   fetch('http://localhost:8000/blogs').then(res =>{
  //     return res.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     setBlogs(data);
  //     setIsPending(false);
  //   })
  // },[]);
  // [] empty dependency only allow useEffect run for first render.


  const { data:blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* <h2>Homepage</h2>
        <p>{name} is {age} years old </p>
        <button onClick ={handleClick}>Click Me</button>
        <button onClick ={(e) => 
            handleClickAgian("mario",e)
            }>Click Me Agian</button> */}
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* ^^ allow passing null */}

      {/* <button onClick={() => setName("luigei")}> Change Name</button>
      <h2>{name}</h2> */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario Blogs!"
      /> */}
    </div>
  );
};

export default Home;

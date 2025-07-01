import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-full flex flex-col items-center  gap-x-1 mb-[50px] ">
      <div className='mb-[120px]'>
        <Header />
      </div>
      <div className='max-w-[620px] w-11/12 py-5  flex  gap-y-2'>
        <button 
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigation(-1)}>Back</button>
      </div>
      <div >
        {loading ? (
          <div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">Loading...</p>
          </div>
        ) : blog ? (
          <div >
            <BlogDetails post={blog} />
            <h2 className="text-3xl font-bold my-8">Releated Blogs</h2>
            {relatedblog.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">No Blogs Found !</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

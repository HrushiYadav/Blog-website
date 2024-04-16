import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if(loading){
      return <div>
      <Navbar /> 
      <div  className="flex justify-center">
          <div>
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
          </div>
      </div>
  </div>
    }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="">
            {blogs.map(blog =>
                        <BlogCard
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate="4th March 2024"
                    />
            )}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Fade } from "react-awesome-reveal";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize Contentful client
  const client = createClient({
    space: "Your space id",
    accessToken: "Your Token Id",
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await client.getEntries({
          content_type: "pageBlogPost",
          order: "-fields.blogUploadDate", // Sort by blogUploadDate in descending order
        });

        console.log("API Response: ", response);
        console.log("Blog Items: ", response.items);

        setBlogs(response.items);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
      <section className="bg-white">
        {/* <!-- Title Section --> */}
        <div className="text-center py-16 ">
          <h1 className="text-4xl font-bold text-primary px-8 mb-4 ">
            Empower Your Journey with Kio Batteries
          </h1>
          <p className="text-lg text-gray-600 max-w-screen-md mx-auto">
            Stay updated with the latest insights, innovations, and expert
            advice on energy solutions, battery technology, and sustainable
            power for a brighter future.
          </p>
        </div>

        {/* <!-- Content Section --> */}
        <div className="px-8 pb-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:pb-20 sm:pb-16">
          <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 ">
            {blogs.map((blog) => (
              <div key={blog.sys.id} className="relative">
                <a
                  href="#_"
                  className="block overflow-hidden group rounded-xl shadow-lg"
                >
                  <img
                    src={blog.fields.blogImage.fields.file.url}
                    className="object-cover w-full transition-all duration-300 ease-out group-hover:scale-110"
                    alt={blog.fields.blogTitle}
                  />
                </a>
                <div className="relative mt-5">
                  {/* Display dynamic blog post date */}
                  <p className="uppercase font-semibold text-xs mb-2.5 text-red-600">
                    {new Date(blog.fields.blogUploadDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                  <a href="#" className="block mb-3 hover:underline">
                    {/* Display dynamic blog headline */}
                    <h2 className="text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-purple-700">
                      {blog.fields.blogTitle}
                    </h2>
                  </a>
                  <p className="mb-4 text-gray-700 ">
                    {/* Display the first paragraph of the blog's body text */}
                    {blog.fields.blogDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

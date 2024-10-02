import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { createClient } from "contentful";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Blogs = () => {
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
          limit: "9",
        });
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

  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching blogs: {error.message}</p>;

  return (
    <div className="font-poppins container md:flex flex-col mx-auto">
      <Fade direction="up" triggerOnce={true}>
        <h3 className="text-center text-4xl font-semibold text-primary py-8">
          Latest from blogs & Articles
        </h3>
      </Fade>
      <div className="md:max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 overflow-hidden">
        <Fade direction="up" triggerOnce={true}>
          <Slider {...settings} className="w-full">
            {blogs.map((blog) => (
              <>
                <Link to={"blogs"}>
                  <div key={blog.sys.id} className="px-2 md:px-8">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={blog.fields.blogImage.fields.file.url} // Blog image from Contentful
                        alt={blog.fields.blogImageAltAttribute} // Blog title as alt text
                        className=""
                      />
                    </div>
                    <div className="p-2">
                      <a
                        href={`/blog/${blog.fields.slug}`} // Blog link (use slug for dynamic URL)
                        className="text-2xl hover:text-blue-700 hover:underline"
                      >
                        {blog.fields.blogTitle}
                      </a>
                      <p className="mb-4 text-gray-700 ">
                        {/* Display the first paragraph of the blog's body text */}
                        {blog.fields.blogDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </Slider>
        </Fade>
      </div>
      <Fade className="mx-auto">
        <Link
          to="/blogs"
          className="relative flex h-[50px] w-80 md:w-64 items-center justify-center overflow-hidden bg-red-400 text-black rounded-full shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-96"
        >
          <span className="relative z-10 text-xl font-poppins">
            View More Blogs
          </span>
        </Link>
      </Fade>
    </div>
  );
};

export default Blogs;

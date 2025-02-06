import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';
import Loader from '../Loader/Loader';
import placeholderImg from '../../assets/404.jpg';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 7;

  const navigation = useNavigation();
  const blogs = useLoaderData();

  if (navigation.state === 'loading') return <Loader />;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-8">
      <div className="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
        {currentBlogs[0] && (
          <Link
            to={`/blog/${currentBlogs[0]?.id}`}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
          >
            <img
              src={
                currentBlogs[0]?.cover_image ||
                currentBlogs[0]?.social_image ||
                placeholderImg
              }
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {currentBlogs[0]?.title}
              </h3>
              <span className="text-xs">
                {new Date(currentBlogs[0]?.published_at).toLocaleDateString()}
              </span>
              <p>{currentBlogs[0]?.description}</p>
            </div>
          </Link>
        )}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.slice(1).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`btn btn-outline btn-primary ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`btn btn-outline btn-primary ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Blogs;






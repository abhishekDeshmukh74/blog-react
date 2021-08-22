import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Blog-list.css';
import BlogPost, { IBlog } from './Blog-post';
import { API_ENDPOINT } from './constants';

function BlogList() {
  const [blogList, setBlogList] = useState<IBlog[]>([]);
  const [filteredList, setFilteredList] = useState<IBlog[]>([]);

  useEffect(() => {
    async function fetchBlogList() {
      const { data } = await axios.get(`${API_ENDPOINT}posts`);
      setBlogList(data);
      setFilteredList(data);
    }
    fetchBlogList();
  }, []);

  const handleInputChange = (event: any) => {
    const searchValue = event.target.value;
    const filteredList = blogList.filter((blog) => {
      return blog.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredList(filteredList);
  };

  return (
    <div className='blog-list'>
      <input className="search-box" type='text' id='filter' placeholder='Search for blog title...' onChange={handleInputChange} />
      {filteredList.map(({ id, title, userId, body }) => (
        <Link to={`/blog/${id}`}>
          <BlogPost key={id} id={id} title={title} userId={userId} body={body} />
        </Link>
      ))}
    </div>
  );
}

export default BlogList;

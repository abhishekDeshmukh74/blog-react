import { useDispatch } from 'react-redux';
import './Blog-post.css';

export interface IBlog {
  body: string;
  title: string;
  id: string;
  userId: string;
}


function BlogPost({ id, title, body, userId }: IBlog) {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({
      type: 'SELECT_BLOG',
      payload: { id, title, body, userId }
    });
  };

  return (
    <div className='blog-post' onClick={handleClick}>
      <h2>
        {id}: {title}
      </h2>
      <p>{body}</p>
    </div>
  );
}

export default BlogPost;

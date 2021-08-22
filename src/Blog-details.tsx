import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';

import './Blog-post.css';
import { API_ENDPOINT } from './constants';
import Comment, { IComment } from './Comment';
import { State } from './reducer';

function BlogDetails() {
  const { id }: any = useParams();
  const selectedBlog = useSelector<State, State['selectedBlog']>((state) => state.selectedBlog);
  const [comments, setComments] = useState<IComment[]>([]);
  console.log('selectedBlog:', selectedBlog)

  const getComments = async () => {
    const { data } = await axios.get(`${API_ENDPOINT}comments?postId=${id}`);
    setComments(data);
  };

  return (
    <div className='blog-details'>
      <h2>
        {id}: {selectedBlog.title}
      </h2>
      <p>{selectedBlog.body}</p>
      <Button onClick={getComments}>Load Comments</Button>
      <div className='comments'>
        {comments.map(({ id, postId, name, email, body }) => (
          <Comment key={id} id={id} postId={postId} name={name} email={email} body={body} />
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;

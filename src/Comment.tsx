import './Comment.css';

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function Comment({ id, postId, name, email, body }: IComment) {
  return (
    <div className='comment'>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
}

export default Comment;

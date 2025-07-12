import { useParams } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📰 Single Post View</h2>
      <p>You're viewing post ID: {id}</p>
    </div>
  );
}

export default PostPage;

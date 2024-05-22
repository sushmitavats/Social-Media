import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/Post-list-store";
const Post = ({ Post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {Post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(Post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{Post.body}</p>
        {Post.tags.map((tag) => (
          <span className="badge rounded-pill text-bg-primary hash-tag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {Post.reactions} people.
        </div>
      </div>
    </div>
  );
};
export default Post;

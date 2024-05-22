import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomMes from "./WelcomMes";
const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const handlePostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && <WelcomMes onGetPostClick={handlePostClick} />}
      {postList.map((post) => (
        <Post key={post.id} Post={post} />
      ))}
    </>
  );
};
export default PostList;

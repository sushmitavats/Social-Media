const WelcomMes = ({ onGetPostClick }) => {
  return (
    <center>
      <h1>There is No Post</h1>
      <button
        type="button"
        onClick={onGetPostClick}
        className="btn btn-primary"
      >
        Get Post
      </button>
    </center>
  );
};
export default WelcomMes;

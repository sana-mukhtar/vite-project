import PostCard from "./components/postCard";
import { useGetPostsQuery } from "./redux/api";

const App = () => {
  const { isLoading, data } = useGetPostsQuery("");
  return (
    <div>
      App
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        data?.map((i) => <PostCard post={i} />)
      )}
    </div>
  );
};

export default App;

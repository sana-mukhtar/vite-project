import { FormEvent, useState } from "react";
import PostCard from "./components/postCard";
import { useGetPostsQuery } from "./redux/api";

const App = () => {
  const { isLoading, data } = useGetPostsQuery("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {};
  return (
    <div>
      App
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        data?.map((i) => <PostCard post={i} />)
      )}
    </div>
  );
};

export default App;

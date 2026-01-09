import PostCard from "./components/PostCard";

type Post = {
  id: number;
  title: string;
};
export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await data.json();
  return (
    <div>
      <h1 style= {{fontSize: "30px",fontWeight: "600",marginTop: "20px", textAlign: "center"}}> Blog Home</h1>
      {posts.map((p) => (
        <PostCard key={p.id} id={p.id} title={p.title} />
      ))}
    </div>
  );
}

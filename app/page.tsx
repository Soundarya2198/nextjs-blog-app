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
      <h1> Blog Home</h1>
      {posts.slice(0, 10).map((p) => (
        <PostCard key={p.id} id={p.id} title={p.title} />
      ))}
    </div>
  );
}

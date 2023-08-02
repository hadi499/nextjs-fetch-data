const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function Home() {
  // const posts = await getPosts();
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);
  console.log(posts);
  console.log(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-2xl font-bold text-blue-500">Posts title</h1>
        {posts.map((post: any) => {
          return <p className="text-xl">{post.title}</p>;
        })}
        <h1 className="text-2xl font-bold text-blue-500 mt-6 mb-4">Username</h1>
        {users.map((user: any) => {
          return <p className="text-xl">{user.name}</p>;
        })}
      </div>
    </main>
  );
}

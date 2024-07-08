import { getPosts } from "@/_actions/postAction";

export default async function Home() {
  const { data, errMsg } = await getPosts();

  if (errMsg) return <h1>{errMsg}</h1>;
console.log(data)
  return (
    <main className="bg bg-white h-96 mt-20 text-black">
      {data.map((item) => (
        <div key={item._id} className="p-4">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-sm">{item.model}</p>
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-auto object-cover mt-2"
          />
        </div>
      ))}
    </main>
  );
}

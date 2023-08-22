export default async function Home() {
  const res = await fetch("https://64e4523bc5556380291302c7.mockapi.io/Products", { cache: "no-cache" });
  const products: Product[] = await res.json();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <form action="">
        <h1>Product</h1>
        <input
          className="border border-gray-800 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mt-5"
          type="text"
        />
        <input
          className="border border-gray-800 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mt-5"
          type="text"
        />
        <button className="bg-transparent hover:bg-blue-500 hover:text-white border border-gray-800 rounded w-full py-2 px-4 text-gray-800  focus:outline-none focus:bg-white focus:border-blue-500 mt-5">
          Button
        </button>
      </form>
      <div className="flex flex-wrap gap-5 m-12"> {/* Update the grid-rows class */}
        {products.map((user) => {
          return (
            <div className="item border border-gray-800 p-3 rounded">
              <p>{user.product}</p>
              <strong className="text-red-500">${user.price}</strong>
            </div>
          );
        })}
      </div>
    </main>
  );
}
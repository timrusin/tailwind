function App() {
  return (
    <div className="flex text-center m-4 xs:text-sm sm:text-base lg:text-3xl xl:text-5xl bg-gray-200">
        <h1 className="basis-1/2 m-2 order-1 border-2 bg-red-200 hover:bg-yellow-200 ease-in duration-200 border-green-400">
          Hello world!
        </h1>
        <h1 className="basis-1/3 m-2 order-3 border-2 bg-blue-200 hover:bg-yellow-200 ease-in duration-200 border-green-400">
          test
        </h1>
        <h1 className="basis-1/3 m-2 order-2 border-2 bg-purple-200 hover:bg-yellow-200 ease-in duration-200 border-green-400">
          Birds
        </h1>
    </div>
  );
}

export default App;

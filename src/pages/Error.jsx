import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-950'>
      <div>
        <h1 className='font-extrabold text-9xl text-center text-zinc-800'>
          {error.status ? error.status : "404"}
        </h1>
        <p className='font-semibold text-center text-zinc-500'>
          {error.data.message ? error.data.message : "Page not found"}
        </p>
        <Link
          to={"/"}
          className='bg-rose-500 block mx-auto w-fit mt-4 px-2 py-1 font-bold'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

const Payment = () => {
  return (
    <div className='relative bg-zinc-950 w-full p-4'>
      <h1 className='font-bold text-3xl text-center text-gray-500 mb-14'>
        Become a premium user ☕️
      </h1>
      <div className='flex justify-center items-center gap-4 max-md:flex-col'>
        <div className='bg-zinc-800 flex flex-col items-center p-4 transform translate-y-6 max-md:translate-y-0'>
          <img
            src='../images/icon04.png'
            alt='icon04'
            className='size-16 mb-2'
          />
          <p className='text-gray-400 font-semibold mb-2'>1 month plan</p>
          <p className='text-gray-400 font-semibold'>
            $<span className='text-6xl font-extrabold text-rose-600'>9.99</span>
          </p>
          <p className='text-gray-400 font-semibold mb-3'>per month</p>
          <button className='bg-rose-600 text-white uppercase px-7 py-2 font-bold mb-2'>
            Get the deal
          </button>
          <p className='text-gray-400 font-semibold text-sm'>
            30-days money-back guarantee
          </p>
        </div>
        <div className='bg-zinc-800 flex flex-col items-center p-4 transform -translate-y-6 max-md:translate-y-0'>
          <img
            src='../images/icon05.png'
            alt='icon04'
            className='size-16 mb-2'
          />
          <p className='text-gray-400 font-semibold mb-2'>12 month plan</p>
          <p className='text-gray-400 font-semibold'>
            $<span className='text-6xl font-extrabold text-rose-600'>3.99</span>
          </p>
          <p className='text-gray-400 font-semibold mb-3'>per month</p>
          <p className='bg-zinc-700 text-rose-500 px-2 py-1 font-semibold mb-2 rounded-full'>
            Save 68%
          </p>
          <button className='bg-rose-600 text-white uppercase px-7 py-2 font-bold mb-2'>
            Get the deal
          </button>
          <p className='text-gray-400 font-semibold text-sm'>
            30-days money-back guarantee
          </p>
        </div>
        <div className='bg-zinc-800 flex flex-col items-center p-4 transform translate-y-6 max-md:translate-y-0'>
          <img
            src='../images/icon06.png'
            alt='icon04'
            className='size-16 mb-2'
          />
          <p className='text-gray-400 font-semibold mb-2'>6 month plan</p>
          <p className='text-gray-400 font-semibold'>
            $<span className='text-6xl font-extrabold text-rose-600'>6.99</span>
          </p>
          <p className='text-gray-400 font-semibold mb-3'>per month</p>
          <button className='bg-rose-600 text-white uppercase px-7 py-2 font-bold mb-2'>
            Get the deal
          </button>
          <p className='text-gray-400 font-semibold text-sm'>
            30-days money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;

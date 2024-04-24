import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-10 md:px-0'>
      <h1 className='text-3xl text-white font-semibold md:text-4xl'>Find the perfect Vintage Leather Jacket</h1>
      <SearchBar />
    </div>
  );
}

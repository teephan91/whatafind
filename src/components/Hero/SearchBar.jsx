import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className="flex items-center gap-5 mt-4 p-4 rounded-lg w-full md:w-6/12 bg-white">
      <FaSearch className='text-2xl'/>
      <input type="search" className="bg-transparent border-none h-full w-full text-xl focus:outline-none"/>
    </div>
  );
}

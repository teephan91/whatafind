export default function MobileMenu({isActive}) {
  const toggleMobileMenu = !isActive ? 'hidden' : 'flex';
  return (
    <div
          id="menu"
          className={`absolute flex-col items-end right-10 top-12 bg-white drop-shadow-md rounded-lg p-5 text-black font-semibold text-xl cursor-pointer ${toggleMobileMenu}`}
    >
      <a href="#" className="hover:text-tan">
        Find
      </a>
      <a href="#" className="hover:text-tan">
        About
      </a>
      <a href="#" className="hover:text-tan">
        Account & Favorites
      </a>
    </div>
  );
}

export default function HamburgerMenuBtn({ isActive, handleClick }) {
  const toggleBtnClass = isActive ? 'open' : '';

  return (
    <button
      id="menu_btn"
      className={`hamburger md:hidden ${toggleBtnClass}`}
      onClick={() => handleClick()}
    >
      <span className="ham_top" />
      <span className="ham_middle" />
      <span className="ham_bottom" />
    </button>
  );
}

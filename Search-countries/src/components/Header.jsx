function Header({ children }) {
  return (
    <header className="h-24 bg-light-elements dark:bg-dark-elements flex justify-between items-center px-4 md:px-8 lg:px-12 mb-8 shadow-sm">
      {children}
    </header>
  );
}

export default Header;

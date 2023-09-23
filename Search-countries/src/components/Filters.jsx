function Filters({ children }) {
  return (
    <nav className="mb-8 flex flex-col lg:flex-row lg:justify-between lg:px-8 items-start text-homepage">
      {children}
    </nav>
  );
}

export default Filters;

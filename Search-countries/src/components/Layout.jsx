function Layout({ children, theme }) {
  return (
    <div className={`${theme}`}>
      <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default Layout;

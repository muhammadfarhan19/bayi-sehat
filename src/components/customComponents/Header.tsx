const Header = ({ title }: { title: string }) => {
  const path = title.split("/");
  return (
    <header className="pb-5 border-b">
      <h1 className="font-medium sm:text-xl capitalize">{path[path.length - 1]} Page</h1>
    </header>
  );
};

export default Header;

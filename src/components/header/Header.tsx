import Breadcrumbs from "./Breadcrumbs";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center bg-au-background border-b border-b-[#ffffff1a] border-solid h-10 xl:h-14">
      <div className="container">
        <Breadcrumbs />
      </div>
    </header>
  );
};

export default Header;

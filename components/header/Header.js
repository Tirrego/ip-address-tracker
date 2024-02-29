import InputForm from "./inputForm/InputForm";
import List from "./list/List";

const Header = () => {
  return (
    <header>
      <div className="w-full  flex flex-col  items-center py-10 bg-[url('/images/pattern-bg-mobile.png')] bg-no-repeat bg-cover gap-10 h-72">
        <h1 className="text-3xl text-white font-semibold">IP Adress Tracker</h1>
        <InputForm />
        <List />
      </div>
    </header>
  );
};

export default Header;

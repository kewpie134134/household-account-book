import MonthSelector from "../atoms/MonthSelectbox";
import YearSelector from "../atoms/YearSelectbox";

const Header = () => {
  return (
    <>
      <YearSelector />
      <MonthSelector />
    </>
  );
};

export default Header;

import SelectLocationComboBox from "./SelectLocationComboBox";

const Header = () => {
  return (
    <div className="max-w-[600px] w-full mx-auto p-4 mt-20 border-b-2 border-b-blue-800 flex items-center justify-between gap-2">
      <SelectLocationComboBox />
    </div>
  );
};

export default Header;

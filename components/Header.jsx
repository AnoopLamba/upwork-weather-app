import SelectLocationDialog from "./SelectLocationDialog";

const Header = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 border-b-2 border-b-blue-800 flex items-center justify-between gap-2">
      <SelectLocationDialog />
    </div>
  );
};

export default Header;

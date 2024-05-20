import SelectLocationComboBox from "./SelectLocationComboBox";
import WeekdayListBox from "./WeekdayListBox";

const Header = ({
  selectedCountry,
  setSelectedCountry,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <div className="max-w-[600px] w-full mx-auto p-4 mt-20 flex items-center justify-between gap-2">
      <SelectLocationComboBox
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <WeekdayListBox
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </div>
  );
};

export default Header;

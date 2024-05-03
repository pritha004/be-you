import useTheme from "../contexts/theme";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const onChangeBtn = (e: React.FormEvent<HTMLInputElement>) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <label className=" cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />

      {themeMode === "dark" ? (
        <IoSunny fontSize={30} />
      ) : (
        <IoMdMoon color="black" fontSize={30} />
      )}
    </label>
  );
}

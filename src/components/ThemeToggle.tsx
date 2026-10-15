import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../theme/ThemeProvider";

const ThemeToggle = (): React.JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      {theme === "dark" ? (
        <LuSun className="size-5" aria-hidden />
      ) : (
        <LuMoon className="size-5" aria-hidden />
      )}
    </button>
  );
};

export default ThemeToggle;

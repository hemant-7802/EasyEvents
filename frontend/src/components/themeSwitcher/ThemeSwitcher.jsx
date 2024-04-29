import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      size="sm"
      color="secondary"
      thumbIcon={({ isSelected, className }) => isSelected ? (setTheme('dark'),<SunIcon className={className} />) : (setTheme('light'),<MoonIcon className={className}/>)}
      >
    </Switch>
  )
};
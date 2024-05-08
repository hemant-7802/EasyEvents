import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      size="sm"
      color="secondary"
      thumbIcon={({ isSelected, className }) => isSelected ? (
        setTheme('dark'), <SunIcon className={className} />
      ) : (
        setTheme('light'), <MoonIcon className={className} />
      )}
      value={theme}
    >
    </Switch>
  )
};
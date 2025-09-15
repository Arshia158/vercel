"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { Palette, Sun, Moon, Monitor, Droplets, Zap, Leaf, Check } from "lucide-react"

const themes = [
  { name: "Light", value: "light", icon: Sun, color: "bg-yellow-500" },
  { name: "Dark", value: "dark", icon: Moon, color: "bg-slate-800" },
  { name: "Blue", value: "blue", icon: Droplets, color: "bg-blue-500" },
  { name: "Purple", value: "purple", icon: Zap, color: "bg-purple-500" },
  { name: "Green", value: "green", icon: Leaf, color: "bg-green-500" },
  { name: "System", value: "system", icon: Monitor, color: "bg-gray-500" },
]

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  const currentTheme = themes.find((t) => t.value === theme) || themes[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 rounded-full border-2 hover:scale-105 transition-all duration-200 bg-transparent h-10 px-4"
        >
          <div className={`w-3 h-3 rounded-full ${currentTheme.color}`} />
          <span className="hidden sm:inline">{currentTheme.name}</span>
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-2">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          const isSelected = theme === themeOption.value
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value as any)}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-accent/50 transition-colors"
            >
              <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
              <Icon className="h-4 w-4" />
              <span className="font-medium flex-1">{themeOption.name}</span>
              {isSelected && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import { ThemeProvider as BaseThemeProvider } from "next-themes";
export function ThemeProvider({ children }: React.PropsWithChildren) {
  console.log("ThemeProviderThemeProviderThemeProvider");
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
}

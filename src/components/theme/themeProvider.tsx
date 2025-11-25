import { ThemeProvider as BaseThemeProvider } from "next-themes";
export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
}

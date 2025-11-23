import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="font-bold text-4xl">404</h1>
            <p className="mt-4 text-muted-foreground">
              The page you are looking for does not exist.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}

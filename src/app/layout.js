import { Geist, Geist_Mono, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const ubuntu = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"]
})

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Salud central",
  description: "Pagina web de salud hecha por rugby01",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen flex flex-col ${ubuntu.className} antialiased`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="light" themes={["light", "dark"]}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

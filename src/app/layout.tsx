import { DM_Serif_Text, Rubik } from "next/font/google";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import GlobalStylesProvider from "./components/GlobalStyleProvider";
import BtnZap from "./components/BtnWhatsApp";
import { StyledComponentsRegistry } from "@/utils/StyledConponents";
import Script from "next/script";
import Analytics from "./Analytics";


const title = DM_Serif_Text({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

const text = Rubik({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "600", "900"],
  style: ["normal", "italic"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${title.variable} ${text.variable}`}>
        <Analytics/>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <GlobalStylesProvider />
            <BtnZap />
            {children}
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

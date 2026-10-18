import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/content/site";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(siteConfig.url),title:{default:"AVD — Design & development",template:"%s"},description:siteConfig.description,icons:{icon:"/icon.svg"}};
export const viewport:Viewport={width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:ReactNode}){
 return <html lang="en"><head><link rel="preload" href="/fonts/anton.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/><link rel="preload" href="/fonts/manrope-variable.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/></head><body><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main">{children}</main><Footer/></body></html>;
}

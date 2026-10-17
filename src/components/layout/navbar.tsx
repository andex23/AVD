"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useRef,useState} from "react";
import {navLinks} from "@/content/site";
export function Navbar(){
 const pathname=usePathname();const[open,setOpen]=useState(false);const toggle=useRef<HTMLButtonElement>(null);const navigation=useRef<HTMLElement>(null);
 useEffect(()=>{setOpen(false)},[pathname]);
 useEffect(()=>{if(!open)return;const close=(event:KeyboardEvent)=>{if(event.key==="Escape"){setOpen(false);toggle.current?.focus()}};document.addEventListener("keydown",close);return()=>document.removeEventListener("keydown",close)},[open]);
 return <header className="site-header"><Link className="wordmark" href="/" aria-label="AVD home">AVD<span aria-hidden="true">.</span></Link>
 <button ref={toggle} className="menu-button" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={()=>setOpen(!open)}>{open?"Close":"Menu"}<span aria-hidden="true">{open?"×":"+"}</span></button>
 <nav ref={navigation} id="site-navigation" className={open?"site-nav open":"site-nav"} aria-label="Main navigation">{navLinks.map(link=><Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href)?"page":undefined} onClick={()=>setOpen(false)}>{link.label}</Link>)}</nav></header>
}

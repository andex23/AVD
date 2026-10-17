import type {Metadata} from "next";
import {ContactForm} from "@/components/forms/contact-form";
import {createPageMetadata} from "@/lib/seo";
export const metadata:Metadata=createPageMetadata("contact");
export default function ContactPage(){return <><div className="page-opening wrap"><h1>Start with<br/>what you need.</h1><p className="opening-copy">A good brief makes the next conversation easier. Describe the project, review the details and download a copy to share.</p></div><div className="contact-layout wrap"><aside><p className="large-copy">A little context<br/>goes a long way.</p><p>What are you making? Who is it for? What should change when it works?</p><p>Your answers stay in this page. Nothing is sent, saved to an account or booked. Downloading creates a file on your device.</p></aside><ContactForm/></div></>}

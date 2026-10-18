import {ArrowIcon} from "@/components/ui/arrow-icon";
import Link from "next/link";
export default function NotFound(){return <div className="page-opening wrap"><h1>That page<br/>isn’t here.</h1><p className="opening-copy">Try the work collection or return to the homepage.</p><Link href="/work" className="text-link">Explore the work <ArrowIcon/></Link></div>}

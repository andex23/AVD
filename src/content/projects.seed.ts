import type { Project } from "@/types/project";
export const projectsSeed: Project[] = [
  {
    title:"Snow Radio",slug:"snow-radio",client:"Independent project",industry:"Music & listening",
    services:["website"],coverImage:{src:"/images/work/snow-radio.jpg",alt:"Snow Radio's actual listening-room opening screen",width:1440,height:1000},
    gallery:[],brief:"A listening room that turns the act of choosing music into a place to spend time.",
    approach:"The opening screen introduces the room before asking the visitor to enter. A focused composition gives the listening experience its own atmosphere.",
    build:"A browser-based listening interface with a distinct room-entry state.",
    outcome:"",
    liveUrl:"https://snow-radio.vercel.app",publishedAt:"2026-10-17",timeline:"Independent build",tags:["Digital product","Music"],featured:true,
  },
  {
    title:"Music Time",slug:"music-time",client:"Independent project",industry:"Creative tools",
    services:["website","automation"],coverImage:{src:"/images/work/musictime.jpg",alt:"Music Time's actual audio-to-video workspace before a file is selected",width:1440,height:1000},
    gallery:[],brief:"An audio-to-video workspace for turning a mix into a visual release.",
    approach:"Bring source audio, visual choices and export settings into a single working surface. Keep the controls close to the material they affect.",
    build:"Rendering uses FFmpeg on your own computer. The web interface organizes the mix and visual choices before export.",
    outcome:"",
    liveUrl:"https://musictime-black.vercel.app",publishedAt:"2026-10-17",timeline:"Independent build",tags:["Creative tool","Audio & video"],featured:true,
  },
  {
    title:"CargoPilot",slug:"cargopilot",client:"Independent project",industry:"Website operations",
    services:["website","automation"],coverImage:{src:"/images/work/cargopilot.jpg",alt:"CargoPilot's actual disconnected website-management workspace",width:1440,height:1000},
    gallery:[],brief:"A focused workspace for managing website work through a local connection.",
    approach:"Keep sites, pages and connection status together so the user can understand what is available before taking an action.",
    build:"Website-management actions require the project's local connector. The opening workspace shows connection status before actions become available.",
    outcome:"",
    liveUrl:"https://cargopilot-webmcp.vercel.app",publishedAt:"2026-10-17",timeline:"Independent build",tags:["Operations tool","Interface"],featured:true,
  },
  {
    title:"Son of Juliet",slug:"son-of-juliet",client:"Independent project",industry:"Design & culture",
    services:["website","branding"],coverImage:{src:"/images/work/son-of-juliet-collective.jpg",alt:"Son of Juliet Collective's actual public landing page",width:1440,height:1000},
    gallery:[],brief:"A digital home for a design collective, with a visual language of its own.",
    approach:"Let the identity and work establish the tone. Give the page enough room to introduce the collective without turning the presentation into a long list of claims.",
    build:"A responsive public website for the Son of Juliet Collective.",
    outcome:"",
    liveUrl:"https://sonofjuliet.site",publishedAt:"2026-10-17",timeline:"Independent build",tags:["Website","Visual identity"],featured:false,
  },
];

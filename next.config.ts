import type {NextConfig} from "next";
const nextConfig:NextConfig={
 outputFileTracingRoot:process.cwd(),
 distDir:process.env.NODE_ENV==="development"?".next-dev":".next",
 allowedDevOrigins:["127.0.0.1","localhost"],
 async redirects(){return ["atlas-health-group","northstar-ventures","riverstone-retail","summit-education"].map(slug=>({source:"/work/"+slug,destination:"/work",permanent:true}))}
};
export default nextConfig;

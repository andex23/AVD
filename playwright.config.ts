import {defineConfig} from "@playwright/test";
export default defineConfig({
 testDir:"./tests",timeout:30000,reporter:"list",
 use:{baseURL:"http://127.0.0.1:4416",channel:"chrome",headless:true,trace:"retain-on-failure"},
 projects:[{name:"desktop",use:{viewport:{width:1440,height:1000}}},{name:"mobile",use:{viewport:{width:390,height:1000}}}],
 webServer:{command:"npm run start -- -p 4416 -H 127.0.0.1",url:"http://127.0.0.1:4416",reuseExistingServer:true,timeout:60000}
});

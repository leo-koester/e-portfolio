import {execa} from "execa";
import { existsSync } from "fs";

/**
 * @source https://learnvue.co/articles/deploy-vue-to-github-pages
 * @source https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd
 * @source https://dev.to/the_one/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg
 */

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    //await execa("rm", ["-r", folderName]); // only on linux
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    
    // setTimeout( async ()=>{
    //   try { await execa("rmdir", ["/s /q", folderName]); } catch (e) { console.log( "\nERROR: ", e, "\n" ); }
    // },2000);
    
    console.log("Successfully deployed", "\n\n", "Ensure to delete /dist and /build manually");
    
  } 
  catch (e) {
    console.log("\nSome shit happened: ", e.message, "\n");
  }
})();

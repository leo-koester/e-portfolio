import {execa} from "execa";
import { existsSync } from "fs";

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
    
    try { await execa("del", ["/f /q /s", `${folderName}`]); } catch (e) { console.log( "\nERROR: ", e, "\n" ); }
    try { await execa("rmdir", ["/s /q", folderName]); } catch (e) { console.log( "\nERROR: ", e, "\n" ); }
    
    console.log("Successfully deployed");
  } catch (e) {
    console.log("\nDeu merda: ", e.message, "\n");
  }
})();

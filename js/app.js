// Import the Eleventy API
const { Eleventy } = require("@11ty/eleventy");

(async () => {
  // Create a new Eleventy instance
  let elev = new Eleventy();

  // Set input and output directories
  elev.setInput("src"); // Where your source files are located
  elev.setOutput("_site"); // Where your built site will be outputted

  // Add JavaScript framework integration logic here if needed

  try {
    // Write the site files to the output folder
    await elev.write();
    console.log("Site build complete!");
  } catch (err) {
    console.error("Error during build:", err);
  }
})();

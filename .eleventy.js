module.exports = function(eleventyConfig) {
  // Copy static assets to the final build folder
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    htmlTemplateEngine: "njk", // Tells Eleventy to parse {{ variables }} in HTML files
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
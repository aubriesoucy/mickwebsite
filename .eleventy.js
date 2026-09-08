module.exports = function(eleventyConfig) {
  // Pass through CSS and Images directly to the build root
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
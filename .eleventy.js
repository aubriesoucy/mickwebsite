module.exports = function(eleventyConfig) {
  // Pass through CSS and Images directly to output folder
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    // Treat HTML files as Nunjucks templates so Front Matter and Liquid/Nunjucks syntax process correctly
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
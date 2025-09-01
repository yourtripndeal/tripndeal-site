module.exports = function (eleventyConfig) {
  // ✅ Passthrough copy for images
  eleventyConfig.addPassthroughCopy("src/images");

  // ✅ Passthrough copy for CSS (if needed)
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // ✅ Set input and output directories
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
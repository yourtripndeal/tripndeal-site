module.exports = function(eleventyConfig) {
  // ✅ Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/images/logo.png");

  // ✅ Optional: Watch for changes in styles
  eleventyConfig.setWatchThrottleWaitTime(100);
  eleventyConfig.addWatchTarget("src/styles.css");

  // ✅ Input/output directories
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
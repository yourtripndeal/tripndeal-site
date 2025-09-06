module.exports = function(eleventyConfig) {
  // ✅ Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("src/images/logo.png");
  eleventyConfig.addPassthroughCopy("admin");

  // ✅ Optional: Watch for changes in styles
  eleventyConfig.setWatchThrottleWaitTime(100);
  eleventyConfig.addWatchTarget("src/styles.css");

  // ✅ Define travelPackages collection
  eleventyConfig.addCollection("travelPackages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/packages/*.md");
  });

  // ✅ Input/output directories
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
module.exports = function (config) {
  config.addPassthroughCopy({
    "src/_includes/assets/css/global.css": "./global.css",
  });
  config.addPassthroughCopy("src/images");

  // Custom collections
  const now = new Date();
  const livePosts = (post) => post.date <= now;
  config.addCollection("posts", (collection) => {
    return [
      ...collection.getFilteredByGlob("./src/posts/*.md").filter(livePosts),
    ].reverse();
  });

  config.addFilter("filteredPosts", function (value, limit = 2) {
    value.splice(0, limit);
    return value;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};

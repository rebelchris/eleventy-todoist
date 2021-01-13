module.exports = function (config) {
  // Custom collections
  const now = new Date();
  const livePosts = (post) => post.date <= now;
  config.addCollection("posts", (collection) => {
    return [
      ...collection.getFilteredByGlob("./src/posts/*.md").filter(livePosts),
    ].reverse();
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};

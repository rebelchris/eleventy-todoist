const fs = require("fs"),
  path = require("path");

const walkSync = (dir, filelist) => {
  const files = fs.readdirSync(dir);
  filelist = filelist || {};
  files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + "/", filelist);
    } else {
      const imageURL = dir + file;
      const ext = path.extname(imageURL).toUpperCase();
      if ([".JPG", ".JPEG", ".PNG"].includes(ext)) {
        const usePath = imageURL.replace(process.env.PWD + "/src/images/", "");
        const fullPath = usePath.split("/");
        const directory = fullPath[0],
          file = fullPath[1];
        if (!filelist[directory]) filelist[directory] = [];
        filelist[directory].push(file);
      }
    }
  });
  return filelist;
};

module.exports = walkSync(process.env.PWD + "/src/images/");

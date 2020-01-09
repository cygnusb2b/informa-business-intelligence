
module.exports = (value) => {
  // Replace forward-slashes, spaces, commas, and dashes with underscores
  let v = value.replace(/[\s,-/]/g, '_');
  // Replace special characters (as defined by GAM).
  v = v.replace(/["'=!+#*~;^()[\]<>,.&]/g, '');
  // Replace additional special chars (as defined by Penton PHP code).
  v = v.replace(/[|?“‘’”…{}]/g, '');
  // Replace multiple underscores with one.
  v = v.replace(/_{2,}/g, '_');
  return v.toLowerCase();
};

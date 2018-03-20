const applyRules = require("../util/applyRules");

const defaultNames = {
  fw: "fw",
  "fw:n": "fwn",
  "fw:b": "fwb",
  "fw:br": "fwbr",
  "fw:lr": "fwlr",
  "fs:n": "fsn",
  "fs:i": "fsi",
  "fs:o": "fso",
  "fv:n": "fvn",
  "fv:sc": "fvsc",
  fz: "fz",
  fza: "fza",
  "fza:n": "fzan",
  ff: "ff",
  "ff:s": "ffs",
  "ff:ss": "ffss",
  "ff:c": "ffc",
  "ff:f": "fff",
  "ff:m": "ffm",
  "ff:a": "ffa",
  "ff:t": "fft",
  "ff:v": "ffv",
  "fef:n": "fefn",
  "fef:eg": "fefeg",
  "fef:eb": "fefeb",
  "fef:o": "fefo",
  "fst:n": "fstn",
  "fst:uc": "fstuc",
  "fst:ec": "fstec",
  "fst:c": "fstc",
  "fst:sc": "fstsc",
  "fst:se": "fstse",
  "fst:e": "fste",
  "fst:ee": "fstee",
  "fst:ue": "fstue"
};

const getRules = (names, cfg) => ({
  fw: { n: names["fw"], k: "font-weight", v: cfg.fontWeightValues },
  "fw:n": { n: names["fw:n"], k: "font-weight", v: "normal" },
  "fw:b": { n: names["fw:b"], k: "font-weight", v: "bold" },
  "fw:br": { n: names["fw:br"], k: "font-weight", v: "bolder" },
  "fw:lr": { n: names["fw:lr"], k: "font-weight", v: "lighter" },
  "fs:n": { n: names["fs:n"], k: "font-style", v: "normal" },
  "fs:i": { n: names["fs:i"], k: "font-style", v: "italic" },
  "fs:o": { n: names["fs:o"], k: "font-style", v: "oblique" },
  "fv:n": { n: names["fv:n"], k: "font-variant", v: "normal" },
  "fv:sc": { n: names["fv:sc"], k: "font-variant", v: "small-caps" },
  fz: { n: names["fz"], k: "font-size", v: cfg.fontSizeValues },
  fza: { n: names["fza"], k: "font-size-adjust", v: cfg.fontSizeAdjustValues },
  "fza:n": { n: names["fza:n"], k: "font-size-adjust", v: "none" },
  ff: { n: names["ff"], k: "font-family", v: cfg.fontFamilyValues },
  "ff:s": { n: names["ff:s"], k: "font-family", v: "serif" },
  "ff:ss": { n: names["ff:ss"], k: "font-family", v: "sans-serif" },
  "ff:c": { n: names["ff:c"], k: "font-family", v: "cursive" },
  "ff:f": { n: names["ff:f"], k: "font-family", v: "fantasy" },
  "ff:m": { n: names["ff:m"], k: "font-family", v: "monospace" },
  "ff:a": {
    n: names["ff:a"],
    k: "font-family",
    v: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
  },
  "ff:t": {
    n: names["ff:t"],
    k: "font-family",
    v: '"Times New Roman", Times, Baskerville, Georgia, serif'
  },
  "ff:v": {
    n: names["ff:v"],
    k: "font-family",
    v: "Verdana, Geneva, sans-serif"
  },
  "fef:n": { n: names["fef:n"], k: "font-effect", v: "none" },
  "fef:eg": { n: names["fef:eg"], k: "font-effect", v: "engrave" },
  "fef:eb": { n: names["fef:eb"], k: "font-effect", v: "emboss" },
  "fef:o": { n: names["fef:o"], k: "font-effect", v: "outline" },
  "fst:n": { n: names["fst:n"], k: "font-stretch", v: "normal" },
  "fst:uc": { n: names["fst:uc"], k: "font-stretch", v: "ultra-condensed" },
  "fst:ec": { n: names["fst:ec"], k: "font-stretch", v: "extra-condensed" },
  "fst:c": { n: names["fst:c"], k: "font-stretch", v: "condensed" },
  "fst:sc": { n: names["fst:sc"], k: "font-stretch", v: "semi-condensed" },
  "fst:se": { n: names["fst:se"], k: "font-stretch", v: "semi-expanded" },
  "fst:e": { n: names["fst:e"], k: "font-stretch", v: "expanded" },
  "fst:ee": { n: names["fst:ee"], k: "font-stretch", v: "extra-expanded" },
  "fst:ue": { n: names["fst:ue"], k: "font-stretch", v: "ultra-expanded" }
});

const meta = {
  module: "font"
};

module.exports = config => globalConfig => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta)
  });
};

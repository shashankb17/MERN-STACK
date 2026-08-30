const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const langCode = franc(input);
if (langCode === "und") {
  console.log(
    "SORRY COULDN'T FIGURE IT OUT, TRY WITH SOME MORE SAMPLE TEXTS!!!".red,
  );
} else {
  const language = langs.where("3", langCode);
  console.log(`OUR BEST GUESS IS :${language.name}`.green);
}

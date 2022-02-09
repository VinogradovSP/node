const colors = require("colors");

const args = process.argv.slice(2);
let [min, max] = args.map(Number);

if (min < 0 || max < 0) {
  console.log(colors.red("Одно из чисел не является простым!"));
} else if (isNaN(min) || isNaN(max)) {
  return console.log(
    colors.red("ERROR:"),
    "Одно из значений не является числом"
  );
} else {
  while (min <= max) {
    console.log(colors.green(min));
    min++;
    if (min <= max) {
      console.log(colors.yellow(min));
      min++;
    }
    if (min <= max) {
      console.log(colors.red(min));
      min++;
    }
  }
}

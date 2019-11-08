const url = "https://api.myjson.com/bins/dtcyg";

async function dominantDirection(text) {
  const response = await fetch(url);
  const data = await response.json();
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0), data);
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));

// Helper functions from the chapter

// returns what script a piece of text is using
function characterScript(code, data) {
  for (let script of data) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

// returns the characters that belong to each script
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

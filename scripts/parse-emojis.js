const fs = require("fs");

const input = fs.readFileSync("emoji-test.extended.txt", "utf8");
const lines = input.split("\n");

const symbols = [];
let group = "";
let subgroup = "";

const groupSet = new Set();
const subgroupSet = new Set();
const groups = {};

for (let line of lines) {
  line = line.trim();

  if (line.startsWith("# group:")) {
    group = line.replace("# group:", "").trim();
    groupSet.add(group);
    if (!groups[group]) groups[group] = new Set();
    continue;
  }

  if (line.startsWith("# subgroup:")) {
    subgroup = line.replace("# subgroup:", "").trim();
    subgroupSet.add(subgroup);
    groups[group].add(subgroup);
    continue;
  }

  if (!line || line.startsWith("#")) continue;

  const [codePart, rest] = line.split(";").map(s => s.trim());
  const [qualification, comment] = rest.split("#").map(s => s.trim());

  if (codePart.includes(" ")) continue; // ignore multi-codepoint

  const hex = codePart;
  const symbol = comment.split(" ")[0]; // emoji itself
  const name = comment
    .replace(symbol, "")
    .trim()
    .replace(/^E\d+\.\d+/, "")
    .trim();

  symbols.push({
    id: hex,
    symbol,
    name,
    group,
    subgroup,
  });
}

// build structured groups
const groupArr = Object.entries(groups).map(([g, subs]) => ({
  name: g,
  subgroups: Array.from(subs),
}));

// meta info
const meta = {
  total: symbols.length,
  groups: groupSet.size,
  subGroups: subgroupSet.size,
};

const output = {
  meta,
  groups: groupArr,
  symbols,
};

fs.writeFileSync("emojis.extended.json", JSON.stringify(output, null, 2), "utf8");
console.log("✅ Parsed", meta.total, "emojis across", meta.groups, "groups");

const modules = import.meta.glob("../assets/icons/*.svg", {
  eager: true,
  import: "default",
  query: "?react",
});

const iconMap = {};

for (const path in modules) {
  const fileName = path.split("/").pop().replace(".svg", "");
  iconMap[fileName] = modules[path];
}

export default iconMap;

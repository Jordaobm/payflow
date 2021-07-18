export function transformStringInNumberId(databaseId: string) {
  const binary = databaseId
    .split("")
    .map(function (char) {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");

  let count = 0;

  binary.split(" ").forEach((e) => (count = count + Number(e)));

  return count;
}

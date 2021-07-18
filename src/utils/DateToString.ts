export function DateToString(date: Date) {
  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0");

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

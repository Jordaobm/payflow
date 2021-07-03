export function StringToDate(stringDate: string) {
  const separate = stringDate.split("/");

  const date = new Date(
    Number(separate[2]),
    Number(Number(separate[1]) - 1),
    Number(separate[0])
  );

  return date;
}

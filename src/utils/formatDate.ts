import {format, isAfter} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: string): boolean {
  if (date) {
    const stringDate = date.split(' ');

    const remindDate = stringDate[0].split('/');
    const day = remindDate[0];
    const month = remindDate[1];
    const year = remindDate[2];

    const remindTime = stringDate[1].split(':');
    const hours = `${Number(remindTime[0]) + 3}`;
    const minutes = remindTime[1];

    const parsedDate = new Date(
      `${year}-${month}-${day}T${hours}:${minutes}:00`,
    );
    const actualDate = new Date();
    const compare = isAfter(parsedDate, actualDate);

    return compare;
  }
  return false;
}

export function formatDateForNotifications(date: Date): string {
  const formt = format(date, "d 'de' MMMM 'de' Y HH':'mm", {locale: ptBR});
  return formt;
}

export function dateExpiredReminders(date: string, actualDate: Date) {
  const stringDate = date.split(' ');

  const remindDate = stringDate[0].split('/');
  const day = remindDate[0];
  const month = remindDate[1];
  const year = remindDate[2];

  const remindTime = stringDate[1].split(':');
  const hours = `${Number(remindTime[0]) + 3}`;
  const minutes = remindTime[1];

  const parsedDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);

  if (parsedDate > actualDate) {
    return true;
  }
  return false;
}

export function getFormattedDate(date) {
  return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days) {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate() - days
  );
}

export const generateRandomNumber = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const randomDate = (
  start: number,
  end: number,
  startHour: number,
  endHour: number
) => {
  const date = new Date(+start + Math.random() * (end - start));
  const hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
};

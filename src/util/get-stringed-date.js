export const getStringedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 월과 일이 한 자리 수일 경우 앞에 0을 추가해줍니다.
  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;

  return `${year}-${month}-${date}`;
};

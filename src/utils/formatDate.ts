const formatDate = (date: Date): string => {
  const dt = date.toString().split('T')[0].split('-');
  return `${dt[2]}/${dt[1]}/${dt[0]}`;
};

export default formatDate;

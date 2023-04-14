const getCurrentDateTime = () => {
  const currentDate = new Date();
  const currentDateTime = currentDate.toISOString();
  return currentDateTime;
};

export default getCurrentDateTime;

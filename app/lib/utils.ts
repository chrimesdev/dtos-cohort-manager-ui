export const formatNhsNumber = (nhsNumber: string): string => {
  return nhsNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
};

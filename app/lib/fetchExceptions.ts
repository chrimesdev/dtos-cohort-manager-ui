export default async function fetchExceptions(exceptionId?: number) {
  const apiUrl = exceptionId
    ? `${process.env.EXCEPTIONS_API_URL}/api/GetValidationExceptions?exceptionId=${exceptionId}`
    : `${process.env.EXCEPTIONS_API_URL}/api/GetValidationExceptions`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  return response.json();
}
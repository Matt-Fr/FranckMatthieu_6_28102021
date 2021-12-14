export const api = async () => {
  const response = await fetch("./photographers.json");

  const json = await response.json();

  return json;
};

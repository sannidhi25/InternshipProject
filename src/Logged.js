export const begin = (hai) => {
  localStorage.setItem("who", hai);
  alert(hai + " logged in");
};

export const end = () => {
  const person = localStorage.getItem("who");
  localStorage.setItem("who", "");
  alert(person + " logged out");
};

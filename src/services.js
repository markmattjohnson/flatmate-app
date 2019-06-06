export function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
}

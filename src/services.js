export function getTodos() {
  return fetch("/todos").then(res => res.json());
}

export function getFromLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
}

export function getTodos() {
  return fetch("/todos").then(res => res.json());
}

export function getCartItems() {
  return fetch("/cartItems").then(res => res.json());
}

export function getFromLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

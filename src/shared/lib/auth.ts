import { ChangeEvent } from "react";

export const isValidText = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const text: string = e.target.value;

  if (!text.length) {
    if (!e.target.classList.contains("red-border")) {
      e.target.classList.add("red-border");
    }
    return true;
  }

  if (/[^A-Za-zА-Яа-я-ё\s]/.test(text)) {
    e.target.classList.add("red-border");
    setTimeout(() => {
      e.target.classList.remove("red-border");
    }, 1500);
    return false;
  }

  e.target.classList.remove("red-border");
  return true;
};

export const isValidNumber = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const number: string = e.target.value;

  if (!number.length) {
    if (!e.target.classList.contains("red-border")) {
      e.target.classList.add("red-border");
    }
    return true;
  }

  if (/^\d+$/.test(number)) {
    e.target.classList.remove("red-border");
    return true;
  }

  e.target.classList.add("red-border");
  setTimeout(() => {
    e.target.classList.remove("red-border");
  }, 1500);

  return false;
};

export const isValidPassword = (e: ChangeEvent<HTMLInputElement>) => {
  const text = e.target.value;

  if (!text.length) {
    if (!e.target.classList.contains("red-border")) {
      e.target.classList.add("red-border");
    }
    return true;
  }

  if (/[^A-Za-z1-9@_-\s]/.test(text)) {
    e.target.classList.add("red-border");
    setTimeout(() => {
      e.target.classList.remove("red-border");
    }, 1500);

    return false;
  }

  e.target.classList.remove("red-border");
  return true;
};

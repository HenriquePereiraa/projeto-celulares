export function generateRandomCode() {
  let code = "#";

  for (let i = 0; i < 6; i++) {
    let value = Math.floor(Math.random() * 10);
    code += value.toString();
  }
  return code;
}


export const email = ({ name, email, message }) => {
  return `
    <p>${message}</p>

    <p>From: ${name}</p>
    <p>${email}</p>
  `;
}
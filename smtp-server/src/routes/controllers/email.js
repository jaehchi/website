export const email = ({ name, email, body }) => {
  return `
    <p>${body}</p>

    <p>From: ${name}</p>
    <p>${email}</p>
  `;
}
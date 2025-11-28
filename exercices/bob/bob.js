//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const response = ["Whatever.", "Whoa, chill out!", "Sure.", "Calm down, I know what I'm doing!", "Fine. Be that way!"]
  const trimmedMessage = message.trim();
  const isQuestion = trimmedMessage.endsWith("?");
  const hasLetters = /[A-Z]/.test(trimmedMessage);
  const isShooting = hasLetters && trimmedMessage === trimmedMessage.toUpperCase();

  if (trimmedMessage === "") {
    return response[4];
  }
  if (isShooting && isQuestion) {
    return response[3];
  }
  if (isShooting) {
    return response[1];
  }
  if (isQuestion) {
    return response[2];
  }
  return response[0];

};

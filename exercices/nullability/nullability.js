// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines the text to print on a badge
 *
 * @param {number | null} id id of the employee, or null if they're new hires
 * @param {string} name the name of the employee
 * @param {string | null} department the department or null if they're the owner
 *
 * @returns {string} the text to print on the badge
 */
export function printBadge(id, name, department) {
 
  // Pour id, si c'est null, ca envoie false a la condition grace au !!, donc ca met juste "", si c'est pas false sa met juste le id. Et pour le département, si c'est null, ca renvoie true grace au simple ! donc ca retourne "OWNER" sinon "MARKETING"
  
  const prefix = !!id ? `[${id}] ` : "";
  const dept = !department ? "OWNER" : "MARKETING";
  
  return `${prefix}${name} - ${dept}`;
}

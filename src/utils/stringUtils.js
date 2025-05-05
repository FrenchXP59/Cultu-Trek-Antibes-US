// src/utils/stringUtils.js

/**
 * Normalize a string: lowercase, strip accents, remove punctuation,
 * remove common French & English articles, and collapse multiple spaces.
 */
export function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")          // Remove accents
    .replace(/[^\w\s]/g, "")                  // Remove punctuation
    .replace(/\b(d['’])/g, "")                // Remove French elisions (d', d’)
    .replace(/\b(le|la|les|l['’]|un|une|des|the|a|an)\b/g, "")  // Remove FR & EN articles
    .replace(/\s+/g, " ")                     // Collapse multiple spaces
    .trim();
}

/**
 * Check if the user’s answer matches one of the valid answers,
 * allowing for a mapping of exceptions or synonyms.
 *
 * @param {string} userAnswer     – the string entered by the user
 * @param {string[]} validAnswers – array of acceptable answers
 * @returns {boolean}
 */
export function isCorrectAnswer(userAnswer, validAnswers) {
  const normalizedUserAnswer = normalizeString(userAnswer);

  // Map of common typos or synonym mappings
  const exceptionMapping = {
    "louis 18":       "louis xviii",
    "b pages":        "bernard pages",
    "pages":          "bernard pages",
    // add more variants here if needed
  };

  const finalAnswer = exceptionMapping[normalizedUserAnswer] || normalizedUserAnswer;

  return validAnswers.some(
    (answer) => normalizeString(answer) === finalAnswer
  );
}
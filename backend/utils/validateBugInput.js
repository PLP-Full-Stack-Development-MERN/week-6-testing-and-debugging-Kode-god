const validateBugInput = (input) => {
  if (!input.title || !input.description) {
    return false;
  }
  return true;
};

module.exports = validateBugInput;
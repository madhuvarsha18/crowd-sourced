const calculateSeverity = (upvotes) => {
  if (upvotes >= 20) return "High";
  if (upvotes >= 10) return "Medium";
  return "Low";
};

module.exports = calculateSeverity;

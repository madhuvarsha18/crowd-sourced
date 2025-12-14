exports.getLeaderboard = async (req, res) => {
  const clubs = await User.find({ role: "club" })
    .select("name credits")
    .sort({ credits: -1 });

  res.json(clubs);
};

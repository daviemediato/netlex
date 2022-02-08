const { Router } = require("express");
const routes = new Router();
const User = require("../models/user");
require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

routes.post(`/users/login`, async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email, password: req.body.password },
  });

  if (!user) res.status(401).send({ message: 'Falha Login' });

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.SECRET,
    {
      expiresIn: 3600,
    }
  );

  res.send({
    user: user,
    token: token,
  });
});

module.exports = routes;

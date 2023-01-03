const axios = require("axios");
const { User } = require("../db");
const nullUser = {
  id: 0,
  isAdmin: false,
  isActive: false,
  email: "",
  hashedPassword: "",
  names: "",
  lastNames: "",
  nationality: "",
  birthday: "",
  lastConnection: "",
};
const repeatedEmail = async (email) => {
  try {
    let foundEmail = await User.findAll({ where: { email: email } }); //busca los paises
    return foundEmail;
  } catch (error) {
    console.log("El error controllers user repeatedEmail es:", error.message);
    res
      .status(401)
      .send("El error controllers user repeatedEmail es:", error.message);
  }
};

const postUser = async (bodyInfo) => {
  try {
    const createdUser = await User.create(bodyInfo);
    return createdUser.dataValues;
  } catch (error) {
    console.log("El error controllers user postUser es:", error.message);
    res
      .status(401)
      .send("El error controllers user postUser es:", error.message);
  }
};
const getUserByEmail = async (email) => {
  try {
    console.log("before userFound");
    const userFound = await User.findOne({
      where: { email: email },
    });
    console.log("userFound", userFound);
    if (userFound !== null) {
      return userFound.dataValues;
    } else {
      return nullUser;
    }
  } catch (error) {
    console.log("El error controllers user getUserByEmail es:", error.message);
    res
      .status(401)
      .send("El error controllers user getUserByEmail es:", error.message);
  }
};

module.exports = { postUser, repeatedEmail, getUserByEmail };

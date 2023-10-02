import bcrypt from "bcryptjs";

const users = [
  {
    username: "Beetech",
    fullname: "Bright Eyo",
    email: "brighteyo@ymail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    username: "shaggy",
    fullname: "emmanuel Joe",
    email: "joeeydick@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },

  {
    username: "freeman",
    fullname: "Freeman Joe",
    email: "freemandick@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];


export default users;
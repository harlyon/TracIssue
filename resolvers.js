const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;

  return jwt.sign(
    {
      username,
      email
    },
    secret,
    { expiresIn }
  );
};

exports.resolvers = {
  Query: {
    getIssues: async (root, args, { Issue }) => {
      const getIssues = await Issue.find().sort({ createdDate: "desc" });
      return getIssues;
    },
    getIssue: async (root, { _id }, { Issue }) => {
      const issue = await Issue.findOne({ _id });
      return issue;
    },
    getEmployees: async(root, args, { Employee }) => {
      const getEmployees = await Employee.find().sort({ createdDate: "desc" });
      return getEmployees
    },
    getEmployee: async (root, { _id }, { Employee }) => {
      const employee = await Employee.findOne({ _id });
      return employee;
    },
    searchEmployees: async (root, { searchTerm }, { Employee }) => {
      if (searchTerm) {
        const searchResults = await Employee.find(
          {
            $text: { $search: searchTerm }
          },
          {
            score: { $meta: "textScore" }
          }
        ).sort({
          score: { $meta: "textScore" }
        });
        return searchResults;
      } else {
        const employee = await Employee.find().sort({
          likes: "desc",
          createdDate: "desc"
        });
        return employee;
      }
    },
    searchIssues: async (root, { searchTerm }, { Issue }) => {
      if (searchTerm) {
        const searchResults = await Issue.find(
          {
            $text: { $search: searchTerm }
          },
          {
            score: { $meta: "textScore" }
          }
        ).sort({
          score: { $meta: "textScore" }
        });
        return searchResults;
      } else {
        const issue = await Issue.find().sort({
          likes: "desc",
          createdDate: "desc"
        });
        return issue;
      }
    },
  },

  Mutation : {
    addIssue: async (
      root,
      {
        title,
        description,
        reportedBy,
        assignedTo,
        priority,
        createdDate
      },
      { Issue }
    ) => {
      const newIssue = await new Issue({
        title,
        description,
        reportedBy,
        assignedTo,
        priority,
        createdDate
      }).save();
      return newIssue;
    },

    addEmployee: async (
      root,
      {
        firstname,
        lastname,
        email,
        position
      },
      { Employee }
    ) => {
      const newEmployee = await new Employee({
        firstname,
        lastname,
        email,
        position
      }).save();
      return newEmployee
    },

    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username: username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      const user = await User.findOne({ username: username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};
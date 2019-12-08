exports.typeDefs = `
type Employee {
  id: ID!
  firstname: String!
  lastname: String!
  email: String!
  position: String!
}
type Issue {
  id: ID!
  title: String!
  description: String!
  reportedBy: String!
  assignedTo: String!
  priority: String!
  createdDate: String!
}
type User {
  id: ID!
  username: String!
  password: String!
  email: String!
  joinDate: String
}
type Query {
  getIssues: [Issue]
  getIssue(_id: ID!): Issue
  getEmployees: [Employee]
  getEmployee(_id: ID!): Employee
  searchEmployees(searchTerm: String!) : [Employee]
  searchIssues(searchTerm: String!) : [Issue]
}
type Token {
  token: String!
}
type Mutation {
  addIssue(
    title: String!
    description: String!
    reportedBy: String!
    assignedTo: String!
    priority: String!
    createdDate: String!
  ): Issue
  deleteIssue(_id: ID): Issue
  updateIssue(
    _id: ID!
    title: String!
    description: String!
    reportedBy: String!
    assignedTo: String!
    priority: String!
    createdDate: String!
  ): Issue
  addEmployee(
    firstname: String!
    lastname: String!
    email: String!
    position: String!
  ): Employee
  deleteEmployee(_id: ID): Employee
  updateEmployee(
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    position: String!
  ) : Employee
  signinUser(
    username: String!
    password: String!
  ) : Token
  signupUser(
    username: String!
    email: String!
    password: String!
  ) : Token
}
`;
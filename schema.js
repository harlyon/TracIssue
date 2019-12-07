exports.typeDefs = `
type Employee {
  _id: ID!
  firstname: String!
  lastname: String!
  email: String!
  position: String!
}
type Issue {
  _id: ID!
  title: String!
  description: String!
  reportedBy: String!
  assignedTo: String!
  priority: String!
  createdDate: String!
}
type User {
  _id: ID!
  username: String! #@unique
  password: String!
  email: String!
  joinDate: String
}
type Token {
  token: String!
}
signinUser(username: String!, password: String!): Token
signupUser(username: String!, email: String!, password: String!): Token
type Query {
  getIssues: [Issue]
  getEmployees: [Employee]
  searchEmployee(searchTerm: String : [Employee])
  searchIssues(searchTerm: String : [Issue])
}
typeMutation {
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
  )
}
`;
the files from 05 show state at the beginning of video 5.

prisma --help
prima deploy --help

in the prisma playground  control space brings up options

# Write your query or mutation here
query {
  users {
    id
    name
  }
}




mutation{
  createUser(data: {
    name: "joey tribiani"
    email:"j@hotmail.com"
  }){
    name
    email
  }
}
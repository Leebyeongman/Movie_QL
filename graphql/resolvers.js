const byeongman = {
    name: "Byeongman",
    age: 24,
    gender: "male"
};

const resolvers = {
  Query: {
    person: () => byeongman
  }
};

 export default resolvers;
const { GraphQLScalarType, Kind } = require("graphql");

const categoryResolver = require("./category");
const subCategoryResolver = require("./subCategory");
const topicResolver = require("./topic");
const weatherResolver = require("./weather");
const cityResolver = require("./city");

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});

const customDateScalarResolver = {
  Date: dateScalar,
};

module.exports = [
  customDateScalarResolver,
  categoryResolver,
  subCategoryResolver,
  topicResolver,
  weatherResolver,
  cityResolver,
];

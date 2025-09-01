"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateScalarResolver = void 0;
const graphql_1 = require("graphql");
const dateScalar = new graphql_1.GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    serialize(value) {
        if (value instanceof Date) {
            return value.getTime();
        }
        throw Error("GraphQL Date Scalar serializer expected a `Date` object");
    },
    parseValue(value) {
        if (typeof value === "number") {
            return new Date(value);
        }
        throw new Error("GraphQL Date Scalar parser expected a `number`");
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.INT) {
            return new Date(parseInt(ast.value, 10));
        }
        return null;
    },
});
exports.dateScalarResolver = {
    Date: dateScalar,
};
//# sourceMappingURL=dateScaler.js.map
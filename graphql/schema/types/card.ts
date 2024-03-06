const cardTypes = `
    type Card {
        _id: String!
        name: String!
        description: String!
    }
`;

const cardInput = `
    input CardInput {
        name: String!
        description: String
    }
`;

export default `${cardTypes}${cardInput}`;

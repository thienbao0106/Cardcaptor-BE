const cardTypes = `
    type Card {
        _id: String!
        name: String!
        description: String!
        created_at: Int!
        updated_at: Int!
    }
`;

const cardInput = `
    input CardInput {
        name: String!
        description: String!
    }
`;

const cardUpdateInput = `
    input CardUpdateInput {
        name: String
        description: String
    }
`;

export default `${cardTypes}${cardInput}${cardUpdateInput}`;

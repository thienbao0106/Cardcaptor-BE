const characterTypes = `
    type Character {
        _id: String!
        name: String!
        description: String!
        personality: String!
        created_at: Int!
        updated_at: Int!
    }
`;

const characterInput = `
    input CharacterInput {
        name: String!
        description: String!
    }
`;

const characterUpdateInput = `
    input CharacterUpdateInput {
        name: String
        description: String
    }
`;

export default `${characterInput}${characterTypes}${characterUpdateInput}`;

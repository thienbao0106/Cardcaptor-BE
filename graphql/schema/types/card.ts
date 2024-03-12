const cardTypes = `
    type Appear {
        anime: String!
        manga: String!
    }

    type Appears {
        captured: Appear!
        transformed: Appear!
    }

    type Skill {
        name: String!
        description: String!
    }

    type Card {
        _id: String!
        name: String!
        description: String!
        created_at: Int!
        updated_at: Int!
        skills: [Skill!]
        appears: Appears
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

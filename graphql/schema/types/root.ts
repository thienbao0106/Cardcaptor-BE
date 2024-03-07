const rootQueryType: String = `
    type RootQuery {
        cards: [Card]
    }
    type RootMutation {
        addCard(cardInput: CardInput): Card
        scrapData(url: String!): Boolean
    }

    
`;
const rootMutationType: String = `
`;

export default `${rootQueryType}${rootMutationType}`;

const rootQueryType: String = `
    type RootQuery {
        cards(keyword: String): [Card]
        searchCardById(id: String!): Card
        
    }
    type RootMutation {
        addCard(cardInput: CardInput!): Card
        scrapData(url: String!): Card
        deleteCard(id: String!): Boolean
        updateCard(updatedCard: CardUpdateInput!, id: String!): Card
    }

    
`;
const rootMutationType: String = `
`;

export default `${rootQueryType}${rootMutationType}`;

const rootQueryType: String = `
    type RootQuery {
        cards(keyword: String): [Card]
        characters(keyword: String): [Character]
        searchCardById(id: String!): Card
        
    }
    type RootMutation {
        addCard(cardInput: CardInput!): Card
        scrapCardData(url: String!): Card
        deleteCard(id: String!): Boolean
        updateCard(updatedCard: CardUpdateInput!, id: String!): Card

        scrapCharacterData(url: String!): Character
    }

    
`;
const rootMutationType: String = `
`;

export default `${rootQueryType}${rootMutationType}`;

const rootQueryType: String = `
    type RootQuery {
        cards: [Card]
    }
    type RootMutation {
        addCard(cardInput: CardInput): Card
    }

    
`;
const rootMutationType: String = `
`;

export default `${rootQueryType}${rootMutationType}`;

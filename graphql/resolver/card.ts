import { transformCard } from "../../utils/card";
import Card from "../../models/card";

export const cardResolvers = {
  cards: async () => {
    try {
      const result = await Card.find();
      return result.map((card: any) => {
        return transformCard(card);
      });
    } catch (error) {
      throw error;
    }
  },
  addCard: async (arg: any) => {
    try {
      const { name, description } = arg.cardInput;
      console.log(name);
      const card = new Card({ name, description });
      await card.save();
      return transformCard(card);
    } catch (error) {
      throw error;
    }
  },
};

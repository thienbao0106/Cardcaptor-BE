import { transformCard } from "../../utils/card";
import Card from "../../models/card";
import { scarpWiki } from "../../utils/scarpData";

export const cardResolvers = {
  cards: async ({ keyword }: any) => {
    const pattern = new RegExp(keyword || "", "i");
    try {
      const result = await Card.find({
        name: {
          $regex: pattern,
        },
      });
      console.log(result);
      return result.map((card: any) => {
        return transformCard(card);
      });
    } catch (error) {
      throw error;
    }
  },
  addCard: async (arg: any) => {
    try {
      const date = Date.parse(new Date().toLocaleString());
      const { name, description } = arg.cardInput;
      console.log(name);
      const card = new Card({
        name,
        description,
        created_at: date,
        updated_at: date,
      });
      await card.save();
      return transformCard(card);
    } catch (error) {
      throw error;
    }
  },
  searchCardById: async ({ id }: any) => {
    try {
      const result = await Card.findById(id);
      if (!result) throw new Error("Can't find this card!");
      return transformCard(result);
    } catch (error) {
      throw error;
    }
  },
  deleteCard: async ({ id }: any) => {
    try {
      const result = await Card.findByIdAndDelete(id);
      if (!result) throw new Error("Can't delete this card!");
    } catch (error) {
      throw error;
    }
  },
  updateCard: async ({ updatedCard, id }: any) => {
    try {
      if (Object.keys(updatedCard).length <= 0)
        throw new Error("Can't update with empty data");
      const date = Date.parse(new Date().toLocaleString());
      const result = await Card.findByIdAndUpdate(id, {
        ...updatedCard,
        updated_at: date,
      });
      return transformCard(result);
    } catch (error) {
      throw error;
    }
  },
  scrapData: async ({ url }: any) => {
    try {
      const date = Date.parse(new Date().toLocaleString());
      const { name, description } = await scarpWiki(url);
      const card = new Card({
        name,
        description,
        created_at: date,
        updated_at: date,
      });
      await card.save();
      return transformCard(card);
    } catch (error) {
      throw error;
    }
  },
};

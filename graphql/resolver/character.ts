import Character from "../../models/character";
import { scrapCharacterData } from "../../utils/character";
import { transferModel } from "../../utils/transform";

export const characterResolver = {
  characters: async ({ keyword }: any) => {
    const pattern = new RegExp(keyword || "", "i");
    try {
      const result = await Character.find({
        name: {
          $regex: pattern,
        },
      });
      console.log(result);
      return result.map((card: any) => {
        return transferModel(card);
      });
    } catch (error) {
      throw error;
    }
  },
  scrapCharacterData: async ({ url }: any) => {
    try {
      const date = Date.parse(new Date().toLocaleString());
      const { description, name, personality } = await scrapCharacterData(url);
      const character = new Character({
        description,
        name,
        personality,
        created_at: date,
        updated_at: date,
      });
      await character.save();
      return transferModel(character);
    } catch (error) {
      throw error;
    }
  },
};

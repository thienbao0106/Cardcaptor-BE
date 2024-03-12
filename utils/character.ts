import puppeteer from "puppeteer";
import { Character } from "../types/character";

export const scrapCharacterData = async (url: string): Promise<Character> => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
    const page = await browser.newPage();
    // On this new page:
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });
    const data = await page.evaluate(() => {
      //Getting Data
      const name = document.querySelector(".mw-page-title-main")?.textContent;
      const description = document.querySelectorAll(".mw-parser-output > p")[0]
        .textContent;
      const personality: any =
        document.querySelector("[align='right']")?.nextElementSibling
          ?.textContent;
      console.log(personality);
      if (!name || !description || !personality)
        throw new Error("Can't find this data");
      console.log(personality);
      const result: Character = {
        name: name || "",
        description: description?.replace("\n", "") || "",
        personality: personality?.replace("\n", ""),
      };
      return result;
    });
    await browser.close();
    return data;
  } catch (error) {
    throw error;
  }
};

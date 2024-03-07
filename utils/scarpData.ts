import puppeteer from "puppeteer";

export const scarpWiki = async (url: string) => {
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
      //Getting data
      const title = document.querySelector(".mw-page-title-main");
      const description = document.querySelectorAll(".mw-parser-output > p")[0];
      const appears = document.querySelectorAll(".infobox > tbody > tr");
      // Select all h2 element
      const headerElements = document.querySelectorAll("h2");
      let skills = [];
      if (!title || !description || !appears || !headerElements)
        throw new Error("Can't handle this url");

      //Handle appears data
      const filterAppears = [...appears].slice(-4).map((item: any) => {
        return item.textContent.split("\n")[3];
      });

      // Iterate over each h2 element
      for (let i = 0; i < headerElements.length; i++) {
        let header: any = headerElements[i];
        // Check if the h2 element contains a span with the specific ID
        let specificSpan1 = header.querySelector("span#Magic_and_Abilities");
        if (specificSpan1 !== null) {
          // If the specific span is found, log the text content of the h2 and break the loop
          while (header.nextElementSibling) {
            // If the sibling is a paragraph, log its text content
            if (header.nextElementSibling.tagName === "P") {
              const data = header.nextElementSibling.textContent.split(":");
              skills.push({
                name: data[0],
                description: data[1],
              });
              // Move to the next sibling
              header = header.nextElementSibling;
            } else {
              break;
            }
          }
          break;
        }
      }

      return {
        title: title.textContent,
        description: description.textContent?.replace("\n", ""),
        skills,
        appears: {
          captured: {
            anime: filterAppears[0],
            manga: filterAppears[1],
          },
          transformed: {
            anime: filterAppears[2],
            manga: filterAppears[3],
          },
        },
      };
    });
    await browser.close();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

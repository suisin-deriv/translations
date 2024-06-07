import { ALL_LANGUAGES } from "../constants";
import { getAllowedLanguages } from "../lang-utils";

describe("getAllowedLanguages", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ACH, ...languageList } = ALL_LANGUAGES;

  it("should return all languages if no excluded languages are provided", () => {
    const allowedLanguages = getAllowedLanguages();
    expect(allowedLanguages).toEqual(languageList);
  });

  it("should return all languages except the excluded languages (ex: ID)", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ID, ...filteredLanguages } = languageList;
    const allowedLanguages = getAllowedLanguages(["ID"]);
    expect(allowedLanguages).toEqual(filteredLanguages);
  });
});

import Papa from "papaparse";

export const parseCsv = async (csvFilePath) => {
  try {
    const response = await fetch(csvFilePath);
    const csvText = await response.text();
    const { data } = Papa.parse(csvText, { header: true });
    return data;
  } catch (error) {
    console.error("Error parsing CSV:", error);
    return [];
  }
};

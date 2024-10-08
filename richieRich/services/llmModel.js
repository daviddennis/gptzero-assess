const fs = require("fs");
const yaml = require("js-yaml");

// Batch words, lower timeout
const getModelResponseGenerator = async function* (prompt) {
  try {
    const choice = getMockData(prompt);
    const words = choice.split(" ");
    const chunkSize = 10;
    let index = 0;

    while (index < words.length) {
      const chunk = words.slice(index, index + chunkSize).join(" ") + " ";
      index += chunkSize;

      await new Promise((resolve) => setTimeout(resolve, 5));
      yield chunk;
    }
  } catch (error) {
    console.error(error);
  }
};


const getMockData = (prompt) => {
  const mockData = yaml.load(fs.readFileSync("mockData.yaml", "utf8"));
  const responses = mockData.responses;
  const index = prompt ? prompt.length % responses.length : 0;
  const choice = responses[index];

  return choice;
};

module.exports = { getModelResponseGenerator };

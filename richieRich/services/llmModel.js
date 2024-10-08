const fs = require("fs");
const yaml = require("js-yaml");

const getModelResponseGenerator = async function* (prompt) {
  try {
    const choice = getMockData(prompt);
    yield choice;
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

module.exports = { getModelResponse, getModelResponseGenerator };

import OpenAI from "openai";
// Currently used geminiAPI
const openai = new OpenAI({
  apiKey: '',
  dangerouslyAllowBrowser: true,
});

export default openai;
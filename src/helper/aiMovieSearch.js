import { API_OPTIONS } from "../utils/constants";
import model from "../utils/genAI";
import getMoviesWithName from "./getMoviesWithName";

const aiMovieSearch = async (inputText) => {
  // For text-only input, use the gemini-pro model
  const prompt = `Give me the five names of movies which has match the given genres : ${inputText}. Give the output in string format which is space seprated.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  const text = response.text();
  const array = text.split(", ");

  const promiseList = array.map((name) => getMoviesWithName(name));

  const data = await Promise.all(promiseList);

  // console.log(finalResult);
  const finalResult = data.map((list,index)=>{
    return {
      title:array[index],
      list:list
    }
  })
  return finalResult;

};
export default aiMovieSearch;

import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import readline from "readline";



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter:", async (prompt) => {
  const { text } = await generateText({
    model: groq('llama-3.3-70b-versatile'),
    prompt: prompt,
  });

 console.log(text);

  rl.close();
})


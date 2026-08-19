import { Groq } from "@llamaindex/groq";
import { HuggingFaceEmbedding } from "@llamaindex/huggingface";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";

const llm = new Groq({
  model: "llama-3.3-70b-versatile",
});

const embedModel = new HuggingFaceEmbedding({
  modelType: "BAAI/bge-small-en-v1.5",
});

console.log("LLM and embedding model configured.");

const reader = new SimpleDirectoryReader();

const documents = await reader.loadData({
  directoryPath: "data",
});

console.log(documents);
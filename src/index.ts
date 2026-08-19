import { Groq } from "@llamaindex/groq";
import { HuggingFaceEmbedding } from "@llamaindex/huggingface";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import { Settings, VectorStoreIndex } from "llamaindex";

const llm = new Groq({
  model: "openai/gpt-oss-120b",
});

const embedModel = new HuggingFaceEmbedding({
  modelType: "BAAI/bge-small-en-v1.5",
});

Settings.embedModel = embedModel

Settings.llm = llm

console.log("LLM and embedding model configured.");

const reader = new SimpleDirectoryReader();

const documents = await reader.loadData({
  directoryPath: "data",
});

const index = await VectorStoreIndex.fromDocuments(documents); 

const queryEngine = index.asQueryEngine();


const response = await queryEngine.query({
  query: "What is Strapi and how can it be used with React?",
});

console.log(response.toString());
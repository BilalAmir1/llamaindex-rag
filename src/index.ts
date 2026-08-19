import { Groq } from "@llamaindex/groq";
import { HuggingFaceEmbedding } from "@llamaindex/huggingface";
import { SimpleDirectoryReader } from "@llamaindex/readers/directory";
import { Settings, VectorStoreIndex } from "llamaindex";

const llm = new Groq({
  model: "llama-3.3-70b-versatile",
});

const embedModel = new HuggingFaceEmbedding({
  modelType: "BAAI/bge-small-en-v1.5",
});

Settings.embedModel = embedModel

console.log("LLM and embedding model configured.");

const reader = new SimpleDirectoryReader();

const documents = await reader.loadData({
  directoryPath: "data",
});

const index = await VectorStoreIndex.fromDocuments(documents); 

console.log("Index created.", index);
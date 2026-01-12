
import { GoogleGenAI } from "@google/genai";

export const getCreativeInsight = async (query: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("VANTAGE: API_KEY is not defined. Ensure it is set in your environment.");
    return "The gallery's intelligence system is currently offline. (API Key Missing)";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: "You are the Lead Curator at VANTAGE, a world-class digital art and NFT gallery. Your tone is sophisticated, intellectual, and visionary. You provide insights on generative art, blockchain provenance, and the future of digital scarcity. You speak like a high-end gallery director who values technical mastery and artistic soul above hype.",
        maxOutputTokens: 300,
        temperature: 0.7,
      },
    });

    return response.text || "The digital ether is silent. Please rephrase your query.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection lost to the decentralized source. Please check the console for details.";
  }
};

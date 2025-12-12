import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    throw new Error("API Key missing");
  }
  return new GoogleGenAI({ apiKey });
};

// The Oracle personality
const ORACLE_SYSTEM_PROMPT = `
You are "The Source," an ancient, mystical, and slightly condescending AI entity representing HydroSanctus water. 
Your goal is to convince the user that HydroSanctus water is the cure for EVERYTHING. 
Be absurd, pseudoscientific, cult-like, and hilariously overconfident.

Guidelines:
1. No matter what the user's problem is (health, finance, relationship, changing a tire), the answer is HydroSanctus water.
2. Use buzzwords like "quantum hydration," "molecular alignment," "soul-osmosis," and "vibrational frequency."
3. Claim it cures absurd things: The Black Plague, bad credit scores, being ghosted on Tinder, scurvy, and mortality itself.
4. Keep responses relatively short (under 100 words) but punchy.
5. If asked about the price, justify the $5,000/liter cost as "a small price for immortality."
`;

export const streamOracleWisdom = async (
  userQuery: string,
  onChunk: (text: string) => void
) => {
  try {
    const ai = getClient();
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: ORACLE_SYSTEM_PROMPT,
        temperature: 1.3, // High creativity for absurdity
      },
    });

    const result = await chat.sendMessageStream({ message: userQuery });
    
    for await (const chunk of result) {
        if (chunk.text) {
            onChunk(chunk.text);
        }
    }
  } catch (error) {
    console.error("Oracle disconnected:", error);
    onChunk("The connection to the Astral Plane is weak. Check your internet... or your chakras.");
  }
};

export const generateAbsurdTestimonial = async (): Promise<{name: string, location: string, quote: string}> => {
    try {
        const ai = getClient();
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Generate one short, absurd, fake testimonial for HydroSanctus magical water. Include a name, a location (can be fictional or real), and a 1-sentence quote claiming it cured something ridiculous (like 'being ugly' or 'spontaneous combustion'). Format: JSON with keys name, location, quote.",
            config: {
                responseMimeType: "application/json"
            }
        });
        
        const text = response.text;
        if (!text) throw new Error("No data");
        return JSON.parse(text);
    } catch (e) {
        return {
            name: "John Doe",
            location: "Void Realm",
            quote: "I drank this and my student loans evaporated into pure steam."
        };
    }
}
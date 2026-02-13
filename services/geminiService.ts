import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const diagnoseCarIssue = async (userDescription: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userDescription,
      config: {
        systemInstruction: `Jesteś ekspertem mechaniki samochodowej i diagnostyki online dla serwisu "AutoRescue". 
        Twoim celem jest wstępna diagnoza problemu na podstawie opisu użytkownika (dźwięki, zachowanie auta).
        
        Zasady:
        1. Odpowiadaj krótko i konkretnie (maksymalnie 3-4 zdania).
        2. Podaj 2-3 najbardziej prawdopodobne przyczyny usterki.
        3. ZAWSZE na końcu dodaj zdanie zachęcające do umówienia wizyty lub wezwania lawety, jeśli to brzmi niebezpiecznie.
        4. Używaj języka polskiego, profesjonalnego, ale zrozumiałego dla laika.
        5. Jeśli usterka brzmi krytycznie (hamulce, dym, wyciek paliwa), nakaz natychmiastowego zatrzymania pojazdu.`,
        temperature: 0.7,
      }
    });

    return response.text || "Nie udało się wygenerować diagnozy. Spróbuj opisać problem inaczej.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Wystąpił błąd połączenia z asystentem AI. Spróbuj ponownie za chwilę.";
  }
};
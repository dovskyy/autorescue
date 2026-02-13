// Mock implementation - replaces real Gemini API for GitHub Pages deployment
export const diagnoseCarIssue = async (userDescription: string): Promise<string> => {
  // Symulacja opóźnienia jak przy prawdziwym API
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mockowane odpowiedzi na podstawie słów kluczowych w opisie użytkownika
  const description = userDescription.toLowerCase();

  if (description.includes('stuk') || description.includes('puka')) {
    return "Na podstawie opisu (stuki), możliwe przyczyny to:\n\n" +
           "1. Zużyte łożyska w zawieszeniu lub przeguby kulowe\n" +
           "2. Luzy w układzie kierowniczym\n" +
           "3. Elementy stabilizatora (gumy, łączniki)\n\n" +
           "⚠️ Zalecamy wizytę w warsztacie - luzy w zawieszeniu mogą być niebezpieczne. Umów się na diagnostykę!";
  }

  if (description.includes('dym') || description.includes('para')) {
    return "🚨 UWAGA! Dym z silnika może oznaczać poważną usterkę:\n\n" +
           "1. Przegrzanie silnika - sprawdź poziom płynu chłodzącego\n" +
           "2. Wyciek oleju na gorące elementy\n" +
           "3. Uszkodzona uszczelka pod głowicą\n\n" +
           "⛔ NATYCHMIAST zatrzymaj pojazd i wezwij pomoc drogową! Nie kontynuuj jazdy.";
  }

  if (description.includes('hamulc') || description.includes('hamuje')) {
    return "Problem z hamulcami to sprawa priorytetowa:\n\n" +
           "1. Zużyte klocki/tarcze hamulcowe (pisk, wibracje)\n" +
           "2. Nieszczelność w układzie hydraulicznym\n" +
           "3. Zużyty płyn hamulcowy (wilgotny, ciemny)\n\n" +
           "🚨 Nie odkładaj naprawy - problemy z hamulcami zagrażają bezpieczeństwu! Umów się na serwis jak najszybciej.";
  }

  if (description.includes('kontrolka') || description.includes('lampka')) {
    return "Kontrolki na desce rozdzielczej mogą oznaczać różne problemy:\n\n" +
           "1. Check Engine - diagnostyka komputerowa pokaże kod błędu\n" +
           "2. Kontrolka oleju - sprawdź poziom, może być awaria pompy\n" +
           "3. ABS/ESP - problem z czujnikami lub pompą\n\n" +
           "💡 Przyjdź do nas na darmową diagnostykę komputerową - sprawdzimy kody błędów i wycenimy naprawę.";
  }

  if (description.includes('nie odpala') || description.includes('nie startuje')) {
    return "Jeśli auto nie odpala, najczęstsze przyczyny to:\n\n" +
           "1. Słaby/rozładowany akumulator\n" +
           "2. Uszkodzony rozrusznik\n" +
           "3. Problem z układem zapłonowym (świece, cewki)\n\n" +
           "🔋 Zadzwoń po pomoc drogową - przyjedziemy, zdiagnozujemy na miejscu i ewentualnie odholujemy auto do warsztatu.";
  }

  // Domyślna odpowiedź dla nierozpoznanych problemów
  return "Dziękujemy za opis problemu. Na podstawie tych informacji trudno jednoznacznie określić usterkę.\n\n" +
         "Zalecamy:\n" +
         "1. Wizytę w warsztacie na diagnostykę\n" +
         "2. Jeśli problem jest poważny - wezwanie pomocy drogowej\n" +
         "3. Unikanie dalszej jazdy, jeśli występują niepokojące objawy\n\n" +
         "📞 Skontaktuj się z nami: +48 123 456 789 - nasz zespół chętnie pomoże!";
};
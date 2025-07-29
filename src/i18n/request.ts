import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  // Get headers to access Accept-Language
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  
  // Define supported locales
  const supportedLocales = ["en", "es"];
  const defaultLocale = "en";
  
  // Parse Accept-Language header and find the best match
  const getPreferredLocale = (acceptLanguage: string): string => {
    if (!acceptLanguage) return defaultLocale;
    
    // Parse Accept-Language header (e.g., "es-ES,es;q=0.9,en;q=0.8")
    const languages = acceptLanguage
      .split(",")
      .map(lang => {
        const [language, quality = "1"] = lang.trim().split(";q=");
        return {
          language: language.split("-")[0], // Get base language (es, en)
          quality: parseFloat(quality)
        };
      })
      .sort((a, b) => b.quality - a.quality); // Sort by quality
    
    // Find the first supported locale
    for (const lang of languages) {
      if (supportedLocales.includes(lang.language)) {
        return lang.language;
      }
    }
    
    return defaultLocale;
  };
  
  const locale = getPreferredLocale(acceptLanguage);
 
  return {
    locale,
    messages: (await import(`../../dictionaries/${locale}.json`)).default
  };
});
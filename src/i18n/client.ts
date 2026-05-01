import i18next from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect } from "react";
import { getOptions, languages, fallbackLng } from "./settings";

const runsOnServerSide = typeof window === "undefined";


const getInitialLanguage = () => {
  if (typeof window === "undefined") return undefined;
  
  const match = document.cookie.match(/i18next=([^;]+)/);
  if (match) return match[1];

  const path = window.location.pathname;
  const localeMatch = path.match(/^\/(en|id|ar|ms|zh)(\/|$)/);
  if (localeMatch) return localeMatch[1];
  
  return fallbackLng;
};

if (!i18next.isInitialized) {
  const initialLng = getInitialLanguage();
  
  i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/src/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...getOptions(initialLng),
      lng: initialLng,
      detection: {
        order: ["cookie", "path", "htmlTag"],
        lookupCookie: "i18next",
        caches: ["cookie"],
      },
      preload: runsOnServerSide ? languages : [],
    });
}

export function useTranslation(
  lng: string,
  ns?: string,
  options?: { keyPrefix?: string }
) {
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  useEffect(() => {
    if (lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
      document.cookie = `i18next=${lng}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [lng, i18n]);

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  return {
    ...ret,
    t: i18n.getFixedT(lng, ns ?? null, options?.keyPrefix),
    i18n,
  };
}
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          welcome: "Hello <br/> <strong>World</strong>",
          people: "People",
          inclusion: "Inclusion",
          about: "About",
          actions: "Actions",
          test: "Test",
          history: "Our history",
          mission: "Mission",
          vision: "Vision",
          us: "us",
          placeholder: "Write here a name",
          emissor: "Emissor",
          senhas: "senhas",
          Atendimento: "Atendimento",
          Fila: "Fila",
          Guiche: "Guiche",
          Atendente: "Atendente",
          Status: "Status",
          Tempo: "Tempo",
          Hora: "Hora"
        }
      },
      pt: {
        translations: {
          welcome: "Olá <br/> <strong>Mundo</strong>",
          people: "Pessoas",
          inclusion: "Inclusão",
          about: "Sobre",
          actions: "Ações",
          test: "Teste",
          history: "Nossa história",
          mission: "Missão",
          vision: "Visão",
          us: "Nós",
          placeholder: "Escreva aqui um nome",
          emissor: "Emissor",
          senhas: "senhas",
          Atendimento: "Atendimento",
          Fila: "Fila",
          Guiche: "Guiche",
          Atendente: "Atendente",
          Status: "Status",
          Tempo: "Tempo",
          Hora: "Hora"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  })
  .then(function(t) { console.log(t('about')); });

export default i18n;

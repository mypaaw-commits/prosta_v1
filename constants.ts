import { NavItem, PricingItem, ServiceItem, FaqItem, SectionId } from './types';

export const APP_NAME = "PROSTA STRONA";

export const NAVIGATION: NavItem[] = [
  { label: 'OFERTA', href: `#${SectionId.CHOICE}` },
  { label: 'DLACZEGO MY', href: `#${SectionId.FUNCTIONALITY}` },
  { label: 'CENNIK', href: `#${SectionId.PRICING}` },
  { label: 'FAQ', href: `#${SectionId.FAQ}` },
  { label: 'KONTAKT', href: `#${SectionId.CONTACT}` },
];

export const CHOICE_CARDS = [
  {
    title: "Landing page",
    features: ["Jedna strona sprzedażowa", "Skupiona na konwersji", "Idealna do kampanii reklamowej"]
  },
  {
    title: "Wizytówka WWW",
    features: ["Podstawowe informacje o firmie", "Formularz kontaktowy", "Buduje wiarygodność w sieci"]
  },
  {
    title: "Prosta strona WWW",
    features: ["Kilka zakładek (O nas, Oferta, Kontakt)", "Pełna prezentacja usług", "Najczęstszy wybór dla małych firm"]
  }
];

export const FUNCTIONALITY_BAD = [
  "Wolne ładowanie i ciężkie grafiki",
  "Nieczytelna na telefonach",
  "Ukryte koszty i abonamenty",
  "Przeładowanie zbędnymi efektami"
];

export const FUNCTIONALITY_GOOD = [
  "Błyskawiczny czas wczytywania",
  "Pełna responsywność (RWD)",
  "Jasna wycena z góry",
  "Skupienie na treści i celu biznesowym"
];

export const INCLUSIONS = [
  "Responsywny projekt (RWD) dostosowany do urządzeń mobilnych",
  "Podpięcie domeny i certyfikatu SSL (jeśli posiadasz)",
  "Konfiguracja formularza kontaktowego",
  "Optymalizacja szybkości ładowania",
  "Zgodność z podstawowymi wymogami SEO",
  "Favicon i podstawowe metadane"
];

export const PRICING_ITEMS: PricingItem[] = [
  {
    title: "Landing page",
    price: "399 zł",
    features: ["1 długa sekcja scrollowana", "Sekcja Hero + CTA", "Odbiór w 3 dni robocze", "Bez systemu CMS"]
  },
  {
    title: "Wizytówka WWW",
    price: "899 zł",
    features: ["Strona główna + Kontakt", "Galeria zdjęć", "Mapa dojazdu", "Odbiór w 5 dni roboczych"]
  },
  {
    title: "Prosta strona WWW",
    price: "1 299 zł",
    features: ["Do 5 podstron", "Struktura pod SEO", "Możliwość edycji treści (CMS)", "Odbiór w 7-10 dni roboczych"]
  }
];

export const ADDONS: ServiceItem[] = [
  {
    title: "Opieka techniczna i hosting",
    price: "99 zł / 6 mies.",
    description: "Pierwsze 6 miesięcy gratis. Aktualizacje, kopie zapasowe i święty spokój."
  },
  {
    title: "Tworzenie treści i materiałów",
    description: "Napisanie prostych tekstów sprzedażowych + dobór profesjonalnych zdjęć stockowych."
  },
  {
    title: "Blog firmowy",
    price: "od 120 zł / mies.",
    description: "4 wpisy za 120 zł lub 8 wpisów za 240 zł miesięcznie.",
    note: "Usługa nie obejmuje moderacji komentarzy ani odpowiadania na nie."
  },
  {
    title: "Dodatkowa podstrona",
    price: "199 zł / szt.",
    description: "Rozbudowa struktury o kolejne zakładki."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Czy muszę mieć gotowe treści i zdjęcia?",
    answer: "Standardowo tak – pracujemy na materiałach przesłanych przez Ciebie. Jeśli ich nie masz, możemy przygotować je za dodatkową opłatą (patrz: Usługi dodatkowe)."
  },
  {
    question: "Czy SEO jest w cenie strony?",
    answer: "W cenie jest optymalizacja techniczna (szybkość, struktura nagłówków, meta tagi). Nie obejmuje to pozycjonowania (budowania linków) ani pisania artykułów pod frazy kluczowe."
  },
  {
    question: "Czy strona działa na telefonie?",
    answer: "Tak, każda realizacja jest w pełni responsywna (RWD) i wygląda świetnie na smartfonach, tabletach i komputerach."
  },
  {
    question: "Ile trwa realizacja?",
    answer: "Zależy od pakietu. Landing page to zazwyczaj ok. 3 dni robocze, a prosta strona WWW do 10 dni roboczych od momentu dostarczenia kompletu materiałów."
  },
  {
    question: "Czy muszę wykupić opiekę techniczną?",
    answer: "Nie, to usługa opcjonalna. Po oddaniu strony stajesz się jej właścicielem i możesz zarządzać nią samodzielnie."
  },
  {
    question: "Czy mogę przenieść stronę na inny serwer?",
    answer: "Tak, strona jest Twoją własnością. Nie wiążemy Cię umowami lojalnościowymi na hosting."
  },
  {
    question: "Czy wystawiacie fakturę VAT?",
    answer: "Rozliczenia realizowane są przez Useme, a klient otrzymuje fakturę VAT."
  }
];
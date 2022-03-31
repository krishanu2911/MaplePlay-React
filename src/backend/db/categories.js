import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Stoicism",
    description:
      "Stoicism teaches the development of self-control and fortitude as a means of overcoming destructive emotions",
  },
  {
    _id: uuid(),
    categoryName: "Socrates",
    description:
      "Socrates believed that philosophy should achieve practical results for the greater well-being of society.",
  },
  {
    _id: uuid(),
    categoryName: "Plato",
    description:
      "Plato was a Greek philosopher born in Athens during the Classical period in Ancient Greece.",
  },
  {
    _id: uuid(),
    categoryName: "Friedrich Nietzsche",
    description:
      "Friedrich Wilhelm Nietzsche was a German philosopher, cultural critic and philologist whose work has exerted a profound influence on modern intellectual history.",
  },
];

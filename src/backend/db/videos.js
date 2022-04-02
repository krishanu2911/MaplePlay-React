import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "Stoicism: Become Undefeatable",
    category:"Stoicism",
    thumbnail:"https://img.youtube.com/vi/EFkyxzJtiv4/sddefault.jpg",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Soham Shah",
  },
  {
    _id: uuid(),
    title: "BE UNSHAKEABLE - The Ultimate Stoic Quotes",
    creator: "Sentdex",
    category:"Stoicism",
    thumbnail:"https://img.youtube.com/vi/2bguEiUgDA4/sddefault.jpg",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "A Lesson From Socrates That Will Change The Way You Think",
    creator: "Sentdex",
    category:"Socrates",
    thumbnail:"https://img.youtube.com/vi/yH86jaBQ0F4/sddefault.jpg",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "9 Life Lessons From Socrates",
    creator: "Sentdex",
    category:"Socrates",
    thumbnail:"https://img.youtube.com/vi/Y4y2e4rUxfo/sddefault.jpg",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "PHILOSOPHY - Plato",
    creator: "Sentdex",
    category:"Plato",
    thumbnail:"https://img.youtube.com/vi/VDiyQub6vpw/sddefault.jpg",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Friedrich Nietzsche - How To Achieve Self Mastery (Existentialism)",
    creator: "Sentdex",
    category:"Friedrich Nietzsche",
    thumbnail:"https://img.youtube.com/vi/2S2nl8U8Vuk/sddefault.jpg",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];

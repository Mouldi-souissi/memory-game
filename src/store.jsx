import create from "zustand";
import randomCardGenerator from "./randomCardGenerator";

const useStore = create((set) => ({
  cards: [],
  clicks: [],

  generateCards: () => {
    set({ cards: randomCardGenerator() });
  },

  showCard: (card, clicks) => {
    const order = card.order;
    // case when the game has been just started or a pair was found
    // open clicked card and save it in the var clicks to track clicked cards
    if (clicks.length < 1) {
      set((state) => ({
        cards: [
          ...state.cards.filter((card) => card.order !== order),
          { ...card, hidden: false },
        ],
        clicks: [...state.clicks, card],
      }));
    }
    // case when there is a match
    // open the two matching cards and clear clicks history
    if (
      clicks.length >= 1 &&
      clicks[clicks.length - 1].order !== card.order &&
      clicks[clicks.length - 1].shape === card.shape
    ) {
      set((state) => ({
        cards: [
          ...state.cards.filter(
            (card) =>
              card.order !== order &&
              card.order !== clicks[clicks.length - 1].order
          ),
          { ...card, hidden: false },
          { ...clicks[clicks.length - 1], hidden: false },
        ],
        clicks: [],
      }));
    }
    // case when there is no match
    // open the current card then close previous opened one and the current after a delay
    if (
      clicks.length >= 1 &&
      clicks[clicks.length - 1].order !== card.order &&
      clicks[clicks.length - 1].shape !== card.shape
    ) {
      set((state) => ({
        cards: [
          ...state.cards.filter((card) => card.order !== order),
          { ...card, hidden: false },
        ],
        clicks: [],
      }));
      setTimeout(
        () =>
          set((state) => ({
            cards: [
              ...state.cards.filter(
                (card) =>
                  card.order !== order &&
                  card.order !== clicks[clicks.length - 1].order
              ),
              { ...card, hidden: true },
              { ...clicks[clicks.length - 1], hidden: true },
            ],
          })),
        1000
      );
    }
  },
}));

export default useStore;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ],
  expectedWords: [],
  plays: 1,
  victories: 0,
  defeatModal: false,
  victoryModal: false,
  statistics: false,
};

const wordleSlice = createSlice({
  name: 'wordle',
  initialState,
  reducers: {
    updateLetter: (state, action) => {
      const { wordIndex, letterIndex, letterState } = action.payload;
      state.words[wordIndex][letterIndex] = {
        ...state.words[wordIndex][letterIndex],
        state: letterState
      };
    },
    addLetter: (state, action) => {
      let emptyLetter = null;
      let emptyWord = null;

      for (let i = 0; i < state.words.length; i++) {
        const subArray = state.words[i];
        let encontrado = false;

        for (let j = 0; j < subArray.length; j++) {
          const elemento = subArray[j];

          if (!elemento.value) {
            emptyLetter = j;
            emptyWord = i;
            encontrado = true;
            break;
          }
        }

        if (encontrado) {
          break;
        }
      }
      state.words[emptyWord][emptyLetter].value = action.payload;
      if (emptyLetter === 4) {
        let victoryPool = 0;
        const newStates = state.words[emptyWord].map((w, index)=> {
          let found = w.value === state.expectedWords[index] ? 'right' : null;
          if (!found) {
            found = state.expectedWords.includes(w.value) ? 'rightBut' : null;
          }
          w.state = found || 'incorrect';

          if (w.state === 'right' ) victoryPool++;

          return w;
        })
        state.words[emptyWord] = newStates;

        if(victoryPool === 5) {
          state.victoryModal= true;
          state.victories= state.victories + 1;
        }
        if (victoryPool !== 5 && emptyWord === 4) {
          state.defeatModal = true;
        }
      }
    },
    updateWord: (state, action) => {
      const { word, index } = action.payload;
      const word5Letters = word.substring(0, 5);
      const splitedWord = word5Letters.split('');
      const newWord = splitedWord.map(value => ({
        value,
        state: null,
      }));
      state.words[index] = newWord;
    },
    updateExpectedWords: (state, action) => {
      const { word } = action.payload;
      const word5Letters = word.substring(0, 5);
      const splitedWord = word5Letters.split('');
      state.expectedWords = splitedWord;
    },
    toggleNight: (state) => {
      state.night = !state.night;
    },
    closeStatistics: (state) => {
      state.statistics = false;
      state.defeatModal = false;
      state.victoryModal = false;
    },
    openStatistics: (state) => {
      state.statistics = true;
    }
  },
});

export const { updateLetter } = wordleSlice.actions;
export const { updateWord } = wordleSlice.actions;
export const { updateExpectedWords } = wordleSlice.actions;
export const { toggleNight } = wordleSlice.actions;
export const { addLetter } = wordleSlice.actions;
export const { closeStatistics } = wordleSlice.actions;
export const { openStatistics } = wordleSlice.actions;

export default wordleSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { NewGameResponse, NewRoundResponse } from '../../types/responseTypes'
import { GameState } from '../../types/storeTypes'

const initialState: GameState = {
  baseCard: {
    suit: "",
    rank: "",
    value: 0
  },
  playerInfo: {
    name: "",
    lives: 0,
    score: 0
  },
  errorMsg: ""
}

export const createNewGame = createAsyncThunk('game/createNewGame',
  async (name: string): Promise<NewGameResponse> => {
    const { data: newGameResponse } = await axios.get(
      `http://localhost:8080/new-game?name=${name}`
    );
    return newGameResponse;
  }
)

export const newRound = createAsyncThunk('game/newRound',
  async (playerChoice: string): Promise<NewRoundResponse> => {
    const { data: newRoundResponse } = await axios.get(
      `http://localhost:8080/compare-cards?playerChoice=${playerChoice}`
    );
    return newRoundResponse;
  }
)

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(createNewGame.fulfilled, (state, action) => {
      state.baseCard = action.payload.baseCard;
      state.playerInfo = action.payload.player;
      state.errorMsg = action.payload.errorMsg;
    });
    builder.addCase(newRound.fulfilled, (state, action) => {
      state.baseCard = action.payload.nextCard;
      state.playerInfo = action.payload.player;
    });
  },

})

const gameReducer = gameSlice.reducer;

export default gameReducer;
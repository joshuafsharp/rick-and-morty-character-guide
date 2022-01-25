import axios, { AxiosResponse } from "axios";
import { Character } from "rickmortyapi/dist/interfaces";
import { CharactersResponseSuccess } from "../common/types/api";
import config from "../common/config";

export const fetchAllCharacters = async (): Promise<CharactersResponseSuccess> => {
    const response: AxiosResponse<CharactersResponseSuccess> = await axios.get(
        `${config.apiBaseUrl}/character`
      )

      return response.data;
}

export const fetchCharacterById = async (id: string): Promise<Character> => {
    const response: AxiosResponse<Character> = await axios.get(
        `${config.apiBaseUrl}/character/${id}`
      )

      return response.data;
}

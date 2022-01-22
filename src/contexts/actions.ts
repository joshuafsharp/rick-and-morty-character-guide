import axios, { AxiosResponse } from "axios";
import { Character } from "rickmortyapi/dist/interfaces";
import { CharacterResponseSuccess } from "../common/types/api";
import config from "../common/config";

export const fetchAllCharacters = async (): Promise<CharacterResponseSuccess> => {
    const response: AxiosResponse<CharacterResponseSuccess> = await axios.get(
        `${config.apiBaseUrl}/character`
      )

      console.log(response)

      return response.data;
}

export const fetchCharacterById = async (id: string): Promise<Character> => {
    const response: Character = await axios.get(
        `${config.apiBaseUrl}/character/${id}`
      )

      return response;
}

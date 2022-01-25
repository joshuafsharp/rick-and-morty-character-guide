import axios from 'axios';
import { Character, ApiResponse, Info as ApiResponseInfo } from 'rickmortyapi/dist/interfaces';
import config from '../common/config';

export const fetchAllCharacters = async (page: number): Promise<ApiResponseInfo<Character[]>> => {
  const response: ApiResponse<ApiResponseInfo<Character[]>> = await axios.get(
    `${config.apiBaseUrl}/character?page=${page}`,
  );

  return response.data;
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const response: ApiResponse<Character> = await axios.get(`${config.apiBaseUrl}/character/${id}`);

  return response.data;
};

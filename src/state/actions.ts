import axios from 'axios';
import { Character, ApiResponse, Info as ApiResponseInfo } from 'rickmortyapi/dist/interfaces';
import { CharactersFilters } from '../common/types/characters';
import config from '../common/config';

export const fetchAllCharacters = async (
  page: number,
  filters?: CharactersFilters,
): Promise<ApiResponseInfo<Character[]>> => {
  let requestUrl = `${config.apiBaseUrl}/character?page=${page}`;

  if (filters?.species) {
    requestUrl += `&species=${filters.species}`;
  }

  const response: ApiResponse<ApiResponseInfo<Character[]>> = await axios.get(requestUrl);

  return response.data;
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const response: ApiResponse<Character> = await axios.get(`${config.apiBaseUrl}/character/${id}`);

  return response.data;
};

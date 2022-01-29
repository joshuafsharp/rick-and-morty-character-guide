import axios from 'axios';
import { Character, ApiResponse, Info as ApiResponseInfo } from 'rickmortyapi/dist/interfaces';
import { CharactersFilters } from '../common/types/characters';
import config from '../common/config';
import { AppError, AppErrorCode } from '../common/error';

export const fetchAllCharacters = async (
  page: number,
  filters?: CharactersFilters,
): Promise<ApiResponseInfo<Character[]>> => {
  let requestUrl = `${config.apiBaseUrl}/character?page=${page}`;

  if (filters?.species) {
    requestUrl += `&species=${filters.species}`;
  }

  try {
    const response: ApiResponse<ApiResponseInfo<Character[]>> = await axios.get(requestUrl);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new AppError(
          AppErrorCode.CharactersNotFound,
          'Characters not found with the provided page and filters combination.',
        );
      }

      // Commonly would have special handling for 401 and 403 error status codes here.
    }

    throw new AppError(AppErrorCode.UnknownError, 'Something went wrong. Please try again later.');
  }
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  try {
    const response: ApiResponse<Character> = await axios.get(
      `${config.apiBaseUrl}/character/${id}`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new AppError(AppErrorCode.CharacterNotFound, 'This character does not exist.');
      }

      // Commonly would have special handling for 401 and 403 error status codes here.
    }

    throw new AppError(AppErrorCode.UnknownError, 'Something went wrong. Please try again later.');
  }
};

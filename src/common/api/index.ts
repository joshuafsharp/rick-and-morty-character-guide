import { Axios } from "axios";
import { Character } from "rickmortyapi/dist/interfaces";
import config from "~/common/config";

export default class Api {
  /**
   * Axios client to perform HTTP requests.
   */
  axiosClient: Axios;

  constructor(axiosClient: Axios) {
    this.axiosClient = axiosClient;
  }

  async fetchAllCharacters(): Promise<Character[]> {
    try {
      const response: Character[] = await this.axiosClient.get(
        `${config.apiBaseUrl}/character`
      );

      return response;
    } catch (error) {
      // Handle error cases here. Use explicit error codes defined in the application to assist with error management
    }
  }

  // fetchCharactersById() {

  // }
}

import { AppError, AppErrorCode } from '../common/error';
import { fetchAllCharacters, fetchCharacterById } from '../state/actions';

describe('API data fetching', () => {
  describe('Fetching all characters', () => {
    test('GET /character contains pagination info.', async () => {
      const response = await fetchAllCharacters(1);

      expect(response.info).toHaveProperty('count');
      expect(response.info).toHaveProperty('next');
      expect(response.info).toHaveProperty('pages');
      expect(response.info).toHaveProperty('prev');
    });

    test('GET /character contains characters results.', async () => {
      const response = await fetchAllCharacters(1);

      expect(response).toHaveProperty('results');
    });

    test('GET /character returns an array of characters.', async () => {
      const response = await fetchAllCharacters(1);

      expect(response.results[0]).toHaveProperty('id', 1);
      expect(response.results[0]).toHaveProperty('name', 'Rick Sanchez');
    });

    test('GET /character?page=2 includes the second page of results.', async () => {
      const response = await fetchAllCharacters(2);

      expect(response.info).toHaveProperty(
        'next',
        'https://rickandmortyapi.com/api/character?page=3',
      );
      expect(response.info).toHaveProperty(
        'prev',
        'https://rickandmortyapi.com/api/character?page=1',
      );
    });

    test('GET /character?page=1&species=Human to include only human characters', async () => {
      const response = await fetchAllCharacters(1, {
        species: 'Human',
      });

      const expectedArrayResult = Array.from(Array(20), () =>
        expect.objectContaining({ species: 'Human' } || { species: 'Humanoid' }),
      );

      expect(response.results).toEqual(expect.arrayContaining(expectedArrayResult));
    });

    test('GET /character?page=99999999 to throw a 404 error', async () => {
      let thrownError;

      try {
        await fetchAllCharacters(99999999);
      } catch (error) {
        thrownError = error;
      }

      expect(thrownError).toHaveProperty('code', AppErrorCode.CharactersNotFound);
    });
  });

  describe('Fetching a single character', () => {
    test('GET /character/1 returns character Rick Sanchez', async () => {
      const response = await fetchCharacterById(1);

      expect(response).toHaveProperty('id', 1);
      expect(response).toHaveProperty('name', 'Rick Sanchez');
    });

    test('GET /character/99999999 to throw 404 error', async () => {
      let thrownError;

      try {
        await fetchCharacterById(99999999);
      } catch (error) {
        thrownError = error;
      }

      expect(thrownError).toHaveProperty('code', AppErrorCode.CharacterNotFound);
    });
  });
});

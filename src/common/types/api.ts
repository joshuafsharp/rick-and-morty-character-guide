import { Character } from "rickmortyapi/dist/interfaces";

export interface ResponseSuccess {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export type CharacterResponseSuccess = ResponseSuccess & {
    results: Character[];
}
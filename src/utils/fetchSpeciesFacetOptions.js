/* eslint-disable */

/**
 * This is a utility script created to assist with getting the 
 * various values of the `species` filter option. This is required
 * as the rick and morty API doesn't include in its types the
 * potential values this species could be. 
 */

const axios = require('axios').default;
const uniq = require('lodash/uniq')

async function fetchPage(page) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)

    return response;
}

async function main() {

    const allSpecies = []

    const firstPage = await fetchPage(1);
    const { pages } = firstPage.data.info;

    allSpecies.push(...firstPage.data.results.map(character => character.species))

    for (let page = 2; page <= pages; page++) {
        console.log(`Fetching page ${page}`)
        const nextPage = await fetchPage(page)

        allSpecies.push(...nextPage.data.results.map(character => character.species))
    }

    console.log(JSON.stringify(uniq(allSpecies), null, 2))
}

main();
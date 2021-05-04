const GIPHY_BASE_API_PATH = process.env.GIPHY_BASE_API_PATH;
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

/**
 * Searchs using GiphyAPI and returns the first gif found based on the provided search query
 * @param {} query
 * @param {*} limit
 * @returns
 */
export const getGiphyGifByQuery = async (query, limit = 10) => {
    const buildURL = `${GIPHY_BASE_API_PATH}/search?q=${query}&api_key=${GIPHY_API_KEY}&limit=${limit}`;

    return await fetch(buildURL)
                .then(res => res.json())
                .then(res => {
                    if (res.meta.status === 200){
                        if (res.data.length){
                            return res.data[0] ? res.data[0].images['fixed_height_small'].url : ''
                        }
                    }
                });
}
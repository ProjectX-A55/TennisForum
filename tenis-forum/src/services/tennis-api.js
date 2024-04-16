const url = 'https://sportscore1.p.rapidapi.com/sports/2/teams?page=1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '700156b284msh2e836bb426cb269p1d3e8fjsn125a0291a7a5',
        'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
};
export const tennisApi = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// services/api.js
const apiKey = 'b7ea270eedmshb2757dd9d8ad841p19c27fjsndcfb97a04617';

export const fetchData = async () => {
	const response = await fetch(
		'https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?max_elevation=10000',
		{
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		}
	);
	console.log('response', response);
};

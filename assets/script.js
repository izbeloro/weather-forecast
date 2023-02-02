var apiKey = "dda2361f9711b148f9a98283d4756472";

fetch("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={dda2361f9711b148f9a98283d4756472}")

// function searchApi(query, format) {
//     var locQueryUrl = 'https://www.loc.gov/search/?fo=json';

//     if (format) {
//         locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
//     }'-[[[;]]]

//     locQueryUrl = locQueryUrl + '&q=' + query;

//     fetch(locQueryUrl)
//         .then(function (response) {
//             if (!response.ok) {
//                 throw response.json();
//             }

//             return response.json();
//         })
//         .then(function (locRes) {
//             // write query to page so user knows what they are viewing
//             resultTextEl.textContent = locRes.search.query;

//             console.log(locRes);

//             if (!locRes.results.length) {
//                 console.log('No results found!');
//                 resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//             } else {
//                 resultContentEl.textContent = '';
//                 for (var i = 0; i < locRes.results.length; i++) {
//                     printResults(locRes.results[i]);
//                 }
//             }
//         })
//         .catch(function (error) {
//             console.error(error);
//         });
// }
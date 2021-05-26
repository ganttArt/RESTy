import React from 'react';
import Results from '../components/Results';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';

it('should show the results accurately', async () => {
  const results = {
    "count": 82,
    "next": "http://swapi.dev/api/people/?page=2",
    "previous": null,
    "results": [
      {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "http://swapi.dev/api/planets/1/",
        "films": [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/",
          "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "http://swapi.dev/api/vehicles/14/",
          "http://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
          "http://swapi.dev/api/starships/12/",
          "http://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "http://swapi.dev/api/people/1/"
      }
    ]
  };

  const count = 82;
  const headers = 'content-typeapplication/json'

  render(<Results count={count} headers={headers} results={JSON.stringify(results, null, 2)}/>);

  // screen.debug();

  const items = screen.getAllByRole('listitem');

  expect(items).toHaveLength(3);
  expect(items[0]).toHaveTextContent('Count: 82');
  expect(items[1]).toHaveTextContent('Headers: content-typeapplication/json');
  expect(items[2]).toHaveTextContent('Results:{ "count": 82, "next": "http://swapi.dev/api/people/?page=2", "previous": null, "results": [ { "name": "Luke Skywalker", "height": "172", "mass": "77", "hair_color": "blond", "skin_color": "fair", "eye_color": "blue", "birth_year": "19BBY", "gender": "male", "homeworld": "http://swapi.dev/api/planets/1/", "films": [ "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/" ], "species": [], "vehicles": [ "http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/" ], "starships": [ "http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/" ], "created": "2014-12-09T13:50:51.644000Z", "edited": "2014-12-20T21:17:56.891000Z", "url": "http://swapi.dev/api/people/1/" } ] }');
});
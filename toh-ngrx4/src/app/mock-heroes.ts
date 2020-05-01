import { Hero } from './hero';
// would be better as a service
export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice',age:  24 },
  { id: 12, name: 'Narco', age: 30 },
  { id: 13, name: 'Bombasto', age: 15 },
  { id: 14, name: 'Celeritas', age: 19 },
  { id: 15, name: 'Magneta', age: 45  },
  { id: 16, name: 'RubberMan', age: 30  },
  { id: 17, name: 'Dynama', age: 50 },
  { id: 18, name: 'Dr IQ', age: 62 },
  { id: 19, name: 'Magma', age: 22 },
  { id: 20, name: 'Tornado', age: 16 }
];

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// simulates latency
export function extractHeroes(latency: number) {
  sleep(latency);
  return HEROES;
}



import fs from 'fs';
import { profile, skills, projects, experience, education } from './src/data/portfolio.js';

fs.writeFileSync(
  './public/portfolio-data.json',
  JSON.stringify({ profile, skills, projects, experience, education }, null, 2)
);
console.log('JSON written to public/portfolio-data.json');

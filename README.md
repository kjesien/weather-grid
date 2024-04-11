# Weather Grid

Main purpose of this project is to allow checking the current weather for predefined set of locations.

Additionally, it's showcasing some of my skills, known technologies and way of thinking/working.

**Used technologies/paradigms:**
- Next.js
- Server Side Rendering
- Data Caching using SWR
- Redux
- Tailwind with SCSS preprocessor

The cities data is loaded from json file. Using it's immutability I used hard caching for filtering and sorting.

## Getting started
1. install the project dependencies:
```bash
npm install
```

2. Create the `.env.local` file based on `.env.example` filling following environment variables:
- NEXT_PUBLIC_OPEN_WEATHER_API_KEY - API key retrieved from [Open Weather](https://openweathermap.org/).

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your favourite browser to see the result.

## Deployment

### You can view the deployed version on this [url](https://weather-grid.vercel.app/). This demo is hosted with Vercel.


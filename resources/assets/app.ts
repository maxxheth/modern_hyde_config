/*
 * This is the main TypeScript file used by Vite to build the app.js file.
 */

// Import the CSS file so Vite can process it
import './app.css'

// You can add your TypeScript code here
console.log('Vite + TypeScript + Tailwind CSS 4 setup complete!')

// Example of TypeScript features
interface AppConfig {
  name: string
  version: string
  debug: boolean
}

const config: AppConfig = {
  name: 'Goat Cherry Website',
  version: '1.0.0',
  debug: true,
}

if (config.debug) {
  console.log('App configuration:', config)
}

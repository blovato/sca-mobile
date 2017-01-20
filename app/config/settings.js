// If you're running on a device or in the Android simulator be sure to change
// localhost to your machines IP address
const METEOR_URL = process.env.NODE_ENV === 'production'
  ? '' // todo: production
  : 'ws://localhost:3000/websocket'; // local meteor websocket

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;

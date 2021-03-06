const {execSync} = require('child_process');
const {existsSync, mkdirSync} = require('fs');

const SCREENSHOT_DIR = '/tmp/screenshots';

const SCREENSHOT_OPTIONS = {
  timeout: 1000,
  killSignal: 'SIGKILL',
};

let screenshotIndex = 0;

export const takeScreenshot = () => {
  if (!existsSync(SCREENSHOT_DIR)) {
    mkdirSync(SCREENSHOT_DIR);
  }
  const screenshotFilename = `${SCREENSHOT_DIR}/screenshot-${screenshotIndex++}.png`;
  console.log('path= ', screenshotFilename);
  execSync(
    `xcrun simctl io booted screenshot ${screenshotFilename}`,
    SCREENSHOT_OPTIONS,
  );
};

/** @type {import('postcss-load-config').Config} */
import postcssPresetEnv from 'postcss-preset-env';
import Autoprefixer from 'autoprefixer';

export default {
  plugins: [postcssPresetEnv, Autoprefixer],
};

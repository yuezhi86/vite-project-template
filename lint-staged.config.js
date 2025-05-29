/** @type {import('lint-staged').Configuration} */

export default {
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,less}': ['stylelint --fix', 'prettier --write'],
  '*.{json,md,html}': ['prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
};

/** @type {import('lint-staged').Configuration} */

export default {
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,less}': ['stylelint --fix', 'prettier --write'],
  '*.{json,md,html}': ['prettier --write'],
  '*.vue': ['stylelint --fix', 'eslint --fix', 'prettier --write'],
};

export const getAssetsUrl = (path: string): string => {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
};

export const getImageUrl = (path: string): string => {
  return getAssetsUrl(`images/${path}`);
};

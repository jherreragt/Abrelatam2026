const assets = import.meta.glob<string>('../assets/**/*', {
  eager: true,
  import: 'default',
  query: '?url',
});

export function assetPath(path: string) {
  const asset = assets[`../assets/${path}`];

  if (!asset) {
    throw new Error(`Asset not found: ${path}`);
  }

  return asset;
}

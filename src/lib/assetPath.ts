const assets = import.meta.glob<string>(
  ['../assets/iconos/*', '../assets/logos/*', '../assets/slider/*', '../assets/IMAGEN.png'],
  {
  eager: true,
  import: 'default',
  query: '?url',
  },
);

export function assetPath(path: string) {
  const asset = assets[`../assets/${path}`];

  if (!asset) {
    throw new Error(`Asset not found: ${path}`);
  }

  return asset;
}

export async function safeImport<T>(
  importFn: () => Promise<T>,
): Promise<T | null> {
  try {
    const mod = await importFn();
    return mod;
  } catch (err) {
    console.warn("Remote import failed:", err);
    return null;
  }
}

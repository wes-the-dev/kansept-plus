import { urlFor } from "./image";
import type { SanityImageRef, SanityMediaAsset } from "./queries";

/** Returns a URL string from a raw Sanity image reference, or null if not available. */
export function resolveImageUrl(
  ref: SanityImageRef | null | undefined,
  width?: number
): string | null {
  if (!ref?.asset) return null;
  const builder = urlFor(ref);
  return width ? builder.width(width).auto("format").url() : builder.auto("format").url();
}

/**
 * Resolves a `SanityMediaAsset` (image OR video) to a { url, isVideo } object.
 * Returns null when no media is available.
 */
export function resolveMediaAsset(
  asset: SanityMediaAsset | null | undefined,
  width?: number
): { url: string; isVideo: boolean } | null {
  if (!asset) return null;

  if (asset.mediaType === "video") {
    const url = asset.video?.asset?.url;
    return url ? { url, isVideo: true } : null;
  }

  // Default: image — asset is already resolved from GROQ (asset->{ url, _id })
  const img = asset.image;
  const rawUrl = img?.asset?.url;
  if (!rawUrl) return null;
  const url = width ? `${rawUrl}?w=${width}&auto=format` : `${rawUrl}?auto=format`;
  return { url, isVideo: false };
}

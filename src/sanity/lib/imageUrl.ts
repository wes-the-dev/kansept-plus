import { urlFor } from "./image";
import type { SanityImageRef } from "./queries";

/** Returns a URL string from a Sanity image reference, or null if not available. */
export function resolveImageUrl(
  ref: SanityImageRef | null | undefined,
  width?: number
): string | null {
  if (!ref?.asset) return null;
  const builder = urlFor(ref);
  return width ? builder.width(width).auto("format").url() : builder.auto("format").url();
}

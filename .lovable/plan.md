

## Fix About Section Image

**Problem**: The About section uses a raw path `src="/assets/hero-1.webp"` instead of importing the asset via Vite. This means the image won't resolve correctly in the build.

**Fix**: The file already imports `aboutImg` from `@/assets/about.webp` (line 2) but doesn't use it for the blob image. Since `hero-1.webp` exists in `src/assets/`, we need to:

1. **In `src/components/sections/About.tsx`**: Import `hero1` from `@/assets/hero-1.webp` and replace the hardcoded `src="/assets/hero-1.webp"` with `src={hero1}`.

This is a one-line import addition and one-line src change.


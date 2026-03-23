

# Use WebP Images Instead of JPG

## Current State

The menu category images are all `.jpg`:
- `menu-chinese.jpg`, `menu-veg-new.jpg`, `menu-nonveg-new.jpg`, `menu-birthday.jpg`, `menu-drinks.jpg`

**Problem**: There are no `.webp` versions of these menu images in `src/assets/`. WebP versions need to be uploaded first before the code can reference them.

Additionally, other JPG files exist:
- `contact.jpg`, `gallery-1.jpg` through `gallery-6.jpg`, `service-1.jpg` through `service-4.jpg`

Gallery images 7+ and service images like `service-ac-comfort.webp` already use WebP.

## What's Needed

### Step 1: You upload WebP versions of menu images
Upload these files to `src/assets/`:
- `menu-chinese.webp`
- `menu-veg-new.webp`
- `menu-nonveg-new.webp`
- `menu-birthday.webp`
- `menu-drinks.webp`

Optionally also: `contact.webp`, `gallery-1.webp` through `gallery-6.webp`, `service-1.webp` through `service-4.webp`

### Step 2: Update imports in code

| File | Change |
|------|--------|
| `src/data/foodCategories.ts` | Change all `.jpg` imports to `.webp` |
| `src/components/sections/FoodMenu.tsx` | Change all `.jpg` imports to `.webp` |
| `src/components/sections/Gallery.tsx` | Change `gallery-1` through `gallery-6` from `.jpg` to `.webp` |
| `src/pages/GalleryPage.tsx` | Same gallery jpg→webp changes |
| Any other files importing jpg assets | Update accordingly |

## Action Required

**Please upload the WebP versions of the menu images first**, then I can update all the import references across the codebase. Would you like to upload them now?


# Food Selection Feature Documentation

## 🎯 Overview

A comprehensive food menu selection system that allows users to browse food items, add them to a selection list, fill out a request form, and send their menu request directly via WhatsApp.

---

## ✨ Key Features

### 1. **Food Item Cards with Add Button**
- Each food item displays a floating **"Add to List" button** (plus icon)
- Button positioned in top-right corner of card image
- Visual feedback when item is added (checkmark icon)
- Selected cards show a **ring border** (ring-2 ring-primary)
- Prevents duplicate items

### 2. **Floating "Selected Menu" Button**
- Fixed position at **bottom-right corner**
- Shows dynamic count: "Selected Menu (X)"
- Always visible while scrolling
- Clicking opens the side panel

### 3. **Side Panel (Selected Menu Panel)**
- Slides in from right on desktop
- Full-width on mobile
- Contains:
  - Header with total count
  - List of selected items
  - Request form
  - WhatsApp send button

### 4. **Selected Items Display**
- Each item shows:
  - Thumbnail image (64x64px)
  - Item name
  - Category label
  - Remove button (appears on hover)
- **Clear All** button to remove everything

### 5. **Menu Request Form**
- **Name** (required field)
- **Phone Number** (required field)
- **Select Service** (dropdown with 6 event types)
- **Event Date** (date picker)
  - Minimum date: Today
  - Past dates are disabled

### 6. **WhatsApp Integration**
- Validates form before sending
- Creates formatted message with:
  - User details
  - Selected menu items (bulleted list)
  - Request message
- Opens WhatsApp chat in new tab
- Business number: **919164060961**

### 7. **Toast Notifications**
- Item added
- Item already in list
- Item removed
- All items cleared
- Validation errors
- WhatsApp confirmation

---

## 🏗️ Technical Architecture

### **State Management**

**Context**: `FoodSelectionContext.tsx`

```typescript
interface SelectedFoodItem {
  name: string;
  image: string;
  category: string;
}

Context Methods:
- addItem(item, category) - Add food item
- removeItem(itemName) - Remove by name
- clearAll() - Remove all items
- isItemSelected(itemName) - Check if selected
```

**Provider**: Wraps entire app in `App.tsx`

### **Components**

1. **FoodSelectionContext** (`src/contexts/FoodSelectionContext.tsx`)
   - Global state management
   - Provides selection methods
   - Prevents duplicates

2. **SelectedMenuPanel** (`src/components/SelectedMenuPanel.tsx`)
   - Floating button UI
   - Side panel with overlay
   - Selected items list
   - Request form
   - WhatsApp integration

3. **FoodCategoryPage** (Updated)
   - Add button on each card
   - Visual selection feedback
   - Integration with context

---

## 📱 Responsive Design

### Desktop (≥768px):
```css
- Side panel: 500px width
- Slides from right
- Overlay backdrop with blur
- Floating button: bottom-right (24px spacing)
- Card layout: 3-4 columns
```

### Tablet (640-767px):
```css
- Side panel: 500px width (if space allows)
- 2-3 columns for cards
- Touch-optimized buttons
```

### Mobile (<640px):
```css
- Side panel: Full width
- Slides from right
- 1-2 columns for cards
- Larger touch targets
- Bottom spacing for button
```

---

## 🎨 Visual Design

### Colors & Theme:
- **Primary**: Used for buttons, selected state
- **Card**: Background for items
- **Muted**: Secondary backgrounds
- **Destructive**: Remove actions
- **Border**: Dividers and outlines

### Typography:
- **Headings**: font-heading (titles)
- **Body**: font-body (descriptions)
- **Sizes**: Responsive (sm to 2xl)

### Shadows:
- Cards: shadow-md → shadow-xl (hover)
- Floating button: shadow-xl → shadow-2xl
- Panel: shadow-2xl

### Transitions:
- Duration: 200ms - 500ms
- Easing: ease-in-out
- Properties: transform, opacity, shadow

---

## 🔄 User Flow

### Step 1: Browse Menu
1. User visits any food category page
2. Views food items in card grid
3. Sees "Add to List" button on each card

### Step 2: Select Items
1. Clicks "Add to List" (+) button
2. Toast notification: "Item added to your menu"
3. Button changes to checkmark (✓)
4. Card gets ring border
5. Floating button count increases

### Step 3: Review Selection
1. Clicks "Selected Menu (X)" button
2. Side panel opens
3. Reviews selected items
4. Can remove individual items
5. Can clear all items

### Step 4: Fill Form
1. Enters name (required)
2. Enters phone number (required)
3. Selects service type (optional)
4. Selects event date (optional)

### Step 5: Send to WhatsApp
1. Clicks "Send Menu Request"
2. Form validates
3. WhatsApp message formatted
4. Opens WhatsApp in new tab
5. User can send or edit message

---

## 📋 WhatsApp Message Format

```
Hello, I would like to request a catering menu.

Name: John Doe
Phone: 1234567890
Service: Wedding Events
Event Date: 2024-03-15

Selected Menu Items:
• Paneer Butter Masala
• Dal Makhani
• Veg Biryani
• Live Chaat Counter

Please contact me regarding this request.
```

---

## 🧪 Testing Guide

### Desktop Testing:

1. **Add Items**:
   - Click plus button on multiple items
   - Verify checkmark appears
   - Verify ring border shows
   - Verify count increases

2. **Floating Button**:
   - Scroll page up/down
   - Verify button stays visible
   - Click to open panel
   - Verify panel slides in

3. **Side Panel**:
   - Check item list displays
   - Hover over items (remove button appears)
   - Click remove button
   - Verify item is removed
   - Click Clear All
   - Verify all items removed

4. **Form**:
   - Leave fields empty, try to send
   - Verify validation errors
   - Fill name and phone
   - Select service
   - Pick future date
   - Submit successfully

5. **WhatsApp**:
   - Click Send button
   - Verify WhatsApp opens
   - Check message format
   - Verify all items listed

### Mobile Testing:

1. **Responsive Layout**:
   - Check card grid (1-2 columns)
   - Verify button sizes are touch-friendly
   - Test panel opens full-width
   - Check form fields are accessible

2. **Touch Interactions**:
   - Tap add buttons
   - Tap floating button
   - Swipe to close panel (click overlay)
   - Tap remove buttons
   - Fill form on mobile keyboard

3. **Mobile WhatsApp**:
   - Verify WhatsApp app opens (not browser)
   - Check message pre-filled

---

## 🎯 Service Types (Dropdown)

The form includes these service options:
1. Wedding Events
2. Corporate Events
3. Birthday Parties
4. Anniversary Celebrations
5. Engagement Ceremonies
6. Other Events

---

## ⚙️ Configuration

### WhatsApp Number:
```typescript
const whatsappNumber = "919164060961";
```

Located in: `src/components/SelectedMenuPanel.tsx`

To update, change the number in the `handleSendToWhatsApp` function.

### Services List:
```typescript
const services = [
  "Wedding Events",
  "Corporate Events",
  // ...
];
```

Add or modify services in the `services` array.

---

## 🚀 Future Enhancements

Potential improvements:
- [ ] Save selections to localStorage (persist across sessions)
- [ ] Add quantity selector for each item
- [ ] Include pricing information
- [ ] Add dietary filters (veg/non-veg/jain)
- [ ] Email option in addition to WhatsApp
- [ ] Print menu feature
- [ ] Share menu with friends
- [ ] Save favorite menus
- [ ] Spice level preferences
- [ ] Special instructions field
- [ ] Multiple event dates
- [ ] Budget calculator
- [ ] Package recommendations

---

## 🐛 Troubleshooting

### Issue: Items not adding
**Solution**: Check console for errors, verify context is wrapped in App.tsx

### Issue: WhatsApp not opening
**Solution**: 
- Check number format (should be 919164060961)
- Ensure browser allows pop-ups
- Test on different devices

### Issue: Panel not opening
**Solution**: 
- Check z-index values (panel should be z-[201])
- Verify state updates in React DevTools

### Issue: Date picker not working
**Solution**:
- Ensure Input component supports type="date"
- Check min attribute is set correctly

---

## 📦 Dependencies

The feature uses these existing packages:
- `react` - Core framework
- `sonner` - Toast notifications
- `lucide-react` - Icons (Plus, Check, ShoppingBag, Trash2, etc.)
- `@/components/ui/*` - shadcn/ui components
- `react-router-dom` - Navigation

No additional packages required!

---

## ✅ Accessibility

- **Keyboard Navigation**: All buttons are keyboard accessible
- **ARIA Labels**: Buttons have descriptive labels
- **Focus Management**: Panel traps focus when open
- **Screen Reader**: Semantic HTML structure
- **Color Contrast**: Meets WCAG AA standards
- **Touch Targets**: Minimum 44x44px on mobile

---

## 📝 Code Locations

```
src/
├── contexts/
│   └── FoodSelectionContext.tsx     # State management
├── components/
│   └── SelectedMenuPanel.tsx        # Panel & floating button
├── pages/
│   └── FoodCategoryPage.tsx         # Updated with add buttons
└── App.tsx                          # Provider wrapper
```

---

## 🎉 Summary

The Food Selection feature provides a complete solution for users to:
1. ✅ Browse and select menu items
2. ✅ Review their selections
3. ✅ Fill out request details
4. ✅ Send directly to WhatsApp
5. ✅ Get instant confirmation

All with a beautiful, responsive UI that works seamlessly across devices!

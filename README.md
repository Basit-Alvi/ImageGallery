# Image Gallery - Task 1 CodeAlpha

A fully functional responsive image gallery with HTML, CSS, and JavaScript.

## Features Implemented

✅ **HTML Layout** - Semantic HTML structure with gallery grid and lightbox modal

✅ **CSS Styling** - Modern design with:
- Gradient background
- Responsive grid layout (auto-fill minmax)
- Smooth transitions and animations
- Hover effects on gallery items
- Overlay with View button

✅ **JavaScript Navigation** - Interactive features:
- Lightbox modal for full-size image viewing
- Next/Previous buttons for image navigation
- Keyboard navigation (Arrow keys, Escape)
- Click outside to close lightbox
- Image counter showing current position

✅ **Responsive Design**:
- Mobile-first approach
- Breakpoints: 768px (tablet) and 480px (mobile)
- Flexible grid that adapts to screen size
- Touch-friendly button sizing

✅ **Bonus: Image Filtering** - Category system:
- Filter buttons (All, Nature, Urban, Animals)
- Dynamic filtering of gallery items
- Updates counter based on filtered results
- Smooth hiding/showing of items

## File Structure

```
index.html      - Gallery HTML structure
styles.css      - All styling and responsive design
script.js       - Gallery functionality and interactivity
README.md       - This file
```

## How to Use

1. Open `index.html` in a web browser
2. Click "View" button on any image to open the lightbox
3. Use arrow buttons or keyboard arrow keys to navigate
4. Click category filters to filter images by type
5. Press Escape or click outside to close the lightbox

## Features Breakdown

### Gallery Grid
- 8 sample images from Unsplash API
- Responsive grid with hover effects
- Image scale-up animation on hover
- Overlay appears on hover with View button

### Lightbox Modal
- Full-size image display
- Previous/Next navigation buttons
- Close button and keyboard shortcuts
- Image counter (current / total)
- Animations for smooth transitions
- Click outside to close

### Category Filter (Bonus)
- Filter by: All, Nature, Urban, Animals
- Active filter indicator
- Dynamic gallery updates
- Smooth hide/show transitions

### Responsive Breakpoints
- Desktop (1200px): 4 columns
- Tablet (768px): 3 columns
- Mobile (480px): 2 columns
- All elements scale appropriately

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6 JavaScript features
- CSS Grid and Flexbox
- CSS Animations

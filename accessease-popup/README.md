# AccessEase Popup

A modern browser extension popup built with React, Vite, and Tailwind CSS. Features a glassy iOS-style interface for web accessibility assistance.

## Features

- **Glassy iOS-style UI**: Transparent white blur background with modern design
- **Color Blind Mode**: Dropdown with accessibility options (None, Deuteranopia, Protanopia, Tritanopia)
- **Font Style Options**: Choose between Default, OpenDyslexic, and Sans-serif fonts
- **Focus/Spotlight Toggle**: Interactive toggle switch for focus assistance
- **AI Chat Assistant**: Mock chat interface with scrollable message area and input field

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Project Structure

```
src/
├── App.jsx          # Main popup component
├── main.jsx         # React entry point
└── index.css        # Tailwind CSS imports
```

## Design Specifications

- **Dimensions**: 380px × 520px
- **Background**: Glassy transparent white with backdrop blur
- **Typography**: Clean, rounded system fonts
- **Interactions**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML with proper labels and focus states

## Future Development

This popup is designed to be integrated into a Chrome extension (Manifest V3). The current implementation is static UI only - functionality will be added in future iterations.

## Browser Extension Integration

To use this popup in a Chrome extension:

1. Build the project: `npm run build`
2. Copy the `dist` folder contents to your extension's popup directory
3. Update your `manifest.json` to point to the built `index.html`
4. Ensure all assets are properly referenced in the extension structure
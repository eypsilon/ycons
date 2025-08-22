# Ycons - Emoji Icon Generator 🎨

**Icons for WebApps using Emojis** - A powerful browser-based tool for creating custom CSS icon systems using Unicode emojis.

## Preview

That's what to expect: Plain CSS. You can copy&paste it to your CSS, or download the generated CSS as file and link it to your HTML.

**No additional files, images, svgs, pngs or else needed.**

[Live example for the following on JSFiddle](https://jsfiddle.net/k5tpfywv/)

_Preview for:_ 😀

```html
<style>
    .ycon {
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        font-size: 1.25rem;
        pointer-events: none;
        user-select: none;
    }
    .ycon::before { display: inline-block; }

    /* Transform utilities */
    .ycon.mirror { transform: scaleX(-1); }
    .ycon.flip { transform: scaleY(-1); }
    .ycon.mirror.flip { transform: scale(-1, -1); }
    .ycon.rotate-90 { transform: rotate(90deg); }
    .ycon.rotate-180 { transform: rotate(180deg); }
    .ycon.rotate-270 { transform: rotate(270deg); }

    /* Filter utilities */
    .ycon.gray { filter: grayscale(1); }
    .ycon.blur { filter: blur(1px); }
    .ycon.dim { filter: brightness(0.7); }
    .ycon.bright { filter: brightness(1.3); }
    .ycon.sepia { filter: sepia(1); }
    .ycon.invert { filter: invert(1); }
    .ycon.saturate { filter: saturate(1.5); }
    .ycon.desaturate { filter: saturate(0.5); }

    /* Animation utilities */
    .ycon.spin { animation: ycon-spin 2s linear infinite; }
    .ycon.pulse { animation: ycon-pulse 2s ease-in-out infinite; }
    .ycon.bounce { animation: ycon-bounce 1s ease-in-out infinite; }

    /* Keyframes */
    @keyframes ycon-spin {from {transform: rotate(0deg);} to {transform: rotate(360deg);}}
    @keyframes ycon-pulse {0%, 100% {opacity: 1;} 50% {opacity: 0.5;}}
    @keyframes ycon-bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
    }
    /* Size variants */
    .ycon-xxs { font-size: 1rem; }
    .ycon-xs { font-size: 1.25rem; }
    .ycon-sm { font-size: 1.5rem; }
    .ycon-md { font-size: 1.75rem; }
    .ycon-lg { font-size: 2rem; }
    .ycon-xl { font-size: 2.5rem; }
    .ycon-xxl { font-size: 3rem; }

    /* Icons */
    .ycon-grinning-face::before { content: "\1F600"; }
</style>
<span class="ycon ycon-grinning-face"></span>
<span class="ycon ycon-grinning-face ycon-xxs"></span>
<span class="ycon ycon-grinning-face ycon-xs"></span>
<span class="ycon ycon-grinning-face ycon-sm"></span>
<span class="ycon ycon-grinning-face ycon-md"></span>
<span class="ycon ycon-grinning-face ycon-lg"></span>
<span class="ycon ycon-grinning-face ycon-xl"></span>
<span class="ycon ycon-grinning-face ycon-xxl"></span>
<span class="ycon ycon-grinning-face gray"></span>
<span class="ycon ycon-grinning-face dim"></span>
<span class="ycon ycon-grinning-face bright"></span>
<span class="ycon ycon-grinning-face sepia"></span>
<span class="ycon ycon-grinning-face invert"></span>
<span class="ycon ycon-grinning-face saturate"></span>
<span class="ycon ycon-grinning-face desaturate"></span>
<span class="ycon ycon-grinning-face blur"></span>
<span class="ycon ycon-grinning-face mirror"></span>
<span class="ycon ycon-grinning-face flip"></span>
<span class="ycon ycon-grinning-face rotate-90"></span>
<span class="ycon ycon-grinning-face spin"></span>
<span class="ycon ycon-grinning-face pulse"></span>
<span class="ycon ycon-grinning-face bounce"></span>
```

[131 Icons, ~8kb CSS](https://jsfiddle.net/wycsx647/)

## ✨ Features

### 🔍 **Live Emoji Browser**
- Browse 1000+ emojis from the official Unicode emoji set
- Real-time search by name, group, or category
- Filter by emoji groups (Smileys, People, Animals, etc.)
- Interactive selection with visual feedback

### 🎛️ **Customizable CSS Generation**
- **Configurable prefix** - Use any CSS class prefix (default: `ycon`)
- **Adjustable default size** - Set base font-size (default: 1.25rem)
- **Size variants** - 7 predefined sizes (xxs to xxl)
- **Transform utilities** - Mirror, flip, rotate transformations
- **Filter effects** - Grayscale, blur, brightness, sepia, invert, saturation
- **Animations** - Spin, pulse, bounce with CSS keyframes

### 📱 **Live Preview**
- Real-time preview of selected icons
- See all size variants and effects instantly
- Toggle effects visibility for cleaner view
- Interactive examples with tooltips

### 💾 **Export & Import**
- **Download CSS** - Get production-ready stylesheet
- **Minify option** - Compact CSS for smaller file sizes
- **Export JSON** - Save selected icons with metadata
- **Import JSON** - Restore previous selections
- **Size calculator** - See approximate file size

## 🚀 Quick Start

1. Open `emoji-browser-grok.html` in your browser
2. Search or browse for emojis you want to use
3. Click emojis to select them
4. See live preview and generated CSS
5. Download your custom CSS file

## 🎯 Usage Examples

### Basic Icon Usage
```html
<span class="ycon ycon-rocket"></span>
<span class="ycon ycon-heart"></span>
<span class="ycon ycon-star"></span>
```

### Size Variants
```html
<span class="ycon ycon-fire ycon-xs"></span>    <!-- Extra small -->
<span class="ycon ycon-fire ycon-sm"></span>    <!-- Small -->
<span class="ycon ycon-fire ycon-lg"></span>    <!-- Large -->
<span class="ycon ycon-fire ycon-xxl"></span>   <!-- Extra large -->
```

### Transform Effects
```html
<span class="ycon ycon-arrow mirror"></span>     <!-- Mirrored -->
<span class="ycon ycon-emoji flip"></span>       <!-- Flipped -->
<span class="ycon ycon-clock rotate-90"></span>  <!-- Rotated 90° -->
```

### Filter Effects
```html
<span class="ycon ycon-photo gray"></span>       <!-- Grayscale -->
<span class="ycon ycon-sun bright"></span>       <!-- Brightened -->
<span class="ycon ycon-moon dim"></span>         <!-- Dimmed -->
<span class="ycon ycon-vintage sepia"></span>    <!-- Sepia tone -->
```

### Animations
```html
<span class="ycon ycon-loading spin"></span>     <!-- Spinning -->
<span class="ycon ycon-heart pulse"></span>      <!-- Pulsing -->
<span class="ycon ycon-ball bounce"></span>      <!-- Bouncing -->
```

### Combining Classes
```html
<span class="ycon ycon-rocket ycon-lg spin bright"></span>
```

## 🛠️ Tool Features

### Search & Filter
- **Live search** - Type to find emojis instantly
- **Group filter** - Filter by emoji categories
- **Show selected** - View only your chosen icons
- **Smart filtering** - All filters work together

### CSS Customization
- **Prefix input** - Change CSS class prefix
- **Default size** - Adjust base icon size
- **Live updates** - See changes immediately
- **Minify toggle** - Switch between formatted/minified CSS

### Preview & Export
- **Live preview** - See exactly how icons will look
- **Size calculation** - Know your CSS file size
- **JSON export** - Save your icon collections
- **Import system** - Restore previous work

## 📁 File Structure

```
ycons/
├── example/
│   └── public/
│       ├── assets/
│       │   ├── favicon.ico
│       │   └── main.css
│       └── index.html
├── scripts/
│   ├── emoji-test.txt        # Unicode data
│   ├── emojis.json           # Processed emoji data
│   └── parse-emojis.js       # Unicode data parser
└── README.md                 # This file
```

## 🎨 Generated CSS Structure

The tool generates clean, organized CSS:

```css
/* Base styles */
.ycon {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.25rem;
    pointer-events: none;
    user-select: none;
}

/* Transform utilities */
.ycon.mirror { transform: scaleX(-1); }
.ycon.flip { transform: scaleY(-1); }

/* Filter utilities */
.ycon.gray { filter: grayscale(1); }
.ycon.spin { animation: ycon-spin 2s linear infinite; }

/* Size variants */
.ycon-xs { font-size: 1rem; }
.ycon-lg { font-size: 2rem; }

/* Icons */
.ycon-rocket::before { content: "\1F680"; }
.ycon-heart::before { content: "\2764"; }
```

## 💡 Use Cases

- **Web applications** - Add expressive icons without image files
- **Design systems** - Create consistent emoji-based iconography
- **Prototyping** - Quick icons for mockups and demos
- **Performance** - Lightweight alternative to icon fonts/SVGs
- **Accessibility** - Unicode emojis have built-in semantic meaning

## 🌟 Benefits

- **No dependencies** - Pure HTML/CSS/JavaScript
- **Lightweight** - Tiny file sizes compared to icon fonts
- **Scalable** - Vector-based emojis scale perfectly
- **Customizable** - Full control over styling and behavior
- **Cross-platform** - Works everywhere Unicode is supported
- **Future-proof** - Based on Unicode standard

## 🔧 Development

### Processing Emoji Data
```bash
cd scripts/
node parse-emojis.js
```

This processes the Unicode `emoji-test.txt` file into structured JSON data.

## 📜 License

Open source - feel free to use, modify, and distribute!


## 👥 **Authors**

- **Claude Van DOM** - 🤖 - Implementation and optimization
- **Engin Ypsilon** - 💪 - Original concept and architecture

---

**Made with ❤️ for developers who love emojis** 🚀✨

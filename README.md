# 🔢 Unit Converter App

An interactive, responsive unit conversion web app that allows users to quickly convert values across multiple categories such as length, volume, mass, and more.

Built with a focus on **smooth UI/UX, animations, and user interaction**, this project goes beyond a basic converter and feels like a polished mini-application.

👉 [**View Live Demo**](https://unit-convertion-application.netlify.app/)

---

## ✨ Features

- ⚡ Smooth conversion results with animations  
- 🎯 Multiple categories:
  - Length
  - Volume
  - Mass
  - Area
  - Data
  - Speed  
- ⌨️ Keyboard shortcuts for faster interaction  
- 🌙 Dark mode toggle with animated transitions  
- 🧹 Clear All functionality with visual feedback  
- 🎬 Typewriter effect for dynamic result display  
- 🟢 Custom loading animations per card  

---

## ⚙️ How It Works

### 1. User Input Handling
- The app listens for a click event on the **Convert** button (or `Enter` key).
- The input value is retrieved and converted into a `Number`.
- Basic validation ensures the value is valid before processing.

---

### 2. Conversion Logic

The app uses predefined constants for accurate conversions:

- **Length** → Meter ⇄ Feet  
- **Volume** → Liter ⇄ Gallon  
- **Mass** → Kilogram ⇄ Pound  
- **Area** → Square Meter ⇄ Square Feet  
- **Data** → Kilobyte ⇄ Megabyte  
- **Speed** → km/h ⇄ mph  

All results are formatted using `.toFixed(3)` for consistency and readability.

---

### 3. Dynamic Rendering

- Results are injected directly into the DOM using `innerHTML`
- Each category is displayed in its own **card container**
- Animations (loading + typewriter effect) enhance user experience without page reloads

---

### 4. State & Interaction

- Active animations are managed using stored `setTimeout` references  
- Buttons are temporarily disabled during actions to prevent spam  

**Keyboard Shortcuts:**
- `Enter` → Convert  
- `Esc` → Clear  
- `D` or `L` → Toggle theme  

---

## 📂 Project Structure

```text
UnitConverter
│
├── assets/        # Images (theme icons)
├── index.html     # App structure
├── styles.css     # Styling, themes, animations
└── script.js      # Core logic & interactions

// src/components/Global/colors.ts
/**
 * DevMatrix - Enhanced Color System
 * A comprehensive color palette with semantic naming
 * for consistent application styling
 */

// Define the color object
const colorPalette = {
    // Core Brand Colors — Black & White Theme
    primary: "#e8e8e8",
    secondary: "#ffffff",
    tertiary: "#000000",

    // Derived Shades
    primaryDark: "#cccccc",
    primaryLight: "#f5f5f5",
    primaryGradient: "linear-gradient(135deg, #e8e8e8 0%, #ffffff 100%)",

    secondaryDark: "#e0e0e0",
    secondaryLight: "#ffffff",

    tertiaryLight: "#111111",

    // Accent & Status Colors
    accent: "#e8e8e8",
    accentLight: "#f5f5f5",
    accentGradient: "linear-gradient(135deg, #e8e8e8 0%, #ffffff 100%)",

    success: "#4CAF50",
    warning: "#FFC107",
    error: "#F44336",

    neutral: "#888888",
    neutralMedium: "#aaaaaa",
    neutralLight: "#cccccc",

    // Backgrounds
    darkBg: "#0a0a0a",
    lightBg: "#FFFFFF",

    // Other Gradients
    successGradient: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
    warningGradient: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
    errorGradient: 'linear-gradient(135deg, #F44336 0%, #E57373 100%)',

    backgroundGradient: 'linear-gradient(180deg, #111111 0%, #000000 100%)',
    heroGradient: 'linear-gradient(135deg, #111111 0%, #000000 100%)',
} as const;

// --- Opacity Helpers ---
// Helper function to convert hex to rgba
export const hexToRgba = (hex: string, alpha: number): string => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Define the final colors object including helpers
export const colors = {
    ...colorPalette,
    // Opacity functions
    primaryOpacity: (opacity: number): string => hexToRgba(colorPalette.primary, opacity),
    secondaryOpacity: (opacity: number): string => hexToRgba(colorPalette.secondary, opacity),
    tertiaryOpacity: (opacity: number): string => hexToRgba(colorPalette.tertiary, opacity),
    accentOpacity: (opacity: number): string => hexToRgba(colorPalette.accent, opacity),
    neutralOpacity: (opacity: number): string => hexToRgba(colorPalette.neutral, opacity),
    lightBgOpacity: (opacity: number): string => hexToRgba(colorPalette.lightBg, opacity),
    successOpacity: (opacity: number): string => hexToRgba(colorPalette.success, opacity),
    darkBgOpacity: (opacity: number): string => hexToRgba(colorPalette.darkBg, opacity),
} as const;

// Optional: Define a type for color keys if needed elsewhere
export type ColorKeys = keyof typeof colors;


// Theme variants (can be kept or removed if not used directly by header)
export const themeVariants = {
    default: {
        background: colors.secondary,
        text: colors.tertiary,
        border: colors.secondaryDark,
    },
    primary: {
        background: colors.primary,
        text: colors.lightBg,
        border: colors.primaryDark,
    },
    accent: {
        background: colors.accent,
        text: colors.lightBg,
        border: colors.tertiary, // Consider contrast
    },
    dark: {
        background: colors.darkBg,
        text: colors.lightBg,
        border: colors.secondary, // Light border on dark
    },
    light: {
        background: colors.lightBg,
        text: colors.tertiary,
        border: colors.secondaryDark,
    },
};

// Generate CSS variables (keep if you use CSS vars elsewhere)
export const generateCSSVariables = (): string => {
    // ... (implementation remains the same)
    let cssVars = ':root {\n';
    Object.entries(colorPalette).forEach(([key, value]) => {
        if (typeof value === 'string' && !key.endsWith('Gradient') && !key.endsWith('Opacity')) {
            cssVars += `  --color-${key}: ${value};\n`;
        }
        // Optionally handle gradients differently if needed
    });
    // Add theme variants if needed
    cssVars += '}';
    return cssVars;
};

export default colors; // Export the enhanced colors object
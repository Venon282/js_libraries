class Color {
    constructor(r, g, b, a=1) {
      this._r = r;
      this._g = g;
      this._b = b;
      this._a = a;
    }

    static rgb(r, g, b){
        return new Color(r, g, b, 1)
    }

    static rgba(r, g, b, a){
        return new Color(r, g, b, a)
    }

    static hsl(h, s, l){
        const rgb = hsl2rgb(h, s, l)
        return new Color(rgb.r, rgb.g, rgb.b, rgb.a)
    }

    static hsla(h, s, l, a){
        const rgba = hsl2rgb(h, s, l)
        return new Color(rgba.r, rgba.g, rgba.b, a)
    }

    static hexa(hexa){
        const rgb = hexa2rgb(hexa)
        return new Color(rgb.r, rgb.g, rgb.b, rgb.a)
    }

    static rgb2hsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return {h, s, l}
    }

    static hsl2rgb(h, s, l) {
        let r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hueToRgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            const hueInDegrees = h * 360;
            const hueInRadians = hueInDegrees / 360;

            r = hueToRgb(p, q, hueInRadians + 1 / 3);
            g = hueToRgb(p, q, hueInRadians);
            b = hueToRgb(p, q, hueInRadians - 1 / 3);
        }
        r = Math.round(r * 255), g =  Math.round(g * 255), b = Math.round(b * 255)
        return {r, g, b}
    }

    static hexa2rgb(hex) {
        // Remove '#' if it's present
        hex = hex.replace(/^#/, '');

        // Convert 3-digit hex to 6-digit hex if necessary
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }

        // Parse the hexadecimal color code to extract R, G, B components
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Return the RGB values as an array
        return {r, g, b}
    }

    static rgb2hexa(r, g, b) {
        // Convertir les valeurs RGB en hexadécimal
        const componentToHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };

        // Concaténer les valeurs hexadécimales pour former le code couleur hexadécimal complet
        const hexR = componentToHex(r);
        const hexG = componentToHex(g);
        const hexB = componentToHex(b);

        // Retourner le code couleur hexadécimal
        return "#" + hexR + hexG + hexB;
    }

    static hsl2hexa(h, s, l) {
        // Fonction pour convertir les valeurs de composant RGB en hexadécimal
        const componentToHex = (c) => {
            const hex = Math.round(c * 255).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };

        // Calculer les composants RGB
        let r, g, b;

        if (s === 0) {
            r = g = b = l; // Gris pour la luminosité de 0 à 1
        } else {
            const hueToRgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            const hueInDegrees = h * 360;
            const hueInRadians = hueInDegrees / 360;

            r = hueToRgb(p, q, hueInRadians + 1 / 3);
            g = hueToRgb(p, q, hueInRadians);
            b = hueToRgb(p, q, hueInRadians - 1 / 3);
        }

        // Convertir les composants RGB en valeurs hexadécimales et les concaténer
        const hexR = componentToHex(r);
        const hexG = componentToHex(g);
        const hexB = componentToHex(b);

        // Retourner le code couleur hexadécimal
        return "#" + hexR + hexG + hexB;
    }

    static hexa2hsl(hex) {
        // Supprimer '#' si présent
        hex = hex.replace(/^#/, '');

        // Convertir les valeurs hexadécimales en valeurs RGB
        const r = parseInt(hex.substring(0, 2), 16) / 255;
        const g = parseInt(hex.substring(2, 4), 16) / 255;
        const b = parseInt(hex.substring(4, 6), 16) / 255;

        // Calculer la luminosité (L)
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const l = (max + min) / 2;

        let h, s;

        // Calculer la saturation (S)
        if (max === min) {
            h = s = 0; // Achromatique
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            // Calculer la teinte (H)
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return {h, s, l}
    }

    // Method to calculate the brightness of the color
    brightness() {
        // Formula for calculating brightness: ((R * 299) + (G * 587) + (B * 114)) / 1000
        return (this._r * 299 + this._g * 587 + this._b * 114) / 1000;
    }

    // Method to convert the color to grayscale
    grayscale() {
        const grayValue = Math.round((this._r + this._g + this._b) / 3);
        return new Color(grayValue, grayValue, grayValue, this._a);
    }

    // Method to calculate the complement color
    complement() {
        const hslValues = rgb2hsl(this._r, this._g, this._b);
        const complementHue = (hslValues[0] + 0.5) % 1; // Add 0.5 for the complement
        const rgbValues = hsl2rgb(complementHue, hslValues[1], hslValues[2]);
        return new Color(rgbValues[0], rgbValues[1], rgbValues[2], this._a);
    }

    // Method to mix two colors together
    mix(color) {
        const mixedR = (this._r + color._r) / 2;
        const mixedG = (this._g + color._g) / 2;
        const mixedB = (this._b + color._b) / 2;
        const mixedA = (this._a + color._a) / 2;
        return new Color(mixedR, mixedG, mixedB, mixedA);
    }

    // Method to blend two colors with a specified ratio
    blend(color, ratio) {
        const blendedR = (1 - ratio) * this._r + ratio * color._r;
        const blendedG = (1 - ratio) * this._g + ratio * color._g;
        const blendedB = (1 - ratio) * this._b + ratio * color._b;
        const blendedA = (1 - ratio) * this._a + ratio * color._a;
        return new Color(blendedR, blendedG, blendedB, blendedA);
    }

    // Method to invert the color
    invert() {
        const invertedR = 255 - this._r;
        const invertedG = 255 - this._g;
        const invertedB = 255 - this._b;
        return new Color(invertedR, invertedG, invertedB, this._a);
    }

    set(r, g, b, a) {
        if (typeof r === 'number') {
          this.r = r;
        }
        if (typeof g === 'number') {
          this.g = g;
        }
        if (typeof b === 'number') {
          this.b = b;
        }
        if (typeof a === 'number') {
          this.a = a;
        }
        return this
    }

    copy() {
      return new Color(this._r, this._g, this._b, this._a);
    }

    toString() {
      return `rgba(${this._r},${this._g},${this._b},${this._a})`;
    }

    toStringRgb() {
        return `rgb(${this._r},${this._g},${this._b})`;
    }

    toStringRgba() {
        return this.toString();
    }

    toStringHsl() {
        const hslValues = rgb2hsl(this._r, this._g, this._b);
        // const h = Math.round(hslValues[0] * 360);
        // const s = Math.round(hslValues[1] * 100);
        // const l = Math.round(hslValues[2] * 100);
        return `hsl(${hslValues.h},${hslValues.s}%,${hslValues.Colorl}%)`;
    }

    toStringHexa() {
        return '#' + ((1 << 24) + (Math.round(this._r) << 16) + (Math.round(this._g) << 8) + Math.round(this._b)).toString(16).slice(1);
    }

    get r() {
        return this._r;
    }

    set r(value) {
        this._r = value;
    }

    get g() {
        return this._g;
    }

    set g(value) {
        this._g = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get h() {
        const hslValues = rgb2hsl(this._r, this._g, this._b);
        return hslValues.h
    }

    set h(value) {
        const hslValues = rgb2hsl(this._r, this._g, this._b);
        const rgbValues = hsl2rgb(value, hslValues[1], hslValues[2]);
        this._r = rgbValues.r;
        this._g = rgbValues.g;
        this._b = rgbValues.b;
    }

    get s() {
        const hslValues = rgb2hsl(this._r, this._g, this._b);
        return hslValues.s;
    }

    set s(value) {
        const hslValues = rgb2hsl(this._r, this._g, this._b);
        const rgbValues = hsl2rgb(hslValues[0], value, hslValues[2]);
        this._r = rgbValues.r;
        this._g = rgbValues.g;
        this._b = rgbValues.b;
    }

    get l() {
        const hslValues = rgb2hsl(this._r, this._g, this._b);
        return hslValues.l;
    }

    set l(value) {
        const hslValues = rgb2hsl(this._r, this._g, this._b);
        const rgbValues = hsl2rgb(hslValues[0], hslValues[1], value);
        this._r = rgbValues.r;
        this._g = rgbValues.g;
        this._b = rgbValues.b;
    }
  }

  export default Color;

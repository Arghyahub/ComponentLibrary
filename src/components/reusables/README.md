### Modify your tailwind config

```js
extend: {
    keyframes: {
        "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
            "0%": { opacity: 0 },  // <- Add this
            "100%": { opacity: 1 },  // <- Add this
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
            "0%": { opacity: 1 },  // <- Add this
            "100%": { opacity: 0 },  // <- Add this
        },
        },
        animation: { // increase duration if wanted
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
    },
},

```

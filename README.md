### To get tailwind suggestions in normal strings

1. Open Vscode settings and search `tailwind class attribute`
2. Add new item `.*TwStyles.*`

```json
// Or in settings.json within VS Code
{
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    "ngClass",
    ".*TwStyles.*" // <-- Here
  ]
}
```

3. Now any variable with name ending with TwStyles will get tailwind recommendations

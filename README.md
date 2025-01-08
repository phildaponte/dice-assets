# Dice Assets

This repository contains the bundled JavaScript and assets required for the 3D dice roller Bubble plugin.

## Structure

```
.
├── lib/
│   └── dice-bundle.js      # Bundled JavaScript file
└── assets/
    ├── ammo/
    │   └── ammo.wasm.wasm
    └── themes/
        └── default/
            ├── default.json
            ├── diffuse-dark.png
            ├── diffuse-light.png
            ├── normal.png
            ├── specular.jpg
            └── theme.config.json
```

## Usage

1. Add these scripts to your Bubble plugin header:
```html
<script src="https://cdn.babylonjs.com/babylon.js"></script>
<script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
<script src="https://[YOUR-GITHUB-USERNAME].github.io/dice-assets/lib/dice-bundle.js"></script>
```

2. Configure DiceBox in your code:
```javascript
const box = new DiceBox({
    element: '#dice-box',
    assetPath: 'https://[YOUR-GITHUB-USERNAME].github.io/dice-assets/assets/',
    theme: 'default',
    // ... other options
});
```

## Credits

Assets and core functionality are from the [@3d-dice/dice-box](https://github.com/3d-dice/dice-box) library.

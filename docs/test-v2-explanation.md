# Test-v2.html Documentation

This file demonstrates a basic implementation of the 3D dice roller using a single bundled JavaScript file. Here's a detailed breakdown of how it works:

## Page Structure

1. **Required Dependencies**
   - BabylonJS core library
   - BabylonJS loaders
   - Our custom single-bundle dice implementation (`dice-bundle.single.js`)

2. **HTML Structure**
   - A single container div with ID `dice-box`
   - Basic styling for a 400x300px black container

## JavaScript Implementation

### 1. Bundle Loading
```javascript
function loadDiceBundle() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'lib/dice-bundle.single.js';
        // ... handle load events
    });
}
```
- Dynamically loads the dice bundle using a Promise
- Uses our single-bundle version to avoid chunk loading issues
- Provides proper error handling for load failures

### 2. Initialization Flow
The code follows this sequence:
1. Waits for page load
2. Loads the dice bundle
3. Creates a DiceBox instance with configuration:
   ```javascript
   const box = new window.DiceBox({
       element: '#dice-box',
       assetPath: 'assets/',
       theme: 'default',
       scale: 5,
       onRollComplete: (results) => {
           console.log('Roll complete! Results:', results);
       }
   });
   ```

### 3. Dice Rolling
- Initializes the dice box using `box.init()`
- Performs a test roll of 2d6 (two six-sided dice)
- Logs all steps and results for debugging

## Error Handling
- Comprehensive error catching at multiple levels:
  1. Bundle loading errors
  2. Initialization errors
  3. Rolling errors
- Detailed error logging including stack traces

## Key Differences from test.html
1. Uses the single-bundle version to avoid chunk loading issues
2. Simplified initialization process
3. More focused on demonstrating basic functionality
4. Enhanced error logging for debugging

## Usage
1. Open the page in a web browser
2. Check the console (F12) for detailed logging
3. Watch for the dice roll animation in the black container
4. Results will be logged to the console

## Troubleshooting
If you encounter issues:
1. Check the browser console for detailed error messages
2. Verify all asset paths are correct
3. Ensure the bundle is properly loaded (check network tab)
4. Confirm BabylonJS dependencies are loaded successfully

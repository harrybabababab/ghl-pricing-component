# GHL Pricing Component

A simple, embeddable pricing component designed for use in GetHighLevel (GHL) landing pages.

## Features

- Clean, modern pricing table design
- Toggle between monthly and yearly pricing with confetti effect
- Responsive layout for all device sizes
- Highlight for popular/recommended plans
- Easy customization via JavaScript

## How to Use with GHL

### 1. Embed via iframe

Add this component to your GHL landing page using an iframe:

```html
<iframe 
  src="https://harrybabababab.github.io/ghl-pricing-component/" 
  width="100%" 
  height="800" 
  frameborder="0"
  style="border: none; width: 100%; overflow: hidden;"
>
</iframe>
```

### 2. Customize the Plans

To customize the pricing plans, edit the `pricing.js` file and modify the `demoPlans` array:

```javascript
const demoPlans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Feature 1",
      "Feature 2",
      // Add or remove features
    ],
    description: "Your description",
    buttonText: "Start Free Trial",
    href: "/sign-up", // Link to your signup page
    isPopular: false,
  },
  // Add more plans as needed
];
```

## Deployment

This project is deployed using GitHub Pages, making it easy to embed in your GHL landing pages.

## Customization

You can customize colors, fonts, and other styles by editing the `styles.css` file.

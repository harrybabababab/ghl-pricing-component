// Define demo plans
const demoPlans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

// Utility function for class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Create the PricingComponent
function PricingComponent() {
  const [isMonthly, setIsMonthly] = React.useState(true);
  
  const handleToggle = () => {
    const newValue = !isMonthly;
    setIsMonthly(newValue);
    
    if (!newValue) {
      // Trigger confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#3b82f6', '#10b981', '#ef4444', '#f59e0b'],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['circle'],
      });
    }
  };
  
  return React.createElement(
    'div',
    { className: 'container py-20 mx-auto px-4' },
    [
      // Header section
      React.createElement(
        'div',
        { className: 'text-center space-y-4 mb-12', key: 'header' },
        [
          React.createElement(
            'h2',
            { className: 'text-4xl font-bold tracking-tight sm:text-5xl', key: 'title' },
            'Simple, Transparent Pricing'
          ),
          React.createElement(
            'p',
            { className: 'text-muted-foreground text-lg whitespace-pre-line', key: 'description' },
            'Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.'
          )
        ]
      ),
      
      // Toggle section
      React.createElement(
        'div',
        { className: 'flex justify-center mb-10', key: 'toggle' },
        [
          React.createElement(
            'label',
            { className: 'relative inline-flex items-center cursor-pointer', key: 'label' },
            React.createElement(
              'input',
              {
                type: 'checkbox',
                checked: !isMonthly,
                onChange: handleToggle,
                className: 'sr-only peer',
                key: 'checkbox'
              }
            ),
            React.createElement(
              'div',
              {
                className: 'w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600',
                key: 'toggle'
              }
            )
          ),
          React.createElement(
            'span',
            { className: 'ml-2 font-semibold', key: 'toggle-label' },
            'Annual billing ',
            React.createElement('span', { className: 'text-blue-600' }, '(Save 20%)')
          )
        ]
      ),
      
      // Plans grid
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4', key: 'plans' },
        demoPlans.map((plan, index) => 
          React.createElement(
            'div',
            {
              key: `plan-${index}`,
              className: cn(
                'rounded-2xl border p-6 bg-background text-center flex flex-col',
                plan.isPopular ? 'border-blue-500 border-2' : 'border-gray-200',
                !plan.isPopular && 'mt-5'
              )
            },
            [
              // Popular tag
              plan.isPopular && React.createElement(
                'div',
                {
                  className: 'absolute top-0 right-0 bg-blue-500 py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center',
                  key: 'popular'
                },
                [
                  React.createElement(window.LucideReact.Star, {
                    className: 'text-white h-4 w-4 fill-white',
                    key: 'star'
                  }),
                  React.createElement(
                    'span',
                    { className: 'text-white ml-1 font-sans font-semibold', key: 'popular-text' },
                    'Popular'
                  )
                ]
              ),
              
              // Plan content
              React.createElement(
                'div',
                { className: 'flex-1 flex flex-col', key: 'content' },
                [
                  React.createElement(
                    'p',
                    { className: 'text-base font-semibold text-gray-500', key: 'name' },
                    plan.name
                  ),
                  React.createElement(
                    'div',
                    { className: 'mt-6 flex items-center justify-center gap-x-2', key: 'pricing' },
                    [
                      React.createElement(
                        'span',
                        { className: 'text-5xl font-bold tracking-tight', key: 'price' },
                        '$' + (isMonthly ? plan.price : plan.yearlyPrice)
                      ),
                      plan.period !== "Next 3 months" && React.createElement(
                        'span',
                        { className: 'text-sm font-semibold leading-6 tracking-wide text-gray-500', key: 'period' },
                        '/ ' + plan.period
                      )
                    ]
                  ),
                  React.createElement(
                    'p',
                    { className: 'text-xs leading-5 text-gray-500', key: 'billing' },
                    isMonthly ? 'billed monthly' : 'billed annually'
                  ),
                  React.createElement(
                    'ul',
                    { className: 'mt-5 gap-2 flex flex-col', key: 'features' },
                    plan.features.map((feature, idx) => 
                      React.createElement(
                        'li',
                        { key: `feature-${idx}`, className: 'flex items-start gap-2' },
                        [
                          React.createElement(window.LucideReact.Check, {
                            className: 'h-4 w-4 text-blue-500 mt-1 flex-shrink-0',
                            key: 'check'
                          }),
                          React.createElement(
                            'span',
                            { className: 'text-left', key: 'feature-text' },
                            feature
                          )
                        ]
                      )
                    )
                  ),
                  React.createElement('hr', { className: 'w-full my-4', key: 'divider' }),
                  React.createElement(
                    'a',
                    {
                      href: plan.href,
                      className: cn(
                        'group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter rounded-md px-4 py-2',
                        'transform-gpu transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-500 hover:ring-offset-1 hover:bg-blue-500 hover:text-white',
                        plan.isPopular
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-900 border border-gray-200'
                      ),
                      key: 'button'
                    },
                    plan.buttonText
                  ),
                  React.createElement(
                    'p',
                    { className: 'mt-6 text-xs leading-5 text-gray-500', key: 'description' },
                    plan.description
                  )
                ]
              )
            ]
          )
        )
      )
    ]
  );
}

// Render the component when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(React.createElement(PricingComponent), root);
});

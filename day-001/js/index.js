const calculateAmount = (amount, percentage) => +amount * (1 - percentage / 100);

// Use de  funcional (Strategy funcional) en regla como estrategia, y con el orden del array (Chain of Responsibility)
const createRules = () => [
  {
    name: 'PREMIUM',
    isApplicable: ({ customerType }) => customerType === 'PREMIUM',
    percentage: 20,
  },
  {
    name: 'ITEMS_OVER_10',
    isApplicable: ({ items }) => items > 10,
    percentage: 10,
  },
  {
    name: 'AMOUNT_OVER_1000',
    isApplicable: ({ amount }) => amount > 1000,
    percentage: 5,
  },
];

// Uso de SRP solo calcula y DIR recibe las reglas
const calculateDiscount = (order, rules) => {
  const rule = rules.find((r) => r.isApplicable(order));

  if (!rule) {
    return {
      originalAmount: order.amount,
      discountApplied: 'NONE',
      discountPercentage: 0,
      finalAmount: order.amount,
    };
  }

  return {
    originalAmount: order.amount,
    discountApplied: rule.name,
    discountPercentage: rule.percentage,
    finalAmount: calculateAmount(order.amount, rule.percentage),
  };
};

const rules = createRules();
const order = {
  amount: 1200,
  customerType: 'REGULAR',
  items: 13,
};

console.log(calculateDiscount(order, rules));

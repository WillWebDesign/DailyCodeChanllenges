from dataclasses import dataclass


@dataclass(frozen=True)
class DiscountResult:
    original_amount: float
    discount_applied: str
    discount_percentage: int
    final_amount: float


def calculate_amount(amount: float, percentage: int) -> float:
    return amount * (1 - percentage / 100)


# Strategy funcional y COR
def create_rules():
    return [
        {
            "name": "PREMIUM",
            "is_applicable": lambda o: o["customerType"] == "PREMIUM",
            "percentage": 20,
        },
        {
            "name": "ITEMS_OVER_10",
            "is_applicable": lambda o: o["items"] > 10,
            "percentage": 10,
        },
        {
            "name": "AMOUNT_OVER_1000",
            "is_applicable": lambda o: o["amount"] > 1000,
            "percentage": 5,
        },
    ]

# SRP, DIR
def calculate_discount(order: dict, rules) -> DiscountResult:
    rule = next((r for r in rules if r["is_applicable"](order)), None)

    if not rule:
        return DiscountResult(order["amount", "NONE", 0, order["amount"]])

    return DiscountResult(
        order["amount"],
        rule["name"],
        rule["percentage"],
        calculate_amount(order["amount"], rule["percentage"]),
    )


rules = create_rules()
order = {"amount": 1200, "customerType": "REGULAR", "items": 13}

print(calculate_discount(order, rules))

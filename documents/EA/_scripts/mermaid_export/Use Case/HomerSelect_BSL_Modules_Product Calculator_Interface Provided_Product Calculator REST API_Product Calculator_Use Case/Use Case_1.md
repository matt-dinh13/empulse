# Use Case

```mermaid
graph TD
    Product_offer_recalculation["Product offer recalculation"]
    Alternative_product_offer_calculation["Alternative product offer calculation"]
    Offer_calculation_validation["Offer calculation - validation"]
    Product_offer_calculation["Product offer calculation"]
    POST_alternatives["POST alternatives"]
    POST_recalculation["POST recalculation"]
    POST_calculation["POST calculation"]
    POST_calculation -->|unnamed| Product_offer_calculation
    POST_alternatives -->|unnamed| Offer_calculation_validation
    POST_recalculation -->|unnamed| Offer_calculation_validation
    POST_calculation -->|unnamed| Offer_calculation_validation
    POST_alternatives -->|unnamed| Alternative_product_offer_calculation
    POST_recalculation -->|unnamed| Product_offer_recalculation
```

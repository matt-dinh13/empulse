# Product offer calculator

```mermaid
sequenceDiagram
    participant Product_calculator as Product calculator
    participant Product_catalog as Product catalog
    participant User_Application as User/Application
    Product_calculator->>Product_calculator: Calculate alternative offers
    Product_calculator->>Product_catalog: Get product data
    Product_calculator->>Product_calculator: Calculate product offers
    Product_calculator->>Product_catalog: Get product data
    User_Application->>Product_calculator: Recalculate product offer
    Product_calculator->>Product_catalog: Get product data
    User_Application->>Product_calculator: Get product offers
    User_Application->>Product_calculator: Calculate alternative offers
    Product_calculator->>Product_calculator: Recalculate product offer
```

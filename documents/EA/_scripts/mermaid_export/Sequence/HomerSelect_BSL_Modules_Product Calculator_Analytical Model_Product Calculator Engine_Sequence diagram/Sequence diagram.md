# Sequence diagram

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Sequence diagram
- **Diagram ID**: 162643
- **Elements**: 8
- **Connectors**: 12

```mermaid
sequenceDiagram
    participant Product_offer_calculator as Product offer calculator
    participant Insurance_module_INSR as Insurance module (INSR)
    participant Installment_schedule_IS as Installment schedule (IS)
    participant Product_catalog_PRC as Product catalog (PRC)
    participant Orchestrator as Orchestrator
    participant Account_pricing_AP as Account pricing (AP)
    Product_offer_calculator->>+Insurance_module_INSR: check insurance eligibility
    Installment_schedule_IS->>+Product_offer_calculator: installment schedule
    Insurance_module_INSR->>+Product_offer_calculator: insurance eligibility
    Product_offer_calculator->>+Product_catalog_PRC: get product data
    Product_offer_calculator->>+Orchestrator: generated offer financial parameters
    Orchestrator->>+Product_offer_calculator: Calculate product offer
    Account_pricing_AP->>+Product_offer_calculator: revolving offer financial parameters
    Product_catalog_PRC->>+Product_offer_calculator: product data
    Product_offer_calculator->>+Product_offer_calculator: calculate financial parameters
    Product_offer_calculator->>+Installment_schedule_IS: calculate installment schedule
    Product_offer_calculator->>+Product_offer_calculator: combine and sort offers
    Product_offer_calculator->>+Account_pricing_AP: calculate revolving offer
```

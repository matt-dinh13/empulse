# Product Offer Calculation

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/_Component model/Product Offer Calculation
- **Diagram ID**: 154614
- **Elements**: 5
- **Connectors**: 20

```mermaid
sequenceDiagram
    participant Product_Calculator as Product Calculator
    participant Product_Catalog as Product Catalog
    participant LOR_Product_Offer_Manager as LOR Product Offer Manager
    participant LOR_Process_Manager as LOR Process Manager
    participant Account_Pricing as Account Pricing
    Product_Calculator->>+Product_Catalog: Get parameters for offer recalculation
    Product_Calculator->>+Product_Catalog: Select products
    LOR_Product_Offer_Manager->>+Product_Calculator: Calculate offers
    LOR_Product_Offer_Manager->>+LOR_Product_Offer_Manager: Choose Primary offer
    LOR_Process_Manager->>+LOR_Product_Offer_Manager: Recalculate offer
    Product_Calculator->>+Account_Pricing: Recalculate offer for REL products
    LOR_Product_Offer_Manager->>+Product_Calculator: Recalculate offer
    Product_Calculator->>+Product_Calculator: Recalculate product offer
    LOR_Process_Manager->>+LOR_Product_Offer_Manager: Get Alternative offer
    LOR_Product_Offer_Manager->>+LOR_Product_Offer_Manager: Colect parameters for Alternative offers calculation
    LOR_Product_Offer_Manager->>+LOR_Product_Offer_Manager: Colect parameters for offer recalculation
    Product_Calculator->>+Product_Calculator: Calculate product offers
    LOR_Product_Offer_Manager->>+Product_Calculator: Calculate offers
    Product_Calculator->>+Product_Catalog: Select services for product
    LOR_Product_Offer_Manager->>+LOR_Product_Offer_Manager: Colect parameters for Primary offers calculation
    Product_Calculator->>+Account_Pricing: Calculate offer for REL products
    Product_Calculator->>+Product_Catalog: Get parameters for offer calculation
    Product_Calculator->>+Product_Calculator: Search for original offer
    LOR_Product_Offer_Manager->>+LOR_Product_Offer_Manager: Choose or refuse Alternative offer
    LOR_Process_Manager->>+LOR_Product_Offer_Manager: Get Primary offer
```

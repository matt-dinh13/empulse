# Sales Features

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Interface provided
- **Diagram ID**: 148878
- **Elements**: 12
- **Connectors**: 10

```mermaid
classDiagram
    class Sales_Features_SalesFeaturesDto["Sales Features : SalesFeaturesDto"]
    class ValidationError["ValidationError"]
    class MarketingOfferAvailabilityResponse["MarketingOfferAvailabilityResponse"]
    class MarketingOfferAvailabilityResultDto["MarketingOfferAvailabilityResultDto"]
    class MarketingOfferAvailabilityInputDto["MarketingOfferAvailabilityInputDto"]
    class MarketingOfferAvailabilityInputItemDto["MarketingOfferAvailabilityInputItemDto"]
    class marketing_offer_availability["marketing-offer-availability"]
    class InitialTransactionType["InitialTransactionType"]
    class ProductTypeCode["ProductTypeCode"]
    class SalesFeaturesDto["SalesFeaturesDto"]
    class sales_features["sales-features"]
    class Product_catalog_API["Product catalog API"]
    sales_features ..> SalesFeaturesDto : unnamed
    marketing_offer_availability ..> MarketingOfferAvailabilityInputDto : unnamed
    marketing_offer_availability ..> MarketingOfferAvailabilityResponse : unnamed
    MarketingOfferAvailabilityInputItemDto ..> ProductTypeCode : unnamed
    MarketingOfferAvailabilityInputItemDto ..> InitialTransactionType : unnamed
    MarketingOfferAvailabilityInputDto ..> MarketingOfferAvailabilityInputItemDto : unnamed
    MarketingOfferAvailabilityResponse ..> MarketingOfferAvailabilityResultDto : unnamed
    MarketingOfferAvailabilityResponse ..> ValidationError : unnamed
    Product_catalog_API ..> sales_features : /data-fro-product-calculator
    Product_catalog_API ..> marketing_offer_availability : /marketing-offer-availability
```

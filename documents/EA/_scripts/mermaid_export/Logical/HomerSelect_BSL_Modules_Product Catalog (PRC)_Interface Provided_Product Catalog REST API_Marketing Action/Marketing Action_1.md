# Marketing Action

```mermaid
classDiagram
    class Paging["Paging"]
    class marketingActionSearchParameters["marketingActionSearchParameters"]
    class search["search"]
    class LocalizedString["LocalizedString"]
    class ValidationErrorDto["ValidationErrorDto"]
    class MarketingActionResponse["MarketingActionResponse"]
    class MarketingActionDto["MarketingActionDto"]
    class active["active"]
    class marketing_actions["marketing-actions"]
    class Product_catalog_API["Product catalog API"]
    search --> Paging : unnamed
    search --> marketingActionSearchParameters : unnamed
    marketing_actions --> search : /search
    marketing_actions --> active : /active
    MarketingActionResponse --> MarketingActionDto : unnamed
    active --> MarketingActionDto : unnamed
    marketing_actions --> MarketingActionDto : unnamed
    marketing_actions --> MarketingActionResponse : unnamed
    MarketingActionResponse --> ValidationErrorDto : unnamed
    MarketingActionDto --> LocalizedString : unnamed
    Product_catalog_API --> marketing_actions : /marketing-actions
```

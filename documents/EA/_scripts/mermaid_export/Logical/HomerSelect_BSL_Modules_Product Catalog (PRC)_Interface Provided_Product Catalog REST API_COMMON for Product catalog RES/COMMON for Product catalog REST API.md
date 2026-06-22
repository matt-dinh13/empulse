# COMMON for Product catalog REST API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API
- **Diagram ID**: 163846
- **Elements**: 10
- **Connectors**: 1

```mermaid
classDiagram
    class ActivationInputDto["ActivationInputDto"]
    class RoundingTypeDto["RoundingTypeDto"]
    class Version_Status_Activation["Version Status - Activation"]
    class Version_Status["Version Status"]
    class Paging["Paging"]
    class ValidationErrorDto["ValidationErrorDto"]
    class LocalizedString["LocalizedString"]
    class ADD_CodeNameItemDto["{ADD}CodeNameItemDto"]
    class InitialTransactionTypeDto["InitialTransactionTypeDto"]
    class ProductTypeDto["ProductTypeDto"]
    ActivationInputDto ..> Version_Status_Activation : unnamed
```

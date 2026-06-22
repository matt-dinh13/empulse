# Product Catalogue Common Types

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Interface Provided/Types
- **Diagram ID**: 103812
- **Elements**: 6
- **Connectors**: 2

```mermaid
classDiagram
    class LocalizedString["LocalizedString"]
    class LocalizedStringItem["LocalizedStringItem"]
    class CheckingLevelType["CheckingLevelType"]
    class ValidationResult["ValidationResult"]
    class RoundingDto["RoundingDto"]
    class InstallmentScheduleMethodTypeDto["InstallmentScheduleMethodTypeDto"]
    ValidationResult ..> CheckingLevelType : unnamed
    LocalizedString ..> LocalizedStringItem : unnamed
```

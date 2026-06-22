# SalesDescriptionDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions
- **Diagram ID**: 161066
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class LocalizedString["LocalizedString"]
    class SalesDescriptionAttributeDto["SalesDescriptionAttributeDto"]
    class MOD_SalesDescriptionAssignmentDto["{MOD}SalesDescriptionAssignmentDto"]
    class SalesDescriptionDto["SalesDescriptionDto"]
    SalesDescriptionDto ..> MOD_SalesDescriptionAssignmentDto : unnamed
    SalesDescriptionDto ..> SalesDescriptionAttributeDto : unnamed
    SalesDescriptionAttributeDto ..> LocalizedString : unnamed
```

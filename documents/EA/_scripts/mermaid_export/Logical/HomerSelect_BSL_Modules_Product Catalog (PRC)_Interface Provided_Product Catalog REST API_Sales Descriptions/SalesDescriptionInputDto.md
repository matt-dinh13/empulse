# SalesDescriptionInputDto

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions
- **Diagram ID**: 161067
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class LocalizedString["LocalizedString"]
    class Input["Input"]
    class SalesDescriptionAttributeDto["SalesDescriptionAttributeDto"]
    class MOD_SalesDescriptionAssignmentDto["{MOD}SalesDescriptionAssignmentDto"]
    class SalesDescriptionInputDto["SalesDescriptionInputDto"]
    SalesDescriptionInputDto ..> Input : unnamed
    SalesDescriptionAttributeDto ..> LocalizedString : unnamed
    Input ..> MOD_SalesDescriptionAssignmentDto : unnamed
    Input ..> SalesDescriptionAttributeDto : unnamed
```

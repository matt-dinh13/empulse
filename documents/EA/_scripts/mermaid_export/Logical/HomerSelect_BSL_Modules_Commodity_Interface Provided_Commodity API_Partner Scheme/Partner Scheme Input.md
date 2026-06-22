# Partner Scheme Input

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Partner Scheme
- **Diagram ID**: 158946
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class partnerSchemeAttributeDto["partnerSchemeAttributeDto"]
    class Input["Input"]
    class MOD_PartnerSchemeInputDto["{MOD}PartnerSchemeInputDto"]
    MOD_PartnerSchemeInputDto ..> Input : unnamed
    Input --> partnerSchemeAttributeDto : unnamed
```

# Partner Scheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Partner Scheme
- **Diagram ID**: 158944
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class MOD_PartnerSchemeInputDto["{MOD}PartnerSchemeInputDto"]
    class Partner_Scheme_Partner_Scheme_Input["Partner Scheme : Partner Scheme Input"]
    class partnerSchemeAttributeDto["partnerSchemeAttributeDto"]
    class MOD_partnerSchemeSearchParameters["{MOD}partnerSchemeSearchParameters"]
    class ValidationError["ValidationError"]
    class PartnerSchemeResponse["PartnerSchemeResponse"]
    class MOD_partnerSchemeDto["{MOD}partnerSchemeDto"]
    class partner_scheme["partner-scheme"]
    class Commodity_API["Commodity API"]
    partner_scheme ..> MOD_partnerSchemeDto : unnamed
    PartnerSchemeResponse ..> MOD_partnerSchemeDto : unnamed
    partner_scheme ..> PartnerSchemeResponse : unnamed
    PartnerSchemeResponse ..> ValidationError : unnamed
    partner_scheme ..> MOD_partnerSchemeSearchParameters : unnamed
    MOD_partnerSchemeDto ..> partnerSchemeAttributeDto : unnamed
    partner_scheme ..> MOD_PartnerSchemeInputDto : unnamed
    Commodity_API ..> partner_scheme : /partner-scheme
```

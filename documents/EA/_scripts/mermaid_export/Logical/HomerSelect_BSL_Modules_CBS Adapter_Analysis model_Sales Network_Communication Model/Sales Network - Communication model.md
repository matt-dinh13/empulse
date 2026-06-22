# Sales Network - Communication model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Sales Network/Communication Model
- **Diagram ID**: 55311
- **Elements**: 11
- **Connectors**: 13

```mermaid
classDiagram
    class Payment_Status["Payment Status"]
    class CommResult["CommResult"]
    class Processing_PartnerRequest["Processing PartnerRequest"]
    class SalesroomDto["SalesroomDto"]
    class SalesroomStatusDto["SalesroomStatusDto"]
    class partnerTypeDto["partnerTypeDto"]
    class PartnerRequest["PartnerRequest"]
    class Legend["Legend"]
    class SELLERPLACE130_Type_Sellerplace["SELLERPLACE130 Type Sellerplace"]
    class SELLERPLACE130_Status["SELLERPLACE130 Status"]
    class SELLERPLACE130["SELLERPLACE130"]
    PartnerRequest ..> Payment_Status : unnamed
    PartnerRequest ..> SalesroomStatusDto : unnamed
    PartnerRequest ..> Payment_Status : unnamed
    PartnerRequest ..> SalesroomDto : unnamed
    PartnerRequest ..> Processing_PartnerRequest : unnamed
    PartnerRequest ..> partnerTypeDto : unnamed
    PartnerRequest ..> SELLERPLACE130 : unnamed
    SalesroomDto ..> Payment_Status : unnamed
    SalesroomDto ..> SalesroomStatusDto : unnamed
    SalesroomDto ..> Payment_Status : unnamed
    SELLERPLACE130 ..> SELLERPLACE130_Type_Sellerplace : unnamed
    SELLERPLACE130 ..> CommResult : unnamed
    SELLERPLACE130 ..> SELLERPLACE130_Status : unnamed
```

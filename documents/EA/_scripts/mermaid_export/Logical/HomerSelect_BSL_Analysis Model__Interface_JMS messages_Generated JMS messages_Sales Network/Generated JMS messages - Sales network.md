# Generated JMS messages - Sales network

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Sales Network
- **Diagram ID**: 135042
- **Elements**: 7
- **Connectors**: 9

```mermaid
classDiagram
    class Payment_Status["Payment Status"]
    class Legend["Legend"]
    class SalesroomStatusDto["SalesroomStatusDto"]
    class PartnerTypeDto["PartnerTypeDto"]
    class MOD_PartnerRequest["{MOD}PartnerRequest"]
    class SalesroomDto["SalesroomDto"]
    unnamed --> SalesroomDto : unnamed
    MOD_PartnerRequest ..> SalesroomDto : unnamed
    unnamed --> MOD_PartnerRequest : unnamed
    MOD_PartnerRequest ..> PartnerTypeDto : unnamed
    SalesroomDto ..> SalesroomStatusDto : unnamed
    MOD_PartnerRequest ..> Payment_Status : unnamed
    MOD_PartnerRequest ..> Payment_Status : unnamed
    SalesroomDto ..> Payment_Status : unnamed
    SalesroomDto ..> Payment_Status : unnamed
```

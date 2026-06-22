# customerPersonCreateOrUpdate

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person
- **Diagram ID**: 137764
- **Elements**: 14
- **Connectors**: 12

```mermaid
classDiagram
    class roleUpdateResultCode["roleUpdateResultCode"]
    class roleCreateResultCode["roleCreateResultCode"]
    class roleCreateOrUpdateResult["roleCreateOrUpdateResult"]
    class abstractPifEntity["abstractPifEntity"]
    class abstractPifAuditableEntity["abstractPifAuditableEntity"]
    class MOD_partyRole["{MOD}partyRole"]
    class abstractCustomerPersonRequest["abstractCustomerPersonRequest"]
    class MOD_person["{MOD}person"]
    class personRole["personRole"]
    class customerPerson["customerPerson"]
    class customerPersonCreateOrUpdateResponse["customerPersonCreateOrUpdateResponse"]
    class customerPersonCreateOrUpdateRequest["customerPersonCreateOrUpdateRequest"]
    class createOptions["createOptions"]
    class roleUpdateMode["roleUpdateMode"]
    abstractCustomerPersonRequest <|-- customerPersonCreateOrUpdateRequest : unnamed
    customerPersonCreateOrUpdateRequest ..> roleUpdateMode : unnamed
    customerPersonCreateOrUpdateRequest ..> createOptions : unnamed
    roleCreateOrUpdateResult <|-- customerPersonCreateOrUpdateResponse : unnamed
    abstractCustomerPersonRequest ..> customerPerson : unnamed
    personRole <|-- customerPerson : unnamed
    abstractPifEntity <|-- abstractPifAuditableEntity : unnamed
    personRole ..> MOD_person : unnamed
    abstractPifAuditableEntity <|-- MOD_partyRole : unnamed
    MOD_partyRole <|-- personRole : unnamed
    roleCreateOrUpdateResult ..> roleCreateResultCode : unnamed
    roleCreateOrUpdateResult ..> roleUpdateResultCode : unnamed
```

# customerPersonUpdate

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person
- **Diagram ID**: 137762
- **Elements**: 11
- **Connectors**: 9

```mermaid
classDiagram
    class abstractPifAuditableEntity["abstractPifAuditableEntity"]
    class roleUpdateResultCode["roleUpdateResultCode"]
    class MOD_partyRole["{MOD}partyRole"]
    class abstractCustomerPersonRequest["abstractCustomerPersonRequest"]
    class MOD_person["{MOD}person"]
    class personRole["personRole"]
    class customerPerson["customerPerson"]
    class roleUpdateMode["roleUpdateMode"]
    class roleUpdateResult["roleUpdateResult"]
    class customerPersonUpdateResponse["customerPersonUpdateResponse"]
    class customerPersonUpdateRequest["customerPersonUpdateRequest"]
    abstractCustomerPersonRequest <|-- customerPersonUpdateRequest : unnamed
    customerPersonUpdateRequest ..> roleUpdateMode : unnamed
    abstractCustomerPersonRequest ..> customerPerson : unnamed
    roleUpdateResult <|-- customerPersonUpdateResponse : unnamed
    personRole <|-- customerPerson : unnamed
    roleUpdateResult ..> roleUpdateResultCode : unnamed
    personRole ..> MOD_person : unnamed
    abstractPifAuditableEntity <|-- MOD_partyRole : unnamed
    MOD_partyRole <|-- personRole : unnamed
```

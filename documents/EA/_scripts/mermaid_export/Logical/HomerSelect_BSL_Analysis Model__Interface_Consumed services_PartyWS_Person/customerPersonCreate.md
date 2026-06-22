# customerPersonCreate

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person
- **Diagram ID**: 137761
- **Elements**: 11
- **Connectors**: 8

```mermaid
classDiagram
    class abstractPifEntity["abstractPifEntity"]
    class abstractPifAuditableEntity["abstractPifAuditableEntity"]
    class roleCreateResultCode["roleCreateResultCode"]
    class MOD_partyRole["{MOD}partyRole"]
    class abstractCustomerPersonRequest["abstractCustomerPersonRequest"]
    class MOD_person["{MOD}person"]
    class personRole["personRole"]
    class customerPerson["customerPerson"]
    class createOptions["createOptions"]
    class customerPersonCreateResponse["customerPersonCreateResponse"]
    class customerPersonCreateRequest["customerPersonCreateRequest"]
    abstractCustomerPersonRequest <|-- customerPersonCreateRequest : unnamed
    customerPersonCreateRequest ..> createOptions : unnamed
    abstractCustomerPersonRequest ..> customerPerson : unnamed
    personRole <|-- customerPerson : unnamed
    abstractPifEntity <|-- abstractPifAuditableEntity : unnamed
    personRole ..> MOD_person : unnamed
    abstractPifAuditableEntity <|-- MOD_partyRole : unnamed
    MOD_partyRole <|-- personRole : unnamed
```

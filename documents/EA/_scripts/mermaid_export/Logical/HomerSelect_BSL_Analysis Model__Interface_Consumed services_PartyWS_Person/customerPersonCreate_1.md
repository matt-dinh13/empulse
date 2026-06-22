# customerPersonCreate

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
    customerPersonCreateRequest --> abstractCustomerPersonRequest : unnamed
    customerPersonCreateRequest --> createOptions : unnamed
    abstractCustomerPersonRequest --> customerPerson : unnamed
    customerPerson --> personRole : unnamed
    abstractPifAuditableEntity --> abstractPifEntity : unnamed
    personRole --> MOD_person : unnamed
    MOD_partyRole --> abstractPifAuditableEntity : unnamed
    personRole --> MOD_partyRole : unnamed
```

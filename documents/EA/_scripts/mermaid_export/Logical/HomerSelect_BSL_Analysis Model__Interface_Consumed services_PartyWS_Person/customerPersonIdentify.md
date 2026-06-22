# customerPersonIdentify

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person
- **Diagram ID**: 137763
- **Elements**: 10
- **Connectors**: 7

```mermaid
classDiagram
    class MOD_partyRole["{MOD}partyRole"]
    class validationError["validationError"]
    class identificationResultCode["identificationResultCode"]
    class roleIdentifyResult["roleIdentifyResult"]
    class customerPersonIdentifyResponse["customerPersonIdentifyResponse"]
    class abstractCustomerPersonRequest["abstractCustomerPersonRequest"]
    class personRole["personRole"]
    class customerPerson["customerPerson"]
    class identifyOptions["identifyOptions"]
    class customerPersonIdentifyRequest["customerPersonIdentifyRequest"]
    roleIdentifyResult <|-- customerPersonIdentifyResponse : unnamed
    abstractCustomerPersonRequest <|-- customerPersonIdentifyRequest : unnamed
    customerPersonIdentifyRequest ..> identifyOptions : unnamed
    abstractCustomerPersonRequest ..> customerPerson : unnamed
    personRole <|-- customerPerson : unnamed
    roleIdentifyResult ..> identificationResultCode : unnamed
    MOD_partyRole <|-- personRole : unnamed
```

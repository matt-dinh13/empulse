# SME Classes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22777 (CSI-3042) SME Project - Additional Cards for SME account/SME Object Model
- **Diagram ID**: 157245
- **Elements**: 11
- **Connectors**: 8

```mermaid
classDiagram
    class ServiceType["ServiceType"]
    class ServiceRole["ServiceRole"]
    class ContractCardService["ContractCardService"]
    class AccountRole["AccountRole"]
    class CardRole["CardRole"]
    class ServicePartyRole["ServicePartyRole"]
    class Party["Party"]
    class ContractService["ContractService"]
    class Service["Service"]
    Service --> ServiceType : unnamed
    ContractService --> Service : unnamed
    ContractService o-- ServicePartyRole : unnamed
    ServicePartyRole --> Party : unnamed
    unnamed --> ServiceType : unnamed
    ContractService <|-- ContractCardService : unnamed
    Service o-- ServiceRole : unnamed
    unnamed --> ServiceType : unnamed
```

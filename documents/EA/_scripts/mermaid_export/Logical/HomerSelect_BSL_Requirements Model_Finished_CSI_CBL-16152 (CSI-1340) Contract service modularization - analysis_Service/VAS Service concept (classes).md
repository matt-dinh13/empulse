# VAS Service concept (classes)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Service concept (object model)
- **Diagram ID**: 151173
- **Elements**: 17
- **Connectors**: 13

```mermaid
classDiagram
    class Contract["Contract"]
    class Commodity["Commodity"]
    class Insurance_Service["Insurance Service"]
    class SalesQuote["SalesQuote"]
    class Transaction_Change_Request["Transaction Change Request"]
    class AccountTransaction["AccountTransaction"]
    class Document["Document"]
    class Supplement["Supplement"]
    class Contract_Supplement["Contract Supplement"]
    class VAS_Deal["VAS Deal"]
    class Account_Service["Account Service"]
    class Account["Account"]
    class Service["Service"]
    class Service_Catalogue["Service Catalogue"]
    class Account_Management["Account Management"]
    class Contract_Service["Contract Service"]
    class Contract_Supplement["Contract Supplement"]
    SalesQuote --> Commodity : can refer to
    Account_Service --> Service : is defined by
    Account o-- Contract_Supplement : has
    Account o-- Account_Service : has
    Account_Service <|-- Insurance_Service : unnamed
    SalesQuote --> Account_Service : can refer to
    Insurance_Service --> VAS_Deal : refers to
    Contract_Supplement o-- SalesQuote : has
    Contract_Supplement o-- Transaction_Change_Request : can be changed by
    Contract_Supplement o-- Document : unnamed
    Contract_Supplement --> Supplement : is defined by
    Transaction_Change_Request --> AccountTransaction : unnamed
    SalesQuote o-- AccountTransaction : can be charged by
```

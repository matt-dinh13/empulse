# Collection tool operation domains

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Logical Data Model
- **Diagram ID**: 85504
- **Elements**: 9
- **Connectors**: 7

```mermaid
classDiagram
    class Contract_Supplement_Document["Contract Supplement Document"]
    class Client_Supplement_Document["Client Supplement Document"]
    class Contract_Supplement["Contract Supplement"]
    class Request_Reason_Type["Request Reason Type"]
    class Loan_Service_Request["Loan Service Request"]
    class Supplement["Supplement"]
    class Contract_Service["Contract Service"]
    class Document["Document"]
    class MOD_Contract["{MOD}Contract"]
    Contract_Service o-- Loan_Service_Request : unnamed
    Contract_Supplement o-- Contract_Supplement_Document : unnamed
    Client_Supplement_Document ..> Request_Reason_Type : unnamed
    Contract_Supplement o-- Client_Supplement_Document : unnamed
    Contract_Supplement --> Supplement : unnamed
    Loan_Service_Request --> Contract_Supplement : unnamed
    MOD_Contract o-- Contract_Supplement : unnamed
```

# Contract Service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Logical Data Model
- **Diagram ID**: 163280
- **Elements**: 19
- **Connectors**: 15

```mermaid
classDiagram
    class Contract_Card_Service["Contract Card Service"]
    class Loan_Service_Request_domain["Loan Service Request domain"]
    class Payment_holiday_request["Payment holiday request"]
    class Loan_Service_Request["Loan Service Request"]
    class Early_repayment_request["Early repayment request"]
    class Contract_Services["Contract - Services"]
    class Insurance_Contract["Insurance Contract"]
    class Contract_Service_Status["Contract Service Status"]
    class Contract_Service_Status_Reason["Contract Service Status Reason"]
    class Contract_Service_Parameter_Type["Contract Service Parameter Type"]
    class Contract_Service_Parameter["Contract Service Parameter"]
    class Document["Document"]
    class Contract_Document["Contract Document"]
    class Contract_Service_Document["Contract Service Document"]
    class MOD_Commodity["{MOD}Commodity"]
    class Contract_Insurance_Service["Contract Insurance Service"]
    class Service["Service"]
    class Contract_Service["Contract Service"]
    class MOD_Contract["{MOD}Contract"]
    Contract_Service_Document --> Contract_Service : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Loan_Service_Request --> MOD_Contract : unnamed
    Contract_Service o-- Contract_Service_Parameter : unnamed
    Contract_Service_Parameter ..> Contract_Service_Parameter_Type : unnamed
    Contract_Service <|-- Contract_Card_Service : unnamed
    Contract_Document <|-- Contract_Service_Document : unnamed
    Contract_Service ..> Contract_Service_Status_Reason : unnamed
    Contract_Service <|-- Contract_Insurance_Service : unnamed
    Contract_Service --> Service : unnamed
    Contract_Service --> MOD_Commodity : unnamed
    Contract_Service ..> Contract_Service_Status : unnamed
    Contract_Document --> Document : unnamed
    MOD_Contract o-- Contract_Document : unnamed
    MOD_Contract o-- Contract_Service : unnamed
```

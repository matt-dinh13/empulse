# Loan consolidation - Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan consolidation/Logical Data Model
- **Diagram ID**: 146241
- **Elements**: 14
- **Connectors**: 15

```mermaid
classDiagram
    class Refinanced_Contract_Closure["Refinanced Contract Closure"]
    class MOD_Refinanced_Contract["{MOD}Refinanced Contract "]
    class Loan_Consolidation_Request["Loan Consolidation Request"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class Service["Service"]
    class Loan_Service_Request_Presented_Interest_Rate["Loan Service Request Presented Interest Rate"]
    class Document["Document"]
    class Loan_Service_Request_Document["Loan Service Request Document"]
    class Charged_Fee_To_Request["Charged Fee To Request"]
    class Loan_Service_Request_Status_Transition["Loan Service Request Status Transition"]
    class Loan_Service_Request_Status_Type["Loan Service Request Status Type"]
    class Loan_Service_Request["Loan Service Request"]
    class Contract_Service["Contract Service"]
    class MOD_Contract["{MOD}Contract"]
    Loan_Service_Request <|-- Loan_Consolidation_Request : unnamed
    Loan_Service_Request_Status_Transition ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Document : unnamed
    Loan_Service_Request_Document --> Document : unnamed
    Loan_Service_Request o-- Charged_Fee_To_Request : unnamed
    Loan_Service_Request --> MOD_Contract : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Status_Transition : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Presented_Interest_Rate : unnamed
    Charged_Fee_To_Request --> MOD_Tariff_Item : unnamed
    Contract_Service --> Service : unnamed
    MOD_Contract o-- MOD_Refinanced_Contract : unnamed
    MOD_Refinanced_Contract o-- Refinanced_Contract_Closure : unnamed
    MOD_Contract o-- Contract_Service : unnamed
```

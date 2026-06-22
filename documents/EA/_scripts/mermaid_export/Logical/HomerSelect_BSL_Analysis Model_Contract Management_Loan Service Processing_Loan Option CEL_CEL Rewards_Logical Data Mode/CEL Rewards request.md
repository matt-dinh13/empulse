# CEL Rewards request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model
- **Diagram ID**: 101826
- **Elements**: 14
- **Connectors**: 15

```mermaid
classDiagram
    class Reward_Data["Reward Data"]
    class Evaluated_Period_Data["Evaluated Period Data"]
    class CEL_Reward_Evaluated_Period["CEL Reward Evaluated Period"]
    class CEL_Reward_Request["CEL Reward Request"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class Charged_Fee_To_Request["Charged Fee To Request"]
    class Document["Document"]
    class Document_Type["Document Type"]
    class Loan_Service_Request_Document["Loan Service Request Document"]
    class DMS_File["DMS File"]
    class Loan_Service_Request_Status_Transition["Loan Service Request Status Transition"]
    class Loan_Service_Request_Status_Type["Loan Service Request Status Type"]
    class Loan_Service_Request["Loan Service Request"]
    class Contract_Service["Contract Service"]
    CEL_Reward_Evaluated_Period ..> Evaluated_Period_Data : unnamed
    CEL_Reward_Evaluated_Period ..> Evaluated_Period_Data : unnamed
    CEL_Reward_Request o-- CEL_Reward_Evaluated_Period : unnamed
    CEL_Reward_Evaluated_Period ..> Reward_Data : unnamed
    Loan_Service_Request <|-- CEL_Reward_Request : unnamed
    Loan_Service_Request_Status_Transition ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request ..> Loan_Service_Request_Status_Type : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Document : unnamed
    Loan_Service_Request_Document --> Document : unnamed
    Loan_Service_Request o-- Charged_Fee_To_Request : unnamed
    Contract_Service o-- Loan_Service_Request : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Status_Transition : unnamed
    Charged_Fee_To_Request --> MOD_Tariff_Item : unnamed
    Document --> Document_Type : unnamed
    DMS_File --> DMS_File : unnamed
```

# Early repayment request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model
- **Diagram ID**: 163960
- **Elements**: 18
- **Connectors**: 17

```mermaid
classDiagram
    class ADD_Document_DMS_File["{ADD}Document DMS File"]
    class Bonus_Service_Attribute["Bonus Service Attribute"]
    class Evaluated_Bonus_Service["Evaluated Bonus Service"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class Loan_Service_Request["Loan Service Request"]
    class PER_Type["PER Type"]
    class CET_Variant["CET Variant"]
    class Contract_Status_Transitions_Reasons["Contract Status Transitions Reasons"]
    class Contract_Service["Contract Service"]
    class Logical_Data_Model_PER_Result["Logical Data Model : PER Result"]
    class Logical_Data_Model_Early_repayment_result["Logical Data Model : Early repayment result"]
    class Document["Document"]
    class Document_Type["Document Type"]
    class Loan_Service_Request_Document["Loan Service Request Document"]
    class DMS_File["DMS File"]
    class Charged_Fee_To_Request["Charged Fee To Request"]
    class MOD_Contract["{MOD}Contract"]
    class Early_Repayment_Request["Early Repayment Request"]
    Contract_Service o-- Loan_Service_Request : unnamed
    Charged_Fee_To_Request --> MOD_Tariff_Item : unnamed
    Loan_Service_Request o-- Loan_Service_Request_Document : unnamed
    Loan_Service_Request o-- Charged_Fee_To_Request : unnamed
    Loan_Service_Request o-- Evaluated_Bonus_Service : unnamed
    Loan_Service_Request <|-- Early_Repayment_Request : unnamed
    Early_Repayment_Request ..> PER_Type : unnamed
    Evaluated_Bonus_Service ..> Bonus_Service_Attribute : unnamed
    Early_Repayment_Request ..> Contract_Status_Transitions_Reasons : unnamed
    Loan_Service_Request --> MOD_Contract : unnamed
    Loan_Service_Request_Document --> Document : unnamed
    ADD_Document_DMS_File --> DMS_File : unnamed
    DMS_File --> DMS_File : unnamed
    Early_Repayment_Request ..> CET_Variant : unnamed
    Document --> Document_Type : unnamed
    MOD_Contract o-- Contract_Service : unnamed
    Document o-- ADD_Document_DMS_File : unnamed
```

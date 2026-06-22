# CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS
- **Diagram ID**: 150701
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph TD
    Get_Service_definition_from_Services["Get Service definition from Services"]
    Logical_Data_Model_Service_Processing_Setting["Logical Data Model : Service Processing Setting"]
    MOD_Calculation_of_Loan_Service_parameters["{MOD}Calculation of Loan Service parameters"]
    Use_Case_Model_Cooling_off_period_processing["Use Case Model : Cooling-off period processing"]
    CSI_2364_Changes_in_Contract_Insurance_on_COP_application["CSI-2364 Changes in Contract Insurance on COP application"]
    CSI_2366_Changes_in_the_Cancel_Insurance_function_due_to_ref["CSI-2366 Changes in the Cancel Insurance function due to refunding fee"]
    Use_case_model_Contract_insurance_cancellation["Use case model : Contract insurance cancellation"]
    Use_case_model_Contract_insurance_cancellation -->|unnamed| CSI_2366_Changes_in_the_Cancel_Insurance_function_due_to_ref
    Use_Case_Model_Cooling_off_period_processing -->|unnamed| CSI_2364_Changes_in_Contract_Insurance_on_COP_application
    Logical_Data_Model_Service_Processing_Setting -->|unnamed| CSI_2364_Changes_in_Contract_Insurance_on_COP_application
    MOD_Calculation_of_Loan_Service_parameters -->|unnamed| Get_Service_definition_from_Services
```

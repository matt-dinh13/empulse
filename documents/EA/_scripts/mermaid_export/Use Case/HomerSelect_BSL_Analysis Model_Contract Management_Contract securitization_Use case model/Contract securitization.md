# Contract securitization

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Use case model
- **Diagram ID**: 160305
- **Elements**: 24
- **Connectors**: 21

```mermaid
graph LR
    Send_ContractFullInfoRequest["Send ContractFullInfoRequest"]
    MOD_Calculate_sum_of_paid_fees_before_sales_date["{MOD}Calculate sum of paid fees before sales date"]
    Calculate_debt_on_all_penalties["Calculate debt on all penalties"]
    MOD_Calculate_accrued_standard_fees_from_next_installment["{MOD}Calculate accrued standard fees from next installment"]
    Debt_on_principal_calculation_to_defined_date["Debt on principal calculation to defined date"]
    System_event[/"System event"/]
    n_01_864_Generate_notifications_about_contract_securitizatio(("01.864 Generate notifications about contract securitization"))
    Time[/"Time"/]
    Calculate_accrued_interest_till_end_of_month["Calculate accrued interest till end of month"]
    Logical_Data_model_Contract_securitization_LDM["Logical Data model : Contract securitization - LDM"]
    Calculate_sum_all_installment_parts_paid_before_passed_date["Calculate sum all installment parts paid before passed date"]
    Debt_on_principal_calculation["Debt on principal calculation"]
    MOD_Calculate_sum_prescribed_installment_parts_before_passed["{MOD}Calculate sum prescribed installment parts before passed date"]
    Interface_model_Contract_securitization_file_structure["Interface model : Contract securitization - file structure "]
    MOD_Calculate_accrued_interest_from_next_installment["{MOD}Calculate accrued interest from next installment"]
    n_01_862_Process_securitization_of_contracts(("01.862 Process securitization of contracts"))
    n_01_863_Perform_contract_securitization(("01.863 Perform contract securitization"))
    User_interface_model_Import_contract_securitization_file_UI["User interface model :Import contract securitization file - UI"]
    MOD_Securitization_import_notification_structure["{MOD}Securitization import notification structure"]
    Same_file_name_not_imported_VAL_0708["Same file name not imported (VAL_0708)"]
    Same_file_content_not_imported_VAL_0709["Same file content not imported (VAL_0709)"]
    n_01_861_Import_contract_securitization_file(("01.861 Import contract securitization file"))
    User[/"User"/]
    n_01_860_Process_contract_securitization_file(("01.860 Process contract securitization file"))
    n_01_862_Process_securitization_of_contracts -.->|include| n_01_863_Perform_contract_securitization
    n_01_863_Perform_contract_securitization -->|unnamed| Calculate_debt_on_all_penalties
    n_01_863_Perform_contract_securitization -->|unnamed| MOD_Calculate_accrued_standard_fees_from_next_installment
    n_01_863_Perform_contract_securitization -->|unnamed| Debt_on_principal_calculation_to_defined_date
    n_01_863_Perform_contract_securitization -->|unnamed| Calculate_accrued_interest_till_end_of_month
    n_01_863_Perform_contract_securitization -->|unnamed| Calculate_sum_all_installment_parts_paid_before_passed_date
    n_01_863_Perform_contract_securitization -->|unnamed| Debt_on_principal_calculation
    n_01_863_Perform_contract_securitization -->|unnamed| MOD_Calculate_sum_prescribed_installment_parts_before_passed
    n_01_863_Perform_contract_securitization -->|unnamed| MOD_Calculate_sum_of_paid_fees_before_sales_date
    n_01_864_Generate_notifications_about_contract_securitizatio -->|unnamed| Send_ContractFullInfoRequest
    n_01_861_Import_contract_securitization_file -->|unnamed| User_interface_model_Import_contract_securitization_file_UI
    n_01_860_Process_contract_securitization_file -->|unnamed| MOD_Securitization_import_notification_structure
    n_01_861_Import_contract_securitization_file -->|unnamed| Same_file_name_not_imported_VAL_0708
    n_01_861_Import_contract_securitization_file -->|unnamed| Same_file_content_not_imported_VAL_0709
    Interface_model_Contract_securitization_file_structure -->|unnamed| n_01_861_Import_contract_securitization_file
    n_01_861_Import_contract_securitization_file -->|unnamed| n_01_860_Process_contract_securitization_file
    n_01_863_Perform_contract_securitization -->|unnamed| MOD_Calculate_accrued_interest_from_next_installment
    Time --> n_01_860_Process_contract_securitization_file
    Time --> n_01_862_Process_securitization_of_contracts
    System_event --> n_01_864_Generate_notifications_about_contract_securitizatio
    User --- n_01_861_Import_contract_securitization_file
```

# Create/Update bank account for consolidation - KZ

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/KZ
- **Diagram ID**: 151022
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph TD
    Account_number_KZ["Account number - KZ"]
    Account_number_validation["Account number validation"]
    Bank_branch["Bank branch"]
    Autocompletion["Autocompletion"]
    Only_codelist_values_can_be_selected["Only codelist values can be selected"]
    Only_codelist_values_can_be_selected["Only codelist values can be selected"]
    Bank_name["Bank name"]
    Account_number["Account number"]
    Fill_bank_according_to_account_number["Fill bank according to account number"]
    Create_Update_bank_account_for_consolidation_KZ["Create/Update bank account for consolidation - KZ"]
    Account_number -->|unnamed| Fill_bank_according_to_account_number
    Bank_name -->|unnamed| Fill_bank_according_to_account_number
    Bank_branch -->|unnamed| Only_codelist_values_can_be_selected
    Only_codelist_values_can_be_selected -->|unnamed| Only_codelist_values_can_be_selected
    Only_codelist_values_can_be_selected -->|unnamed| Autocompletion
    Account_number -->|unnamed| Account_number_validation
    Account_number -->|unnamed| Account_number_KZ
    Account_number_validation -->|unnamed| Account_number_KZ
```

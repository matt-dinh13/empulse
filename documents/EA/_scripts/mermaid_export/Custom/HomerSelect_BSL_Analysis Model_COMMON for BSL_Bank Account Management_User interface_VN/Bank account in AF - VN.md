# Bank account in AF - VN

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN
- **Diagram ID**: 154628
- **Elements**: 10
- **Connectors**: 4

```mermaid
graph TD
    ADD_Unique_for_Beneficiary_person["{ADD}Unique for Beneficiary person"]
    ADD_Account_holder_name_VN["{ADD}Account holder name VN"]
    ADD_Account_holder_name["{ADD}Account holder name"]
    Account_number_validation["Account number validation"]
    Account_number_VN["Account number - VN"]
    Bank_name["Bank name"]
    Region["Region"]
    Bank_branch["Bank branch"]
    Account_number["Account number"]
    Bank_account_in_AF_VN["Bank account in AF - VN"]
    Account_number_validation -->|unnamed| Account_number_VN
    Account_number -->|unnamed| Account_number_VN
    ADD_Account_holder_name -->|unnamed| ADD_Account_holder_name_VN
    ADD_Account_holder_name_VN -->|unnamed| ADD_Unique_for_Beneficiary_person
```

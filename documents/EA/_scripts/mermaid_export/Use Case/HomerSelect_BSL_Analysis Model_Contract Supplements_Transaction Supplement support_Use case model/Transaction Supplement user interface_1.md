# Transaction Supplement user interface

```mermaid
graph TD
    User_Interface_Cancel_unprocessed_contract_supplement_UI["User Interface : Cancel unprocessed contract supplement - UI"]
    MOD_13_360_Cancel_unprocessed_contract_supplement_manually["{MOD}13.360 Cancel unprocessed contract supplement manually"]
    Change_status_of_Contract_Supplement["Change status of Contract Supplement"]
    User_Interface_model_Transaction_Supplement_detail["User Interface model :Transaction Supplement detail"]
    Tab_Contract_supplements_Tab_Contract_supplements["Tab-Contract supplements : Tab-Contract supplements"]
    User["User"]
    MOD_13_122_Show_Transaction_Supplement_detail["{MOD}13.122 Show Transaction Supplement detail"]
    User -->|unnamed| MOD_13_360_Cancel_unprocessed_contract_supplement_manually
    User -->|unnamed| MOD_13_122_Show_Transaction_Supplement_detail
    Tab_Contract_supplements_Tab_Contract_supplements -->|unnamed| MOD_13_122_Show_Transaction_Supplement_detail
    User_Interface_model_Transaction_Supplement_detail -->|unnamed| MOD_13_122_Show_Transaction_Supplement_detail
    MOD_13_360_Cancel_unprocessed_contract_supplement_manually -->|unnamed| Change_status_of_Contract_Supplement
    MOD_13_360_Cancel_unprocessed_contract_supplement_manually -->|unnamed| User_Interface_Cancel_unprocessed_contract_supplement_UI
```

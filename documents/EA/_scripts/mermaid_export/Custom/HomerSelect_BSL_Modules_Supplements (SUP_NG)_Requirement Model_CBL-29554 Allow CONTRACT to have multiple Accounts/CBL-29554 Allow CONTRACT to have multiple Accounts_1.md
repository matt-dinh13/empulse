# CBL-29554 Allow CONTRACT to have multiple Accounts

```mermaid
graph TD
    Logical_Data_Model_Contract_Supplement_Logical_Data_Model["Logical Data Model : Contract Supplement - Logical Data Model"]
    Use_Case_Model_Get_Contract_Supplements_Use_Case_Model["Use Case Model : Get Contract Supplements - Use Case Model"]
    Use_Case_Model_Create_Contract_Service_Supplement_Use_Case_M["Use Case Model : Create Contract Service Supplement - Use Case Model"]
    Use_Case_Model_Add_Sales_Quote_to_Contract_Supplement_Use_Ca["Use Case Model : Add Sales Quote to Contract Supplement - Use Case Model"]
    Add_Sales_Quote_to_Contract_Supplement_Add_Sales_Quote_to_Co["Add Sales Quote to Contract Supplement : Add Sales Quote to Contract Supplement"]
    Create_Contract_Supplement_Create_Contract_Supplement["Create Contract Supplement : Create Contract Supplement"]
    Get_Contract_Supplements_Get_Contract_Supplements["Get Contract Supplements : Get Contract Supplements"]
    DOBA_342_Update_Find_Contract_Supplement_method_add_account_["DOBA-342 Update Find Contract Supplement method - add account number"]
    DOBA_343_Update_Add_Sales_Quote_method_add_account_number["DOBA-343 Update Add Sales Quote method - add account number"]
    DOBA_331_Update_of_Create_Contract_Supplement_method["DOBA-331 Update of Create Contract Supplement method"]
    Create_Contract_Supplement_Create_Contract_Supplement -->|unnamed| DOBA_331_Update_of_Create_Contract_Supplement_method
    Use_Case_Model_Create_Contract_Service_Supplement_Use_Case_M -->|unnamed| DOBA_331_Update_of_Create_Contract_Supplement_method
    Logical_Data_Model_Contract_Supplement_Logical_Data_Model -->|unnamed| DOBA_331_Update_of_Create_Contract_Supplement_method
    Get_Contract_Supplements_Get_Contract_Supplements -->|unnamed| DOBA_342_Update_Find_Contract_Supplement_method_add_account_
    Use_Case_Model_Get_Contract_Supplements_Use_Case_Model -->|unnamed| DOBA_342_Update_Find_Contract_Supplement_method_add_account_
    Add_Sales_Quote_to_Contract_Supplement_Add_Sales_Quote_to_Co -->|unnamed| DOBA_343_Update_Add_Sales_Quote_method_add_account_number
    Use_Case_Model_Add_Sales_Quote_to_Contract_Supplement_Use_Ca -->|unnamed| DOBA_343_Update_Add_Sales_Quote_method_add_account_number
```

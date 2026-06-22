# Activity diagram

- **Diagram Type**: Activity
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities/Activity diagram
- **Diagram ID**: 161509
- **Elements**: 12
- **Connectors**: 10

```mermaid
flowchart TD
    Add_SERVICE_Sales_Quotes_to_Contract_Supplement["Add SERVICE Sales Quotes to Contract Supplement"]
    Add_ACC_CREATION_SalesQuote_to_Contract_Supplement["Add ACC_CREATION SalesQuote to Contract Supplement"]
    Is_Account{"Is Account"}
    Account_created_confirm["Account created confirm"]
    Create_Contract_Supplement["Create Contract Supplement"]
    Create_Account["Create Account"]
    Is_Contract{"Is Contract"}
    Event2["Event2"]
    Create_contract["Create contract"]
    ACCOUNT_CREATED["ACCOUNT_CREATED"]
    Input_call(( ))
    Input_validations["Input validations"]
    Input_call -->|unnamed| Input_validations
    Is_Contract -->|NO| Create_contract
    Input_validations -->|unnamed| Is_Contract
    Is_Account -->|NO| Create_Account
    Is_Contract -->|unnamed| Create_Contract_Supplement
    Create_contract -->|unnamed| Create_Contract_Supplement
    ACCOUNT_CREATED -->|unnamed| Account_created_confirm
    Create_Contract_Supplement -->|unnamed| Is_Account
    Account_created_confirm -->|unnamed| Add_ACC_CREATION_SalesQuote_to_Contract_Supplement
    Is_Account -->|YES| Add_SERVICE_Sales_Quotes_to_Contract_Supplement
```

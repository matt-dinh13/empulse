# Add Sales Quote to Contract Supplement - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model
- **Diagram ID**: 163940
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph LR
    Determine_Sales_Quote_Processing_type["Determine Sales Quote Processing type"]
    Create_CASH_POS_transaction_rule_in_the_AccountTransaction["Create CASH/POS transaction rule in the AccountTransaction"]
    Get_Contract_Service_from_COS_SUP["Get Contract Service from COS (SUP)"]
    Get_Sales_Quote_by_salesQuoteCode_from_SQS_SUP["Get Sales Quote by salesQuoteCode from SQS (SUP)"]
    Add_Sales_Quote_to_Contract_Supplement_Add_Sales_Quote_to_Co["Add Sales Quote to Contract Supplement : Add Sales Quote to Contract Supplement"]
    n_13_020_Add_Sales_Quote_to_Contract_Supplement(("13.020 Add Sales Quote to Contract Supplement"))
    External_system[/"External system"/]
    Add_Sales_Quote_to_Contract_Supplement_Add_Sales_Quote_to_Co -->|unnamed| n_13_020_Add_Sales_Quote_to_Contract_Supplement
    External_system --- n_13_020_Add_Sales_Quote_to_Contract_Supplement
    n_13_020_Add_Sales_Quote_to_Contract_Supplement -->|unnamed| Get_Sales_Quote_by_salesQuoteCode_from_SQS_SUP
    n_13_020_Add_Sales_Quote_to_Contract_Supplement -->|unnamed| Get_Contract_Service_from_COS_SUP
    n_13_020_Add_Sales_Quote_to_Contract_Supplement -->|unnamed| Create_CASH_POS_transaction_rule_in_the_AccountTransaction
    n_13_020_Add_Sales_Quote_to_Contract_Supplement -->|unnamed| Determine_Sales_Quote_Processing_type
```

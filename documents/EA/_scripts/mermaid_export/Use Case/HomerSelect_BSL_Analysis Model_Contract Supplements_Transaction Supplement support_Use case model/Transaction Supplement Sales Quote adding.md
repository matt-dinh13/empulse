# Transaction Supplement Sales Quote adding

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model
- **Diagram ID**: 164674
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    Logical_data_model_Transaction_Supplement_domain_Logical_dat["Logical data model : Transaction Supplement domain - Logical data model"]
    Logical_data_model_Account_transaction_Logical_data_model["Logical data model : Account transaction - Logical data model"]
    TransactionSupplements_TransactionSupplements_Add_Sales_Quot["TransactionSupplements : TransactionSupplements - Add Sales Quote to Transaction Supplement"]
    Get_Offer_by_offerId_from_SQS["Get Offer by offerId from SQS"]
    Set_Main_Sales_Quote_for_Transaction_Supplement["Set Main Sales Quote for Transaction Supplement"]
    Create_CASH_POS_transaction_rule["Create CASH/POS transaction rule"]
    Set_Sales_Quote_values_for_Transaction_Supplement["Set Sales Quote values for Transaction Supplement"]
    n_13_116_Add_Sales_Quote_to_Transaction_Supplement(("13.116 Add Sales Quote to Transaction Supplement"))
    External_system[/"External system"/]
    TransactionSupplements_TransactionSupplements_Add_Sales_Quot -->|unnamed| n_13_116_Add_Sales_Quote_to_Transaction_Supplement
    Logical_data_model_Account_transaction_Logical_data_model -->|unnamed| Create_CASH_POS_transaction_rule
    Logical_data_model_Transaction_Supplement_domain_Logical_dat -->|unnamed| n_13_116_Add_Sales_Quote_to_Transaction_Supplement
    External_system --> n_13_116_Add_Sales_Quote_to_Transaction_Supplement
    n_13_116_Add_Sales_Quote_to_Transaction_Supplement -->|unnamed| Set_Sales_Quote_values_for_Transaction_Supplement
    n_13_116_Add_Sales_Quote_to_Transaction_Supplement -->|unnamed| Set_Main_Sales_Quote_for_Transaction_Supplement
    n_13_116_Add_Sales_Quote_to_Transaction_Supplement -->|unnamed| Get_Offer_by_offerId_from_SQS
    Set_Sales_Quote_values_for_Transaction_Supplement -->|unnamed| Create_CASH_POS_transaction_rule
```

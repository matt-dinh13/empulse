# CBL-21486 (CSI-2666) Expose loan code for Authorized Transactions in API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21486 (CSI-2666) Expose loan code for Authorized Transactions in API
- **Diagram ID**: 152966
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    TransactionSupplements_v2_Transaction_Supplement_Get_Transac["TransactionSupplements_v2 : Transaction Supplement - Get Transaction Supplement v2"]
    Logical_data_model_Account_transaction_Logical_data_model["Logical data model : Account transaction - Logical data model"]
    Logical_data_model_Transaction_Supplement_domain_Logical_dat["Logical data model : Transaction Supplement domain - Logical data model"]
    Use_case_model_Transaction_Supplement_authorization_method["Use case model : Transaction Supplement authorization method"]
    CSI_2675_Expose_loanCode_in_TransactionSupplement_GET_method["CSI-2675 Expose loanCode in TransactionSupplement GET method"]
    CSI_2673_Getting_loanCode_on_AutorizeTransaction_response["CSI-2673 Getting loanCode on AutorizeTransaction response"]
    TransactionSupplements_v2_Transaction_Supplement_Get_Transac -->|unnamed| CSI_2675_Expose_loanCode_in_TransactionSupplement_GET_method
    Use_case_model_Transaction_Supplement_authorization_method -->|unnamed| CSI_2673_Getting_loanCode_on_AutorizeTransaction_response
    Logical_data_model_Account_transaction_Logical_data_model -->|unnamed| CSI_2673_Getting_loanCode_on_AutorizeTransaction_response
```

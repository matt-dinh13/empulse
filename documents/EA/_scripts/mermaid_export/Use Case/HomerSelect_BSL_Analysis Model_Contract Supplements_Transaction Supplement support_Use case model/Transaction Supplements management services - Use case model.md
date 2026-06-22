# Transaction Supplements management services - Use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model
- **Diagram ID**: 164667
- **Elements**: 11
- **Connectors**: 9

```mermaid
graph LR
    Cancel_authorized_transactions_in_Transaction_Supplement["Cancel authorized transactions in Transaction Supplement"]
    Transaction_Supplement_refunding_Use_case_model["Transaction Supplement refunding - Use case model"]
    Web_Services_Transaction_Supplement_Update_Transaction_Suppl["Web Services : Transaction Supplement - Update Transaction Supplement"]
    n_13_112_Refund_Transaction_Supplement(("13.112 Refund Transaction Supplement"))
    Web_Services_Transaction_Supplement_Get_Transaction_Suppleme["Web Services : Transaction Supplement - Get Transaction Supplement"]
    Web_Services_Transaction_Supplement_Cancel_Transaction_Suppl["Web Services : Transaction Supplement - Cancel Transaction Supplement"]
    Web_Services_Contract_Supplements_Get_Transaction_type_Suppl["Web Services :Contract Supplements - Get Transaction type Supplement by CUID v3"]
    n_13_120_Get_Contract_Supplements_of_Customer_service(("13.120 Get Contract Supplements of Customer service"))
    n_13_106_Get_Transaction_Supplement_detail_service(("13.106 Get Transaction Supplement detail service"))
    n_13_104_Cancel_Transaction_Supplement_service(("13.104 Cancel Transaction Supplement service"))
    External_system[/"External system"/]
    External_system --> n_13_112_Refund_Transaction_Supplement
    External_system --> n_13_104_Cancel_Transaction_Supplement_service
    External_system --> n_13_106_Get_Transaction_Supplement_detail_service
    External_system --> n_13_120_Get_Contract_Supplements_of_Customer_service
    n_13_104_Cancel_Transaction_Supplement_service -->|unnamed| Cancel_authorized_transactions_in_Transaction_Supplement
    Web_Services_Contract_Supplements_Get_Transaction_type_Suppl -->|unnamed| n_13_120_Get_Contract_Supplements_of_Customer_service
    Web_Services_Transaction_Supplement_Cancel_Transaction_Suppl -->|unnamed| n_13_104_Cancel_Transaction_Supplement_service
    Web_Services_Transaction_Supplement_Get_Transaction_Suppleme -->|unnamed| n_13_106_Get_Transaction_Supplement_detail_service
    Web_Services_Transaction_Supplement_Update_Transaction_Suppl -->|unnamed| n_13_112_Refund_Transaction_Supplement
```

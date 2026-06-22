# CBL-26143 (CSI-3705) BNPL - Enrich transaction data

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- **Diagram ID**: 160337
- **Elements**: 9
- **Connectors**: 6

```mermaid
graph TD
    Create_contract_supplement_rule["Create contract supplement rule"]
    MOD_Set_Transaction_Supplement_values["{MOD}Set Transaction Supplement values"]
    MOD_Create_Confirm_Transaction_Request_for_AM["{MOD}Create Confirm Transaction Request for AM"]
    Get_application_data_by_code["Get application data by code"]
    Get_Offer_by_offerId_from_SQS["Get Offer by offerId from SQS"]
    MOD_Validate_Transaction_Supplement_request["{MOD}Validate Transaction Supplement request"]
    MOD_13_110_Process_account_transaction_for_Transaction_Suppl["{MOD}13.110 Process account transaction for Transaction Supplement"]
    MOD_13_100_Create_Transaction_Supplement_service["{MOD}13.100 Create Transaction Supplement service"]
    Req_BNPL_Enrich_transaction_data["Req - BNPL - Enrich transaction data"]
    MOD_13_110_Process_account_transaction_for_Transaction_Suppl -->|unnamed| MOD_Create_Confirm_Transaction_Request_for_AM
    MOD_13_100_Create_Transaction_Supplement_service -->|unnamed| MOD_Validate_Transaction_Supplement_request
    Create_contract_supplement_rule -->|unnamed| MOD_Set_Transaction_Supplement_values
    MOD_13_100_Create_Transaction_Supplement_service -->|unnamed| Create_contract_supplement_rule
    MOD_Validate_Transaction_Supplement_request -->|unnamed| Get_Offer_by_offerId_from_SQS
    MOD_Validate_Transaction_Supplement_request -->|unnamed| Get_application_data_by_code
```

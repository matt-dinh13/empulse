# PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK
- **Diagram ID**: 163951
- **Elements**: 7
- **Connectors**: 2

```mermaid
graph TD
    ADD_05_332_Update_and_Validate_Payment_Channel_via_REST_API["{ADD}05.332 Update and Validate Payment Channel via REST API"]
    Use_Case_Model_Generate_and_Cancel_outgoing_payments["Use Case Model : Generate and Cancel outgoing payments"]
    MOD_Unblock_Outgoing_Payments["{MOD}Unblock Outgoing Payments"]
    Use_Case_Model_Blocking_outgoing_payments["Use Case Model : Blocking outgoing payments"]
    MOD_Generate_outgoing_payment_for_contract["{MOD}Generate outgoing payment for contract"]
    MOD_05_090_Generate_outgoing_payment_for_contract["{MOD}05.090 Generate outgoing payment for contract"]
    PAYM_5920_BRVN_331_UPDATE_BANK_ACCOUNT_FOR_SALESROOMS_UNDER_["PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK"]
    MOD_Unblock_Outgoing_Payments -->|unnamed| ADD_05_332_Update_and_Validate_Payment_Channel_via_REST_API
    MOD_05_090_Generate_outgoing_payment_for_contract -->|unnamed| MOD_Generate_outgoing_payment_for_contract
```

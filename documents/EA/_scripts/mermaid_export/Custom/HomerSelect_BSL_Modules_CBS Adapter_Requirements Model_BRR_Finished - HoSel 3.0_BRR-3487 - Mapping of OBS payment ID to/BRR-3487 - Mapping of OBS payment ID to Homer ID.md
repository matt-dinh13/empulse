# BRR-3487 - Mapping of OBS payment ID to Homer ID

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-3487 - Mapping of OBS payment ID to Homer ID
- **Diagram ID**: 62841
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph TD
    Get_OBS_paired_payment_ID["Get OBS paired payment ID"]
    Processing_PairedPaymentInfoDto["Processing PairedPaymentInfoDto"]
    Logical_Data_Model_COMMON_for_CBSA_LDM["Logical Data Model : COMMON for CBSA - LDM"]
    REQ_1_Payment_ID_transaltion["REQ#1 Payment ID transaltion"]
    REQ_1_Payment_ID_transaltion -->|unnamed| Logical_Data_Model_COMMON_for_CBSA_LDM
    Get_OBS_paired_payment_ID -->|unnamed| REQ_1_Payment_ID_transaltion
    Processing_PairedPaymentInfoDto -->|unnamed| REQ_1_Payment_ID_transaltion
    Processing_PairedPaymentInfoDto -->|unnamed| Get_OBS_paired_payment_ID
```

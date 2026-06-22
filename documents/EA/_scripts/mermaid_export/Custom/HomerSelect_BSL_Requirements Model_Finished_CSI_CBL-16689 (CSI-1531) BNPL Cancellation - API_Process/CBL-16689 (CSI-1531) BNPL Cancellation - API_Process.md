# CBL-16689 (CSI-1531) BNPL Cancellation - API/Process

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process
- **Diagram ID**: 159739
- **Elements**: 6
- **Connectors**: 6

```mermaid
graph TD
    CSI_1649_Update_ConfirmTransactionWithIPConversion_call_with["CSI-1649 Update ConfirmTransactionWithIPConversion call with original transaction reference"]
    CBL_16689_CSI_1531_BNPL_Cancellation_API_Process_Change_in_C["CBL-16689 (CSI-1531) BNPL Cancellation - API/Process : Change in Contract Supplement domain model"]
    Use_case_model_Transaction_Supplement_update_Use_case_model["Use case model : Transaction Supplement update - Use case model"]
    CSI_1574_Change_Contract_Supplement_and_Account_Transaction_["CSI-1574 - Change Contract Supplement and Account Transaction relationship"]
    CSI_1580_Create_API_method_for_Transaction_Supplement_update["CSI-1580 Create API method for Transaction Supplement update"]
    CBL_16689_BNPL_Cancellation_API_Process["CBL-16689 BNPL Cancellation - API/Process"]
    CSI_1649_Update_ConfirmTransactionWithIPConversion_call_with -->|unnamed| CBL_16689_BNPL_Cancellation_API_Process
    CSI_1574_Change_Contract_Supplement_and_Account_Transaction_ -->|unnamed| CBL_16689_BNPL_Cancellation_API_Process
    CSI_1580_Create_API_method_for_Transaction_Supplement_update -->|unnamed| CBL_16689_BNPL_Cancellation_API_Process
    Use_case_model_Transaction_Supplement_update_Use_case_model -->|unnamed| CSI_1580_Create_API_method_for_Transaction_Supplement_update
    CBL_16689_CSI_1531_BNPL_Cancellation_API_Process_Change_in_C -->|unnamed| CSI_1574_Change_Contract_Supplement_and_Account_Transaction_
    Use_case_model_Transaction_Supplement_update_Use_case_model -->|unnamed| CSI_1649_Update_ConfirmTransactionWithIPConversion_call_with
```

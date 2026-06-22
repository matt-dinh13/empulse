# CBL-8047 (CLM-2590) Disable CANCEL button post free lookup period for EW product

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8047 (CLM-2590) Disable CANCEL button post free lookup period for EW product
- **Diagram ID**: 125979
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph TD
    MOD_CLM_feature_flags["{MOD}CLM feature flags"]
    Check_contract_for_active_COP_GRPER_period["Check contract for active COP/GRPER period"]
    Use_case_model_Cancellation_of_Insurance_contract_options["Use case model : Cancellation of Insurance contract options"]
    Use_case_model_Contract_insurance_cancellation["Use case model : Contract insurance cancellation"]
    CLM_2590_CBL_8047_Disable_CANCEL_button_post_free_lookup_per["CLM-2590 CBL-8047 Disable CANCEL button post free lookup period for EW product"]
    User_Interface_Service_cancellation["User Interface : Service cancellation"]
    MOD_11_111_Cancel_insurance_contract_manually["{MOD}11.111 Cancel insurance contract manually"]
    Use_case_model_Contract_insurance_cancellation -->|unnamed| MOD_11_111_Cancel_insurance_contract_manually
    Use_case_model_Cancellation_of_Insurance_contract_options -->|unnamed| MOD_11_111_Cancel_insurance_contract_manually
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| Check_contract_for_active_COP_GRPER_period
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| User_Interface_Service_cancellation
```

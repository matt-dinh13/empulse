# CBL-5042 (CLM-1780) Registration queue cleaning

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5042 (CLM-1780) Registration queue cleaning
- **Diagram ID**: 112152
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    MOD_System_event_processing_setting["{MOD}System event processing setting"]
    Business_rules_System_events_processing_setting["Business rules : System events processing setting"]
    REQ_2_Remove_contract_from_registration_queue_after_contract["REQ#2 - Remove contract from registration queue after contract cancellation"]
    MOD_Sign_contract_finalization["{MOD}Sign contract finalization"]
    REQ_1_Use_only_contract_with_defined_Business_category_in_th["REQ#1 - Use only contract with defined Business category in the Registration queue"]
    Business_rules_System_events_processing_setting -->|unnamed| MOD_System_event_processing_setting
    REQ_2_Remove_contract_from_registration_queue_after_contract -->|unnamed| Business_rules_System_events_processing_setting
    REQ_1_Use_only_contract_with_defined_Business_category_in_th -->|unnamed| MOD_Sign_contract_finalization
```

# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules
- **Diagram ID**: 164712
- **Elements**: 15
- **Connectors**: 12

```mermaid
graph TD
    ADD_AMSTRAD_validation_cancellation["{ADD} AMSTRAD validation cancellation"]
    Use_Case_Commodity_activation["Use Case : Commodity activation"]
    ADD_External_validation_confirmation["{ADD}External validation confirmation"]
    ADD_PHILIPS_loan_status_update["{ADD}PHILIPS loan status update"]
    ADD_Get_data_from_DMS["{ADD}Get data from DMS"]
    ADD_ALCATEL_validation_cancellation["{ADD}ALCATEL validation cancellation"]
    Use_Case_Commodity_cancelation["Use Case : Commodity cancelation"]
    ADD_MOTOROLA_validation_cancellation["{ADD} MOTOROLA validation cancellation"]
    ADD_VIVO_validation_cancellation["{ADD} VIVO validation cancellation"]
    ADD_SAMSUNG_validation_cancellation["{ADD} SAMSUNG validation cancellation"]
    MOD_Panasonic_validation_cancellation["{MOD}Panasonic validation cancellation"]
    SYMPHONY_validation_cancellation["SYMPHONY validation cancellation"]
    OPPO_validation_cancellation["OPPO validation cancellation"]
    XIAOMI_validation_cancellation["XIAOMI validation cancellation"]
    MOD_External_validation_cancellation["{MOD}External validation cancellation"]
    MOD_External_validation_cancellation -->|unnamed| XIAOMI_validation_cancellation
    MOD_External_validation_cancellation -->|unnamed| OPPO_validation_cancellation
    MOD_External_validation_cancellation -->|unnamed| SYMPHONY_validation_cancellation
    MOD_External_validation_cancellation -->|unnamed| MOD_Panasonic_validation_cancellation
    MOD_External_validation_cancellation -->|unnamed| ADD_SAMSUNG_validation_cancellation
    MOD_External_validation_cancellation -->|unnamed| ADD_VIVO_validation_cancellation
    MOD_External_validation_cancellation -->|unnamed| ADD_MOTOROLA_validation_cancellation
    MOD_External_validation_cancellation -->|unnamed| ADD_ALCATEL_validation_cancellation
    ADD_ALCATEL_validation_cancellation -->|unnamed| ADD_Get_data_from_DMS
    ADD_External_validation_confirmation -->|unnamed| ADD_PHILIPS_loan_status_update
    MOD_External_validation_cancellation -->|unnamed| ADD_PHILIPS_loan_status_update
    MOD_External_validation_cancellation -->|unnamed| ADD_AMSTRAD_validation_cancellation
```

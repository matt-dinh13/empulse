# Validation Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules
- **Diagram ID**: 143086
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    Mandatory["Mandatory"]
    Payment_channel_on_pair_payment["Payment channel on pair payment"]
    Charging_date_on_pair_payment["Charging date on pair payment"]
    Charging_date_is_between_original_deposit_date_and_current_d["Charging date is between original deposit date and current date"]
    Incoming_payment_unpairing_is_alowed["Incoming payment unpairing is alowed"]
    MOD_CBL_4472_Contract_pairing_allowed["{MOD CBL-4472}Contract pairing allowed"]
    Charging_date_is_between_original_deposit_date_and_current_d -->|unnamed| Mandatory
    Charging_date_on_pair_payment -->|unnamed| Charging_date_is_between_original_deposit_date_and_current_d
    Payment_channel_on_pair_payment -->|unnamed| Mandatory
```

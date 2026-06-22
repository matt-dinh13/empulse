# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Access Rights
- **Diagram ID**: 159984
- **Elements**: 13
- **Connectors**: 7

```mermaid
graph TD
    ADD_04_200_Processing_of_charged_State_duty_fee["{ADD}04.200 Processing of charged State duty fee"]
    n_04_123_Automatic_add_charging_requests["04.123 Automatic add charging requests"]
    n_04_130_Cancel_fees["04.130 Cancel fees"]
    n_04_140_Charge_fees["04.140 Charge fees"]
    MOD_04_140_Charge_fees["{MOD}04.140 Charge fees"]
    MOD_04_130_Cancel_fees["{MOD}04.130 Cancel fees"]
    n_04_120_Get_fees["04.120 Get fees"]
    n_04_120_Get_fees["04.120 Get fees"]
    n_04_123_Automatic_add_charging_requests["04.123 Automatic add charging requests"]
    n_04_110_Process_charging_request["04.110 Process charging request"]
    n_04_100_Add_charging_request["04.100 Add charging request"]
    n_04_110_Process_charging_requests["04.110 Process charging requests"]
    n_04_100_Add_charging_requests["04.100 Add charging requests"]
    n_04_120_Get_fees -->|unnamed| n_04_120_Get_fees
    n_04_123_Automatic_add_charging_requests -->|unnamed| n_04_110_Process_charging_requests
    n_04_123_Automatic_add_charging_requests -->|unnamed| n_04_123_Automatic_add_charging_requests
    n_04_110_Process_charging_requests -->|unnamed| n_04_110_Process_charging_request
    MOD_04_130_Cancel_fees -->|unnamed| n_04_130_Cancel_fees
    MOD_04_140_Charge_fees -->|unnamed| n_04_140_Charge_fees
    n_04_100_Add_charging_requests -->|unnamed| n_04_100_Add_charging_request
```

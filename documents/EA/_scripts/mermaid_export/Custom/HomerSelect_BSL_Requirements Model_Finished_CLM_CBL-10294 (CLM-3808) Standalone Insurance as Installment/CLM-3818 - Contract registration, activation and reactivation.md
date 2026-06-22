# CLM-3818 - Contract registration, activation and reactivation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment
- **Diagram ID**: 144840
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    External_Reference["External Reference"]
    DEL_01_278_Register_contract_automatically["{DEL}01.278 Register contract automatically"]
    Time["Time"]
    MOD_01_720_Reactivate_finished_contracts["{MOD}01.720 Reactivate finished contracts"]
    n_01_270_Register_contract_manually["01.270 Register contract manually"]
    MOD_01_290_Activate_contract["{MOD}01.290 Activate contract"]
    MOD_01_274_Activate_disbursed_contracts["{MOD}01.274 Activate disbursed contracts"]
    MOD_01_274_Activate_disbursed_contracts -->|unnamed| MOD_01_290_Activate_contract
    Time -->|unnamed| MOD_01_274_Activate_disbursed_contracts
    Time -->|unnamed| MOD_01_720_Reactivate_finished_contracts
```

# Access rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Outgoing payments operations on contract/Access rights
- **Diagram ID**: 95910
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    n_05_092_MOD_Disburse_outgoing_payments_manually["05.092 {MOD}Disburse outgoing payments manually"]
    MOD_05_092_Disburse_outgoing_payments_manually["{MOD}05.092 Disburse outgoing payments manually"]
    MOD_05_094_Block_payments_for_a_contract["{MOD}05.094 Block payments for a contract"]
    MOD_05_093_Allow_payments_for_a_contract["{MOD}05.093 Allow payments for a contract"]
    n_05_094_Block_payments_for_contract["05.094 Block payments for contract"]
    n_05_093_Allow_payments_for_a_contract["05.093 Allow payments for a contract"]
    n_05_092_MOD_Disburse_outgoing_payments_manually -->|unnamed| MOD_05_092_Disburse_outgoing_payments_manually
    MOD_05_093_Allow_payments_for_a_contract -->|unnamed| n_05_093_Allow_payments_for_a_contract
    MOD_05_094_Block_payments_for_a_contract -->|unnamed| n_05_094_Block_payments_for_contract
```

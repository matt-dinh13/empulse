# Contract Status Revert

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contracts Maintenance/Contract Status Revert/Use Case Model
- **Diagram ID**: 160207
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    MOD_Contracts_revert_Written_off_contract_to_Paid_off(("{MOD}Contracts revert Written-off contract to Paid-off"))
    ADD_15_100_Change_contract_status(("{ADD}15.100 Change contract status"))
    ADD_15_106_Revert_Paid_off_contract_to_Signed(("{ADD}15.106 Revert Paid-off contract to Signed"))
    ADD_15_107_Revert_Paid_off_contract_to_Active(("{ADD}15.107 Revert Paid-off contract to Active"))
    ADD_15_105_Revert_Paid_off_contract(("{ADD}15.105 Revert Paid-off contract"))
    ADD_15_104_Revert_Canceled_contract_to_Paid_off(("{ADD}15.104 Revert Canceled contract to Paid-off "))
    ADD_15_103_Revert_Canceled_contract_to_Active(("{ADD}15.103 Revert Canceled contract to Active"))
    ADD_15_102_Revert_Canceled_contract_to_Signed(("{ADD}15.102 Revert Canceled contract to Signed"))
    ADD_15_101_Revert_Canceled_contract(("{ADD}15.101 Revert Canceled contract"))
    ADD_15_102_Revert_Canceled_contract_to_Signed -.->|include| ADD_15_101_Revert_Canceled_contract
    ADD_15_103_Revert_Canceled_contract_to_Active -.->|include| ADD_15_101_Revert_Canceled_contract
    ADD_15_104_Revert_Canceled_contract_to_Paid_off -.->|include| ADD_15_101_Revert_Canceled_contract
    ADD_15_106_Revert_Paid_off_contract_to_Signed -.->|include| ADD_15_105_Revert_Paid_off_contract
    ADD_15_107_Revert_Paid_off_contract_to_Active -.->|include| ADD_15_105_Revert_Paid_off_contract
    ADD_15_105_Revert_Paid_off_contract -.->|include| ADD_15_100_Change_contract_status
    MOD_Contracts_revert_Written_off_contract_to_Paid_off -.->|include| ADD_15_100_Change_contract_status
    ADD_15_101_Revert_Canceled_contract -.->|include| ADD_15_100_Change_contract_status
```

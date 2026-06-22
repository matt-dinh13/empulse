# Deactivation of mandatory insurance upon standard insurance adding

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Replacement of Insurance on running contract/Use case model
- **Diagram ID**: 164353
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    n_11_110_Cancel_insurance_contract(("11.110 Cancel insurance contract"))
    MOD_11_120_Terminate_insurance_contract(("{MOD}11.120 Terminate insurance contract"))
    System_event[/"System event"/]
    n_11_782_Process_Insurance_activation_event(("11.782 Process Insurance activation event"))
    n_11_149_Deactivate_insurance_on_contract(("11.149 Deactivate insurance on contract"))
    n_11_782_Process_Insurance_activation_event -.->|include| MOD_11_120_Terminate_insurance_contract
    n_11_782_Process_Insurance_activation_event -.->|include| n_11_149_Deactivate_insurance_on_contract
    n_11_782_Process_Insurance_activation_event -.->|include| n_11_110_Cancel_insurance_contract
    System_event --> n_11_782_Process_Insurance_activation_event
```

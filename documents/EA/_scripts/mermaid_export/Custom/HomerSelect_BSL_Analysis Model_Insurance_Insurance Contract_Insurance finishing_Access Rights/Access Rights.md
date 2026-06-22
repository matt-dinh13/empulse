# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Access Rights
- **Diagram ID**: 147846
- **Elements**: 14
- **Connectors**: 11

```mermaid
graph TD
    ADD_08_121_Terminate_contract_insurance_common["{ADD}08.121 Terminate contract insurance common"]
    MOD_08_121_Terminate_contract_insurance_common["{MOD}08.121 Terminate contract insurance common"]
    ADD_08_111_Cancel_contract_insurance_common["{ADD}08.111 Cancel contract insurance common"]
    n_08_111_Cancel_contract_insurance_common["08.111 Cancel contract insurance common"]
    n_11_121_Terminate_insurance_contract_manually["11.121 Terminate insurance contract manually"]
    n_11_121_Terminate_insurance_contract_manually["11.121 Terminate insurance contract manually"]
    n_11_111_Cancel_insurance_contract_manually["11.111 Cancel insurance contract manually"]
    MOD_11_111_Cancel_insurance_contract_manually["{MOD}11.111 Cancel insurance contract manually"]
    n_11_130_Terminate_finished_insurance_contracts["11.130 Terminate finished insurance contracts"]
    n_11_130_Terminate_finished_insurance_contracts["11.130 Terminate finished insurance contracts"]
    n_11_120_Terminate_insurance_contract["11.120 Terminate insurance contract"]
    n_11_110_Cancel_insurance_contract["11.110 Cancel insurance contract"]
    MOD_11_120_Terminate_insurance_contract["{MOD}11.120 Terminate insurance contract"]
    n_11_110_Cancel_insurance_contract["11.110 Cancel insurance contract"]
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| MOD_08_121_Terminate_contract_insurance_common
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| n_11_121_Terminate_insurance_contract_manually
    n_08_111_Cancel_contract_insurance_common -->|unnamed| n_11_110_Cancel_insurance_contract
    n_11_110_Cancel_insurance_contract -->|unnamed| n_11_110_Cancel_insurance_contract
    n_11_130_Terminate_finished_insurance_contracts -->|unnamed| n_11_130_Terminate_finished_insurance_contracts
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| n_08_111_Cancel_contract_insurance_common
    n_08_111_Cancel_contract_insurance_common -->|unnamed| ADD_08_111_Cancel_contract_insurance_common
    MOD_11_120_Terminate_insurance_contract -->|unnamed| n_11_120_Terminate_insurance_contract
    MOD_08_121_Terminate_contract_insurance_common -->|unnamed| MOD_11_120_Terminate_insurance_contract
    MOD_11_111_Cancel_insurance_contract_manually -->|unnamed| n_11_111_Cancel_insurance_contract_manually
    MOD_08_121_Terminate_contract_insurance_common -->|unnamed| ADD_08_121_Terminate_contract_insurance_common
```

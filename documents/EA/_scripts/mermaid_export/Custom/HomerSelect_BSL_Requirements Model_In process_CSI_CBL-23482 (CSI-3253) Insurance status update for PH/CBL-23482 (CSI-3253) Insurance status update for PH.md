# CBL-23482 (CSI-3253) Insurance status update for PH

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-23482 (CSI-3253) Insurance status update for PH
- **Diagram ID**: 157502
- **Elements**: 7
- **Connectors**: 1

```mermaid
graph TD
    Insurance_Contract_Status["Insurance Contract Status"]
    Process_ContractPaidOffSE_CLM["Process ContractPaidOffSE [CLM] "]
    n_01_730_Finish_contract_manually["01.730 Finish contract manually"]
    Req_1_new_Finished_and_Default_status_for_insurance_contract["Req #1 - new Finished and Default status for insurance contract"]
    MOD_Process_ContractFinishingAutomaticallySE_CSI["{MOD}Process ContractFinishingAutomaticallySE [CSI]"]
    MOD_11_120_Terminate_insurance_contract["{MOD}11.120 Terminate insurance contract"]
    n_11_130_Terminate_finished_insurance_contracts["11.130 Terminate finished insurance contracts"]
    n_11_130_Terminate_finished_insurance_contracts -->|unnamed| MOD_11_120_Terminate_insurance_contract
```

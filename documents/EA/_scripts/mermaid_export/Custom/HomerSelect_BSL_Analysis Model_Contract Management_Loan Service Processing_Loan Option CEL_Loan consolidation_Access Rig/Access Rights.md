# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan consolidation/Access Rights
- **Diagram ID**: 146231
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    ADD_01_384_Finalize_contract_consolidation["{ADD}01.384 Finalize contract consolidation"]
    ADD_01_382_Perform_contract_consolidation["{ADD}01.382 Perform contract consolidation"]
    ADD_01_380_Prepare_Contract_for_Consolidation["{ADD}01.380 Prepare Contract for Consolidation"]
    MOD_01_384_Finalize_contract_consolidation["{MOD}01.384 Finalize contract consolidation"]
    n_01_382_Perform_contract_consolidation["01.382 Perform contract consolidation"]
    n_01_380_Prepare_Contract_for_Consolidation["01.380 Prepare Contract for Consolidation"]
    n_01_380_Prepare_Contract_for_Consolidation -->|unnamed| ADD_01_380_Prepare_Contract_for_Consolidation
    MOD_01_384_Finalize_contract_consolidation -->|unnamed| ADD_01_384_Finalize_contract_consolidation
    n_01_382_Perform_contract_consolidation -->|unnamed| ADD_01_382_Perform_contract_consolidation
```

# Access rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Access rights
- **Diagram ID**: 85873
- **Elements**: 8
- **Connectors**: 4

```mermaid
graph TD
    ADD_01_863_Perform_contract_securitization["{ADD}01.863 Perform contract securitization"]
    ADD_01_862_Process_securitization_of_contracts["{ADD}01.862 Process securitization of contracts"]
    n_01_863_Perform_contract_securitization["01.863 Perform contract securitization"]
    n_01_862_Process_securitization_of_contracts["01.862 Process securitization of contracts"]
    ADD_01_860_Process_contract_securitization_file["{ADD}01.860 Process contract securitization file"]
    ADD_01_861_Import_contract_securitization_file["{ADD}01.861 Import contract securitization file"]
    n_01_861_Import_contract_securitization_file["01.861 Import contract securitization file"]
    n_01_860_Process_contract_securitization_file["01.860 Process contract securitization file"]
    n_01_861_Import_contract_securitization_file -->|unnamed| ADD_01_861_Import_contract_securitization_file
    n_01_863_Perform_contract_securitization -->|unnamed| ADD_01_863_Perform_contract_securitization
    n_01_862_Process_securitization_of_contracts -->|unnamed| ADD_01_862_Process_securitization_of_contracts
    n_01_860_Process_contract_securitization_file -->|unnamed| ADD_01_860_Process_contract_securitization_file
```

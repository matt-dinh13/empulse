# CBL-4472 (CLM-1687) PH Contract Debt Sale

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4472 (CLM-1687) PH Contract Debt Sale
- **Diagram ID**: 144810
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    REQ_1_Add_global_parameters_for_controlling_import_sold_cont["REQ #1 - Add global parameters for controlling import sold contracts and their processing"]
    MOD_Allowed_Contract_statuses_for_Contract_sale["{MOD}Allowed Contract statuses for Contract sale"]
    n_01_802_Process_sold_contracts_file["01.802 Process sold contracts file"]
    n_01_801_Import_sold_contracts_file["01.801 Import sold contracts file"]
    n_01_801_Import_sold_contracts_file -->|unnamed| n_01_802_Process_sold_contracts_file
    n_01_802_Process_sold_contracts_file -->|unnamed| MOD_Allowed_Contract_statuses_for_Contract_sale
```

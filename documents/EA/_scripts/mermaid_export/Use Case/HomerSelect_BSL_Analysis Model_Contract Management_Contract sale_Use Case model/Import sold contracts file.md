# Import sold contracts file

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Use Case model
- **Diagram ID**: 160304
- **Elements**: 11
- **Connectors**: 10

```mermaid
graph LR
    Process_ContractSaleRequestedSE(("Process ContractSaleRequestedSE"))
    MOD_Allowed_Contract_statuses_for_Contract_sale["{MOD}Allowed Contract statuses for Contract sale"]
    Sold_contract_file_Sold_contract_file["Sold contract file : Sold contract file"]
    Create_contract_sale_record["Create contract sale record"]
    Same_file_name_not_imported_VAL_0708["Same file name not imported (VAL_0708)"]
    Same_file_content_not_imported_VAL_0709["Same file content not imported (VAL_0709)"]
    User[/"User"/]
    Structure_of_success_message_for_sold_contracts_process["Structure of success message for sold contracts process"]
    Structure_of_message_and_error_report_for_sold_contracts_pro["Structure of message and error report for sold contracts process"]
    n_01_802_Process_sold_contracts_file(("01.802 Process sold contracts file"))
    n_01_801_Import_sold_contracts_file(("01.801 Import sold contracts file"))
    n_01_801_Import_sold_contracts_file -->|unnamed| n_01_802_Process_sold_contracts_file
    n_01_802_Process_sold_contracts_file -->|unnamed| Structure_of_message_and_error_report_for_sold_contracts_pro
    n_01_802_Process_sold_contracts_file -->|unnamed| Structure_of_success_message_for_sold_contracts_process
    n_01_801_Import_sold_contracts_file -->|unnamed| Same_file_content_not_imported_VAL_0709
    n_01_801_Import_sold_contracts_file -->|unnamed| Same_file_name_not_imported_VAL_0708
    n_01_802_Process_sold_contracts_file -->|unnamed| Create_contract_sale_record
    n_01_801_Import_sold_contracts_file -->|unnamed| Sold_contract_file_Sold_contract_file
    n_01_802_Process_sold_contracts_file -->|unnamed| MOD_Allowed_Contract_statuses_for_Contract_sale
    n_01_802_Process_sold_contracts_file --- Process_ContractSaleRequestedSE
    User --> n_01_801_Import_sold_contracts_file
```

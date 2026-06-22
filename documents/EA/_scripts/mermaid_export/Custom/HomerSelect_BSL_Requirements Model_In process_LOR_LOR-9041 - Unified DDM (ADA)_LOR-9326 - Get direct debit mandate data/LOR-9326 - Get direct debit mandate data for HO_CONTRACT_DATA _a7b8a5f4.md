# LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API
- **Diagram ID**: 151154
- **Elements**: 8
- **Connectors**: 4

```mermaid
graph TD
    BankAccount["BankAccount"]
    Get_application_DDM["Get application DDM"]
    Get_bank_data["Get bank data"]
    Get_bank_branch_data["Get bank branch data"]
    DirectDebitMandate["DirectDebitMandate"]
    MOD_DocumentData["{MOD}DocumentData"]
    LOR_9326_Get_direct_debit_mandate_data_for_HO_CONTRACT_DATA_["LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    DirectDebitMandate -->|unnamed| BankAccount
    DirectDebitMandate -->|{ADD LOR-9326/}| Get_bank_data
    DirectDebitMandate -->|{ADD LOR-9326/}| Get_bank_branch_data
    MOD_DocumentData -->|{ADD LOR-9326/}| Get_application_DDM
```

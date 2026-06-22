# LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- **Diagram ID**: 151680
- **Elements**: 11
- **Connectors**: 7

```mermaid
graph TD
    Get_bank_data["Get bank data"]
    Get_bank_branch_data["Get bank branch data"]
    Get_all_application_DDM["Get all application DDM"]
    Create_validation_error_message["Create validation error message"]
    MOD_01_462_Get_DDM_by_application["{MOD}01.462 Get DDM by application"]
    n_01_461_Update_DDM_externally["01.461 Update DDM externally"]
    MOD_01_460_Create_DDM_externally["{MOD}01.460 Create DDM externally"]
    BankAccountInfoDto["BankAccountInfoDto"]
    DDMInfoBaseDto["DDMInfoBaseDto"]
    LOR_9344_Get_direct_debit_mandate_data_for_ApplicationPaymen["LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    MOD_01_460_Create_DDM_externally -->|{ADD LOR-9344/}| Create_validation_error_message
    n_01_461_Update_DDM_externally -->|{ADD LOR-9344/}| Create_validation_error_message
    MOD_01_462_Get_DDM_by_application -->|{ADD LOR-9344/}| Get_all_application_DDM
    MOD_01_462_Get_DDM_by_application -->|{ADD LOR-9344/}| Get_bank_data
    MOD_01_462_Get_DDM_by_application -->|{ADD LOR-9344/}| Create_validation_error_message
    MOD_01_462_Get_DDM_by_application -->|{ADD LOR-9344/}| Get_bank_branch_data
    DDMInfoBaseDto -->|unnamed| BankAccountInfoDto
```

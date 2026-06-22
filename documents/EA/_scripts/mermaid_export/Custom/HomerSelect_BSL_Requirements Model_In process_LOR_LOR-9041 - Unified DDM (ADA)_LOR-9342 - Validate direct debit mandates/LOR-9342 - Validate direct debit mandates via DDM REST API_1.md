# LOR-9342 - Validate direct debit mandates via DDM REST API

```mermaid
graph TD
    MOD_DocumentData["{MOD}DocumentData"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    Get_all_application_DDM["Get all application DDM"]
    n_14_435_POST_ValidateDDM_Validate_direct_debit_mandate_data["14.435 POST ValidateDDM (Validate direct debit mandate data)"]
    Update_application_DDM["Update application DDM"]
    Get_application_DDM["Get application DDM"]
    Validate_application_DDM["Validate application DDM"]
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    MOD_01_186_Prepare_documentation["{MOD}01.186 Prepare documentation"]
    LOR_9342_Validate_direct_debit_mandates_via_DDM_REST_API["LOR-9342 - Validate direct debit mandates via DDM REST API"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    MOD_01_187_Sign_contract -->|{ADD LOR-9342/}| Validate_application_DDM
    MOD_01_186_Prepare_documentation -->|{ADD LOR-9342/}| Get_all_application_DDM
    MOD_01_186_Prepare_documentation -->|{ADD LOPR-9342/}| Update_application_DDM
    MOD_01_186_Prepare_documentation -->|{ADD LOPR-9342/}| Validate_application_DDM
    MOD_DocumentData -->|{ADD LOR-9326/}| Get_application_DDM
    MOD_DocumentData -->|{ADD LOR-9342/}| Get_all_application_DDM
    MOD_01_210_Show_contract_detail -->|{DEL LOR-9342/}| Get_application_DDM
    MOD_01_210_Show_contract_detail -->|{ADD LOR-9342/}| Get_all_application_DDM
    Get_all_application_DDM -->|unnamed| Get_application_DDM
```

# LOR-9306 - Update direct debit mandate from Application detail via DDM REST API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9306 - Update direct debit mandate from Application detail via DDM REST API
- **Diagram ID**: 151066
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph TD
    Update_application_DDM["Update application DDM"]
    MOD_01_422_Update_application_DDM["{MOD}01.422 Update application DDM"]
    Select_application_DDM_for_displaying["Select application DDM for displaying"]
    Get_application_DDM["Get application DDM"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    LOR_9306_Update_direct_debit_mandate_from_Application_detail["LOR-9306 - Update direct debit mandate from Application detail via DDM REST API"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    MOD_01_422_Update_application_DDM -->|{ADD LOR-9306}| Update_application_DDM
    MOD_01_422_Update_application_DDM -->|{ADD LOR-9306}| Get_application_DDM
    MOD_01_210_Show_contract_detail -->|{DEL LOR-9342/}| Get_application_DDM
    MOD_01_210_Show_contract_detail -->|{ADD LOR-9306}| Select_application_DDM_for_displaying
```

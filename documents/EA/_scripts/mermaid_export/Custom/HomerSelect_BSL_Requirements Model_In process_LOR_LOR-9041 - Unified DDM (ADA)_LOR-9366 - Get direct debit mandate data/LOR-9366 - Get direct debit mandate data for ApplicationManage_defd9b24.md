# LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API
- **Diagram ID**: 151678
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    AbstractApplicationRestTO["AbstractApplicationRestTO"]
    Get_all_application_DDM_identification_codes["Get all application DDM identification codes"]
    n_01_040_Get_application_data["01.040 Get application data"]
    LOR_9366_Get_direct_debit_mandate_data_for_ApplicationManage["LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    n_01_040_Get_application_data -->|{ADD LOR-9366/}| Get_all_application_DDM_identification_codes
```

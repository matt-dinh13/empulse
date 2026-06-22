# LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS
- **Diagram ID**: 151881
- **Elements**: 9
- **Connectors**: 4

```mermaid
graph TD
    n_01_040_Get_application_data["01.040 Get application data"]
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    Document["Document"]
    ApplicationDetail["ApplicationDetail"]
    ApplicationDetail["ApplicationDetail"]
    Get_all_application_DDM["Get all application DDM"]
    ProductDetailsType["ProductDetailsType"]
    LOR_9422_Propagate_DDM_documents_into_HO_CONTRACT_DATA_and_A["LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    ProductDetailsType -->|{ADD LOR-9422/}| Get_all_application_DDM
    ApplicationDetail -->|{ADD LOR-9422/}| Get_all_application_DDM
    ApplicationDetail -->|unnamed| Document
    Document -->|{ADD LOR-9422/}| Get_all_application_DDM
```

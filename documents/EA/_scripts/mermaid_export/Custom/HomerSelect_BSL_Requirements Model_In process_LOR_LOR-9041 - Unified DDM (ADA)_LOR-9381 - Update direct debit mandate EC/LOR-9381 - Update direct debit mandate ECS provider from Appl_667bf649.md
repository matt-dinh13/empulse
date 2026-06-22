# LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API
- **Diagram ID**: 151676
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    Change_ECS_provider["Change ECS provider"]
    Update_ECS_provider_for_application_DDM["Update ECS provider for application DDM"]
    Change_ECS_provider["Change ECS provider"]
    n_01_423_Change_ECS_provider_for_application_DDM["01.423 Change ECS provider for application DDM"]
    n_01_423_Change_ECS_provider_for_application_DDM["01.423 Change ECS provider for application DDM"]
    LOR_9381_Update_direct_debit_mandate_ECS_provider_from_Appli["LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    n_01_423_Change_ECS_provider_for_application_DDM -->|unnamed| n_01_423_Change_ECS_provider_for_application_DDM
    n_01_423_Change_ECS_provider_for_application_DDM -->|unnamed| Update_ECS_provider_for_application_DDM
    Change_ECS_provider -->|{ADD LOR-9381/}| n_01_423_Change_ECS_provider_for_application_DDM
```

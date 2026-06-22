# LOR-9325 - Create direct debit mandate from Application detail via DDM REST API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9325 - Create direct debit mandate from Application detail via DDM REST API
- **Diagram ID**: 151620
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    n_01_421_Create_application_DDM["01.421 Create application DDM"]
    ADD_Create_document["{ADD}Create document"]
    Create_application_DDM["Create application DDM"]
    LOR_9325_Create_direct_debit_mandate_from_Application_detail["LOR-9325 - Create direct debit mandate from Application detail via DDM REST API"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    n_01_421_Create_application_DDM -->|{ADD LOR-9325/}| Create_application_DDM
```

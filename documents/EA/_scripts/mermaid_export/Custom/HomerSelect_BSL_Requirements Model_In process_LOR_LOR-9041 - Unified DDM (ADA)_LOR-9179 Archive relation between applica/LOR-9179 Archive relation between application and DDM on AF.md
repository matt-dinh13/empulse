# LOR-9179 Archive relation between application and DDM on AF

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9179 Archive relation between application and DDM on AF
- **Diagram ID**: 152946
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    LOR_9179_Archive_relation_between_application_and_DDM_on_AF["LOR-9179 Archive relation between application and DDM on AF"]
    n_01_080_Fill_in_application["01.080 Fill in application"]
    Application_Processing["Application Processing"]
    LOR_9179_Archive_relation_between_application_and_DDM_on_AF -->|unnamed| LOR_9041_Unified_DDM_ADA
    n_01_080_Fill_in_application -->|unnamed| Application_Processing
```

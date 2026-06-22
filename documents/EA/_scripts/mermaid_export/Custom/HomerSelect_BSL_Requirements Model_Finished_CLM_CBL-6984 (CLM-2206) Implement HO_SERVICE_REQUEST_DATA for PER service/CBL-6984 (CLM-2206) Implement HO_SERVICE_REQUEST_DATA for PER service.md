# CBL-6984 (CLM-2206) Implement HO_SERVICE_REQUEST_DATA for PER service

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6984 (CLM-2206) Implement HO_SERVICE_REQUEST_DATA for PER service
- **Diagram ID**: 121148
- **Elements**: 7
- **Connectors**: 1

```mermaid
graph TD
    DEL_03_205_Generate_ER_document["{DEL}03.205 Generate ER document"]
    REQ_1_Implement_HO_SERVICE_REQUEST_DATA_for_PER_service["REQ #1 - Implement HO_SERVICE_REQUEST_DATA for PER service"]
    HO_SERVICE_REQUEST_DATA_HO_SERVICE_REQUEST_DATA_PER_printout["HO_SERVICE_REQUEST_DATA : HO_SERVICE_REQUEST_DATA - PER printout usage"]
    n_08_051_Create_PER_request_common["08.051 Create PER request common"]
    n_08_356_Generate_service_request_document["08.356 Generate service request document"]
    MOD_08_273_Create_CET_request_common["{MOD}08.273 Create CET request common"]
    HO_ER_REQUEST_DATA_HO_ER_REQUEST_DATA["HO_ER_REQUEST_DATA : HO_ER_REQUEST_DATA"]
    n_08_051_Create_PER_request_common -->|unnamed| DEL_03_205_Generate_ER_document
```

# REQ #3 - Send document.dmsId on full person update

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9294 (CLM-3051) Process cabinet identifier in API request
- **Diagram ID**: 144833
- **Elements**: 4
- **Connectors**: 1

```mermaid
graph TD
    ADD_Fill_DMS_File_attributes_in_update_customer_request["{ADD}Fill DMS File attributes in update customer request"]
    Logical_Data_Model_Document["Logical Data Model : Document "]
    REQ_3_Send_document_dmsId_on_full_person_update["REQ #3 - Send document.dmsId on full person update"]
    n_06_021_Update_client_data_from_contract["06.021 Update client data from contract"]
    n_06_021_Update_client_data_from_contract -->|unnamed| ADD_Fill_DMS_File_attributes_in_update_customer_request
```

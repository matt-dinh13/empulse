# CBL-1855 (CLM-956) Full early repayment services changes

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1855 (CLM-956) Full early repayment services changes
- **Diagram ID**: 158894
- **Elements**: 6
- **Connectors**: 1

```mermaid
graph TD
    Logical_Data_Model_Early_repayment_request["Logical Data Model : Early repayment request"]
    REQ_1_Changes_in_FER_request_creation["REQ #1 - Changes in FER request creation"]
    HO_SERVICE_REQUEST_DATA_HO_SERVICE_REQUEST_DATA_FER_printout["HO_SERVICE_REQUEST_DATA : HO_SERVICE_REQUEST_DATA - FER printout usage"]
    REQ_2_FER_request_printing["REQ #2 - FER request printing"]
    Logical_Data_Model_FER_Setting["Logical Data Model : FER Setting"]
    Use_Case_Full_early_repayment_request_via_GUI["Use Case :Full early repayment request - via GUI"]
    HO_SERVICE_REQUEST_DATA_HO_SERVICE_REQUEST_DATA_FER_printout -->|unnamed| REQ_2_FER_request_printing
```

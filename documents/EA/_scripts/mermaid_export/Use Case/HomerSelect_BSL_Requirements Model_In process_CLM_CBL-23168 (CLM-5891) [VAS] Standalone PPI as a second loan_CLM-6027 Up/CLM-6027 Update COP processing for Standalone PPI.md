# CLM-6027 Update COP processing for Standalone PPI

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan/CLM-6027 Update COP processing for Standalone PPI
- **Diagram ID**: 156634
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph LR
    n_01_360_Cancel_contract(("01.360 Cancel contract"))
    User[/"User"/]
    MOD_08_257_Create_Cooling_off_period_request(("{MOD}08.257 Create Cooling-off period request"))
    Use_Case_Model_Cooling_off_period_request["Use Case Model : Cooling-off period request"]
    Use_Case_Model_Cooling_off_period_processing["Use Case Model : Cooling-off period processing"]
    User --> MOD_08_257_Create_Cooling_off_period_request
    MOD_08_257_Create_Cooling_off_period_request -.->|include| n_01_360_Cancel_contract
```

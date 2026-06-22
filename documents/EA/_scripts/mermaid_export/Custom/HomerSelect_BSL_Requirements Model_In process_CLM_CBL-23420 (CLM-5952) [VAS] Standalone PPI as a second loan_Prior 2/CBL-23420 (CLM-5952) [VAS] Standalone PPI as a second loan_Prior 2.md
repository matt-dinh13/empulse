# CBL-23420 (CLM-5952) [VAS] Standalone PPI as a second loan_Prior 2

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23420 (CLM-5952) [VAS] Standalone PPI as a second loan_Prior 2
- **Diagram ID**: 157585
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    Cancel_Terminate_Service_update_for_SAI_CLM_6072_Cancel_Term["Cancel/Terminate Service update for SAI : CLM-6072 Cancel/Terminate Service update for SAI"]
    CLM_6072_Cancel_Terminate_Service_update_for_SAI["CLM-6072 Cancel/Terminate Service update for SAI"]
    Tab_Services_Tab_Services["Tab-Services : Tab-Services"]
    CLM_6044_Activate_Insurance_on_related_CL_Contract_disbursem["CLM-6044 Activate Insurance on related CL Contract disbursement : CLM-6044 Activate Insurance on related CL Contract disbursement"]
    CLM_6044_Activate_Insurance_on_related_CL_Contract_disbursem["CLM-6044 Activate Insurance on related CL Contract disbursement"]
    CLM_6044_Activate_Insurance_on_related_CL_Contract_disbursem -->|unnamed| CLM_6044_Activate_Insurance_on_related_CL_Contract_disbursem
    Cancel_Terminate_Service_update_for_SAI_CLM_6072_Cancel_Term -->|unnamed| CLM_6072_Cancel_Terminate_Service_update_for_SAI
    Tab_Services_Tab_Services -->|unnamed| CLM_6072_Cancel_Terminate_Service_update_for_SAI
```

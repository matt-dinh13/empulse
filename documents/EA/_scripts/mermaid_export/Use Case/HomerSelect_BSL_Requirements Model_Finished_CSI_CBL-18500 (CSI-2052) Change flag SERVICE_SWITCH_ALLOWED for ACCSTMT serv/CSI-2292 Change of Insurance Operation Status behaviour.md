# CSI-2292 Change of Insurance Operation Status behaviour

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/CSI-2292 Change of Insurance Operation Status behaviour
- **Diagram ID**: 150349
- **Elements**: 6
- **Connectors**: 6

```mermaid
graph LR
    n_11_147_Activate_insurance_on_contract(("11.147 Activate insurance on contract"))
    n_11_149_Deactivate_insurance_on_contract(("11.149 Deactivate insurance on contract"))
    Create_LoanServiceRequest_for_Insurance_Operation_Status["Create LoanServiceRequest for Insurance Operation Status"]
    Create_Loan_Service_Request_with_Service_Operation_Status["Create Loan Service Request with Service Operation Status"]
    MOD_08_346_Add_Insurance_service_on_Contract_common(("{MOD}08.346 Add Insurance service on Contract common"))
    Generate_notification_about_insurance_change["Generate notification about insurance change"]
    MOD_08_346_Add_Insurance_service_on_Contract_common -->|unnamed| Create_Loan_Service_Request_with_Service_Operation_Status
    MOD_08_346_Add_Insurance_service_on_Contract_common -.->|include| n_11_147_Activate_insurance_on_contract
    n_11_149_Deactivate_insurance_on_contract -->|unnamed| Create_LoanServiceRequest_for_Insurance_Operation_Status
    n_11_147_Activate_insurance_on_contract -->|unnamed| Create_LoanServiceRequest_for_Insurance_Operation_Status
    n_11_147_Activate_insurance_on_contract -->|unnamed| Generate_notification_about_insurance_change
    n_11_149_Deactivate_insurance_on_contract -->|unnamed| Generate_notification_about_insurance_change
```

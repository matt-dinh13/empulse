# CSI-2307 Processing AM responses on Service changes

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/CSI-2307 Processing AM responses on Service changes
- **Diagram ID**: 151087
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph LR
    n_11_040_Activate_insurance_contract(("11.040 Activate insurance contract"))
    Get_the_latest_Loan_Service_Request_with_Service_Operation_S["Get the latest Loan Service Request with Service Operation Status"]
    Create_Loan_Service_Request_with_Service_Operation_Status["Create Loan Service Request with Service Operation Status"]
    MOD_08_121_Terminate_contract_insurance_common(("{MOD}08.121 Terminate contract insurance common"))
    n_08_111_Cancel_contract_insurance_common(("08.111 Cancel contract insurance common"))
    CaBus_AM[/"CaBus-AM"/]
    n_08_294_Process_Account_response_on_Contract_Service_notifi(("08.294 Process Account response on Contract Service notifications"))
    n_08_111_Cancel_contract_insurance_common -->|unnamed| Get_the_latest_Loan_Service_Request_with_Service_Operation_S
    n_08_111_Cancel_contract_insurance_common -->|unnamed| Create_Loan_Service_Request_with_Service_Operation_Status
    MOD_08_121_Terminate_contract_insurance_common -->|unnamed| Create_Loan_Service_Request_with_Service_Operation_Status
    MOD_08_121_Terminate_contract_insurance_common -->|unnamed| Get_the_latest_Loan_Service_Request_with_Service_Operation_S
    CaBus_AM --> n_08_294_Process_Account_response_on_Contract_Service_notifi
```

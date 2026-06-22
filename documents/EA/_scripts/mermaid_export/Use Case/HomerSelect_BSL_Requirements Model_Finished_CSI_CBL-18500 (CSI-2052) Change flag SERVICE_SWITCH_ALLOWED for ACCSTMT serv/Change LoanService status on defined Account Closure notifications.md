# Change LoanService status on defined Account Closure notifications

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/CSI-2222 Change LoanService status on defined Account Closure notifications
- **Diagram ID**: 152777
- **Elements**: 8
- **Connectors**: 1

```mermaid
graph LR
    DEL_Process_ContractPaidOffSE_CSI["{DEL}Process ContractPaidOffSE [CSI]"]
    n_11_149_Deactivate_insurance_on_contract(("11.149 Deactivate insurance on contract"))
    Get_the_latest_Loan_Service_Request_with_Service_Operation_S["Get the latest Loan Service Request with Service Operation Status"]
    Create_Loan_Service_Request_with_Service_Operation_Status["Create Loan Service Request with Service Operation Status"]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    CaBus_AM[/"CaBus-AM"/]
    n_08_295_Process_Account_Closure_notifications(("08.295 Process Account Closure notifications"))
    CaBus_AM --> n_08_295_Process_Account_Closure_notifications
```

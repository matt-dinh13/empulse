# Processing Account Closure notifications

```mermaid
graph TD
    Create_LoanServiceRequest_for_Insurance_Operation_Status["Create LoanServiceRequest for Insurance Operation Status"]
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    CaBus_AM["CaBus-AM"]
    MOD_08_121_Terminate_contract_insurance_common["{MOD}08.121 Terminate contract insurance common"]
    n_11_149_Deactivate_insurance_on_contract["11.149 Deactivate insurance on contract"]
    MOD_08_096_Cancel_contract_service_common["{MOD}08.096 Cancel contract service common"]
    MOD_08_091_Terminate_Contract_Service_common["{MOD}08.091 Terminate Contract Service common"]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    n_08_295_Process_Account_Closure_notifications["08.295 Process Account Closure notifications"]
    n_08_111_Cancel_contract_insurance_common["08.111 Cancel contract insurance common"]
    n_11_149_Deactivate_insurance_on_contract -->|unnamed| Create_LoanServiceRequest_for_Insurance_Operation_Status
    CaBus_AM -->|unnamed| n_08_295_Process_Account_Closure_notifications
```

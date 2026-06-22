# Loan Service - Add a Service to Contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model
- **Diagram ID**: 164581
- **Elements**: 15
- **Connectors**: 9

```mermaid
graph LR
    Get_Service_relationships_from_Services["Get Service relationships from Services"]
    v3_ContractService_Create_Contract_Service_method["v3 : ContractService - Create Contract Service method"]
    Service_Exclusivity_Check["Service Exclusivity Check"]
    Get_initial_Contract_service_status["Get initial Contract service status"]
    Get_Service_Type_code_list_from_Services["Get Service Type code list from Services"]
    n_08_080_Add_new_available_Service_on_Contract(("08.080 Add new available Service on Contract"))
    External_system[/"External system"/]
    Get_Services_available_on_Product["Get Services available on Product"]
    Create_Loan_Service_Request_with_Service_Operation_Status["Create Loan Service Request with Service Operation Status"]
    Get_Service_definition_from_New_Service_Catalogue["Get Service definition from New Service Catalogue"]
    Check_Account_status_by_account_number_from_AM["Check Account status by account number from AM"]
    User_Interface_Add_available_services["User Interface :Add available services"]
    User[/"User"/]
    Get_Service_definition_from_Services["Get Service definition from Services"]
    MOD_01_774_Create_Contract_Service(("{MOD}01.774 Create Contract Service"))
    MOD_01_774_Create_Contract_Service -->|unnamed| v3_ContractService_Create_Contract_Service_method
    MOD_01_774_Create_Contract_Service -->|unnamed| Check_Account_status_by_account_number_from_AM
    MOD_01_774_Create_Contract_Service --- External_system
    MOD_01_774_Create_Contract_Service -->|unnamed| Get_Service_definition_from_New_Service_Catalogue
    User_Interface_Add_available_services -->|unnamed| n_08_080_Add_new_available_Service_on_Contract
    MOD_01_774_Create_Contract_Service -->|unnamed| Get_Service_definition_from_Services
    MOD_01_774_Create_Contract_Service -->|unnamed| Get_initial_Contract_service_status
    MOD_01_774_Create_Contract_Service -->|unnamed| Create_Loan_Service_Request_with_Service_Operation_Status
    User --> n_08_080_Add_new_available_Service_on_Contract
```

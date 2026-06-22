# Product and Service selection

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Product and Service selection
- **Diagram ID**: 159890
- **Elements**: 15
- **Connectors**: 16

```mermaid
graph TD
    MOD_Loan_amount_eligibility_check["{MOD}Loan amount eligibility check"]
    MOD_Eligible_Insurance_Service["{MOD}Eligible Insurance Service"]
    MOD_Document_container_check["{MOD}Document container check"]
    MOD_NEW_Service_determination["{MOD}NEW Service determination"]
    Service_Exclusivity_Check["Service Exclusivity Check"]
    Service_qualification_criteria_check["Service qualification criteria check"]
    Default_document_container["Default document container"]
    MOD_Check_compatibility_of_service_type_to_product_propertie["{MOD}Check compatibility of service type to product properties"]
    Add_mandatory_service["Add mandatory service"]
    Check_Service_Availability_on_Salesroom["Check Service Availability on Salesroom"]
    Get_Salesroom_Sales_Items["Get Salesroom Sales Items"]
    MOD_Get_allowed_Product_Types_on_POS["{MOD}Get allowed Product Types on POS"]
    MOD_Product_selection["{MOD}Product selection"]
    Web_camera_check["Web camera check"]
    DEL_Service_determination["{DEL}Service determination"]
    MOD_NEW_Service_determination -->|unnamed| Check_Service_Availability_on_Salesroom
    MOD_Eligible_Insurance_Service -->|unnamed| Service_Exclusivity_Check
    MOD_NEW_Service_determination -->|unnamed| Service_Exclusivity_Check
    DEL_Service_determination -->|unnamed| Service_Exclusivity_Check
    MOD_NEW_Service_determination -->|unnamed| Service_qualification_criteria_check
    DEL_Service_determination -->|unnamed| Service_qualification_criteria_check
    Web_camera_check -->|unnamed| Default_document_container
    MOD_Product_selection -->|unnamed| MOD_Document_container_check
    Add_mandatory_service -->|unnamed| MOD_Check_compatibility_of_service_type_to_product_propertie
    MOD_NEW_Service_determination -->|unnamed| MOD_Loan_amount_eligibility_check
    DEL_Service_determination -->|unnamed| Check_Service_Availability_on_Salesroom
    MOD_Product_selection -->|unnamed| Get_Salesroom_Sales_Items
    Check_Service_Availability_on_Salesroom -->|unnamed| Get_Salesroom_Sales_Items
    MOD_Product_selection -->|unnamed| MOD_Get_allowed_Product_Types_on_POS
    MOD_Product_selection -->|unnamed| Web_camera_check
    MOD_Document_container_check -->|unnamed| Default_document_container
```

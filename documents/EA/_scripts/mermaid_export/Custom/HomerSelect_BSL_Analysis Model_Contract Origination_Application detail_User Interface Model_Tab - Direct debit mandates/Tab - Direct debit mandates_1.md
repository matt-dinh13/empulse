# Tab - Direct debit mandates

```mermaid
graph TD
    n_20_127_Take_and_upload_contract_document_photo["20.127 Take and upload contract document photo"]
    Take_photo["Take photo"]
    Take_photo["Take photo"]
    n_20_125_Upload_application_document["20.125 Upload application document"]
    n_01_423_Change_ECS_provider_for_application_DDM["01.423 Change ECS provider for application DDM"]
    Change_ECS_provider["Change ECS provider"]
    Create_Update_DDM["Create/Update DDM"]
    Get_allowed_repayment_methods_for_application["Get allowed repayment methods for application"]
    n_01_421_Create_application_DDM["01.421 Create application DDM"]
    Create["Create"]
    Regular_payment_amount["Regular payment amount"]
    Regular_payment_type["Regular payment type"]
    Direct_debit_mandate_information["Direct debit mandate information"]
    Update["Update"]
    Change_ECS_provider["Change ECS provider"]
    User_Interface_Model_Application_detail["User Interface Model : Application detail"]
    MOD_Document_attributes_visibility["{MOD}Document attributes visibility"]
    n_01_125_Upload_contract_document["01.125 Upload contract document"]
    n_01_122_Delete_DDM_document["01.122 Delete DDM document"]
    n_01_112_Edit_DDM_document["01.112 Edit DDM document"]
    Document_type_name["[Document type name]"]
    Document_attributes["Document attributes"]
    Document_page_information["Document page information"]
    Upload_document["Upload document"]
    Operational_buttons_DDM_document_page_operations["Operational buttons - DDM document page operations"]
    DDM_document_page["DDM document page"]
    Remove_document["Remove document"]
    Edit_document["Edit document"]
    Upload_document["Upload document"]
    Operational_buttons_DDM_document_operations["Operational buttons - DDM document operations"]
    DDM_type["DDM type"]
    Document_information["Document information"]
    MOD_DDM_document["{MOD}DDM document"]
    External_code["External code"]
    Show_Bank_Account["Show Bank Account"]
    Confirmation_status_remark["Confirmation status remark"]
    ECS_provider["ECS provider"]
    Confirmation_status["Confirmation status"]
    Status["Status"]
    Frequency["Frequency"]
    Valid_to["Valid to"]
    Limit["Limit"]
    Valid_from["Valid from"]
    Code["Code"]
    DDM_information["DDM information"]
    Operational_buttons_DDM_operations["Operational buttons - DDM operations"]
    Tab_Direct_debit_mandates["Tab - Direct debit mandates"]
    MOD_01_427_Change_DDM_ECS_provider["{MOD}01.427 Change DDM ECS provider"]
    MOD_01_422_Update_application_DDM["{MOD}01.422 Update application DDM"]
    Update -->|unnamed| MOD_01_422_Update_application_DDM
    Change_ECS_provider -->|unnamed| MOD_01_427_Change_DDM_ECS_provider
    Edit_document -->|unnamed| n_01_112_Edit_DDM_document
    Remove_document -->|unnamed| n_01_122_Delete_DDM_document
    Upload_document -->|unnamed| n_01_125_Upload_contract_document
    Upload_document -->|unnamed| n_01_125_Upload_contract_document
    Document_attributes -->|unnamed| MOD_Document_attributes_visibility
    Create -->|unnamed| n_01_421_Create_application_DDM
    Tab_Direct_debit_mandates -->|unnamed| Get_allowed_repayment_methods_for_application
    Change_ECS_provider -->|{ADD LOR-9381/}| n_01_423_Change_ECS_provider_for_application_DDM
    Upload_document -->|unnamed| n_20_125_Upload_application_document
    Upload_document -->|unnamed| n_20_125_Upload_application_document
    Take_photo -->|unnamed| n_20_127_Take_and_upload_contract_document_photo
    Take_photo -->|unnamed| n_20_127_Take_and_upload_contract_document_photo
```

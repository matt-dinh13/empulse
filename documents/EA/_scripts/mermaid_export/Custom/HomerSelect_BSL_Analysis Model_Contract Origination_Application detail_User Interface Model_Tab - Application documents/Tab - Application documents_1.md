# Tab - Application documents

```mermaid
graph TD
    n_20_127_Take_and_upload_contract_document_photo["20.127 Take and upload contract document photo"]
    n_20_125_Upload_application_document["20.125 Upload application document"]
    Document_page_information["Document page information"]
    Upload_document["Upload document"]
    Take_photo["Take photo"]
    Retry_document_upload["Retry document upload"]
    Operational_buttons_application_document_page_operations["Operational buttons - application document page operations"]
    Application_document_page["Application document page"]
    MOD_Document_attributes_visibility["{MOD}Document attributes visibility"]
    Document_attributes["Document attributes"]
    Document_type_name["[Document type name]"]
    MOD_01_100_Add_contract_document["{MOD}01.100 Add contract document"]
    Upload_document["Upload document"]
    Set_document_security_level["Set document security level"]
    Add_Edit_document["Add/Edit document"]
    Photo_component["Photo component"]
    MOD_01_110_Edit_contract_document["{MOD}01.110 Edit contract document"]
    User_Interface_Model_Application_detail["User Interface Model : Application detail"]
    Set_security_level["Set security level"]
    MOD_01_114_Set_contract_document_security_level["{MOD}01.114 Set contract document security level"]
    Retry_document_upload["Retry document upload"]
    n_01_127_Take_and_upload_contract_document_photo["01.127 Take and upload contract document photo"]
    Take_photo["Take photo"]
    n_01_125_Upload_contract_document["01.125 Upload contract document"]
    n_01_120_Delete_contract_document["01.120 Delete contract document"]
    Remove_document["Remove document"]
    Upload_document["Upload document"]
    Edit_document["Edit document"]
    Add_document["Add document"]
    Document_information["Document information"]
    Operational_buttons_application_document_operations["Operational buttons - application document operations"]
    Application_document["Application document"]
    Tab_Application_documents["Tab - Application documents"]
    Take_photo -->|unnamed| n_20_127_Take_and_upload_contract_document_photo
    Upload_document -->|unnamed| n_20_125_Upload_application_document
    Upload_document -->|unnamed| n_20_125_Upload_application_document
    Document_attributes -->|unnamed| MOD_Document_attributes_visibility
    Add_document -->|unnamed| MOD_01_100_Add_contract_document
    Take_photo -->|unnamed| n_20_127_Take_and_upload_contract_document_photo
    Remove_document -->|unnamed| n_01_120_Delete_contract_document
    Edit_document -->|unnamed| MOD_01_110_Edit_contract_document
    Set_security_level -->|unnamed| MOD_01_114_Set_contract_document_security_level
    Take_photo -->|unnamed| n_01_127_Take_and_upload_contract_document_photo
    Take_photo -->|unnamed| n_01_127_Take_and_upload_contract_document_photo
    Retry_document_upload -->|unnamed| n_01_125_Upload_contract_document
    Upload_document -->|unnamed| n_01_125_Upload_contract_document
    Upload_document -->|unnamed| n_01_125_Upload_contract_document
    Retry_document_upload -->|unnamed| n_01_125_Upload_contract_document
```

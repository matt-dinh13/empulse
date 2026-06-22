# Tab-Contract documents

```mermaid
graph TD
    Document_page_information["Document page information"]
    MOD_Document_attributes_visibility["{MOD}Document attributes visibility"]
    Document_attributes["Document attributes"]
    Document_type_name["[Document type name]"]
    Upload_document["Upload document"]
    Take_photo["Take photo"]
    Retry_document_upload["Retry document upload"]
    Contract_document_page_operations["Contract document page operations"]
    Document_information["Document information"]
    Contract_document_page["Contract document page"]
    MOD_01_110_Edit_contract_document["{MOD}01.110 Edit contract document"]
    MOD_01_100_Add_contract_document["{MOD}01.100 Add contract document"]
    MOD_01_114_Set_contract_document_security_level["{MOD}01.114 Set contract document security level"]
    Set_security_level["Set security level"]
    Retry_document_upload["Retry document upload"]
    n_01_127_Take_and_upload_contract_document_photo["01.127 Take and upload contract document photo"]
    Take_photo["Take photo"]
    n_01_125_Upload_contract_document["01.125 Upload contract document"]
    n_01_120_Delete_contract_document["01.120 Delete contract document"]
    Remove_document["Remove document"]
    Upload_document["Upload document"]
    Edit_document["Edit document"]
    Contract_document_operations["Contract document operations"]
    Add_document["Add document"]
    Contract_document["Contract document"]
    Tab_Contract_documents["Tab - Contract documents"]
    Remove_document -->|unnamed| n_01_120_Delete_contract_document
    Upload_document -->|unnamed| n_01_125_Upload_contract_document
    Upload_document -->|unnamed| n_01_125_Upload_contract_document
    Retry_document_upload -->|unnamed| n_01_125_Upload_contract_document
    Retry_document_upload -->|unnamed| n_01_125_Upload_contract_document
    Take_photo -->|unnamed| n_01_127_Take_and_upload_contract_document_photo
    Take_photo -->|unnamed| n_01_127_Take_and_upload_contract_document_photo
    Set_security_level -->|unnamed| MOD_01_114_Set_contract_document_security_level
    Add_document -->|unnamed| MOD_01_100_Add_contract_document
    Edit_document -->|unnamed| MOD_01_110_Edit_contract_document
    Document_attributes -->|unnamed| MOD_Document_attributes_visibility
```

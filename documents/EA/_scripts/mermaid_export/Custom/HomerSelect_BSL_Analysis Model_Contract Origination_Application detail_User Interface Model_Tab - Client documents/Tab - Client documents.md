# Tab - Client documents

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents
- **Diagram ID**: 158233
- **Elements**: 40
- **Connectors**: 20

```mermaid
graph TD
    n_20_133_Delete_document_content["20.133 Delete document content"]
    n_20_129_Take_and_upload_client_document_photo["20.129 Take and upload client document photo"]
    n_20_126_Upload_client_document_file["20.126 Upload client document file"]
    Document_page_information["Document page information"]
    Upload_document["Upload document"]
    Take_photo["Take photo"]
    Retry_document_upload["Retry document upload"]
    Remove_document_content["Remove document content"]
    Operational_buttons_client_document_page_operations["Operational buttons - client document page operations"]
    Client_document_page["Client document page"]
    Document_attributes["Document attributes"]
    Document_type_name["[Document type name]"]
    MOD_Document_attributes_visibility["{MOD}Document attributes visibility"]
    Set_document_security_level["Set document security level"]
    Set_proof_check["Set proof check"]
    Upload_document["Upload document"]
    Add_Edit_document["Add/Edit document"]
    Photo_component["Photo component"]
    n_01_126_Upload_client_document_file["01.126 Upload client document file"]
    MOD_01_113_Edit_client_document["{MOD}01.113 Edit client document"]
    Set_security_level["Set security level"]
    User_Interface_Model_Application_detail["User Interface Model : Application detail"]
    Retry_document_upload["Retry document upload"]
    n_01_129_Take_and_upload_client_document_photo["01.129 Take and upload client document photo"]
    Take_photo["Take photo"]
    n_01_133_Delete_document_content["01.133 Delete document content"]
    Remove_document_content["Remove document content"]
    Set_proof_check["Set proof check"]
    MOD_01_105_Set_document_proof_check["{MOD}01.105 Set document proof check"]
    n_01_123_Delete_client_document["01.123 Delete client document"]
    Remove_document["Remove document"]
    Edit_document["Edit document"]
    Upload_document["Upload document"]
    Document_information["Document information"]
    Operational_buttons_client_document_operations["Operational buttons - client document operations"]
    Client_document["Client document"]
    n_01_103_Add_client_document["01.103 Add client document"]
    Add_document["Add document"]
    Tab_Client_documents["Tab - Client documents"]
    n_01_116_Set_client_document_security_level["01.116 Set client document security level"]
    Upload_document -->|unnamed| n_01_126_Upload_client_document_file
    Remove_document_content -->|unnamed| n_20_133_Delete_document_content
    Take_photo -->|unnamed| n_20_129_Take_and_upload_client_document_photo
    Take_photo -->|unnamed| n_20_129_Take_and_upload_client_document_photo
    Upload_document -->|unnamed| n_20_126_Upload_client_document_file
    Upload_document -->|unnamed| n_20_126_Upload_client_document_file
    Document_attributes -->|unnamed| MOD_Document_attributes_visibility
    Remove_document_content -->|unnamed| n_20_133_Delete_document_content
    Set_security_level -->|unnamed| n_01_116_Set_client_document_security_level
    Retry_document_upload -->|unnamed| n_01_126_Upload_client_document_file
    Retry_document_upload -->|unnamed| n_01_126_Upload_client_document_file
    Upload_document -->|unnamed| n_01_126_Upload_client_document_file
    Edit_document -->|unnamed| MOD_01_113_Edit_client_document
    Take_photo -->|unnamed| n_01_129_Take_and_upload_client_document_photo
    Take_photo -->|unnamed| n_01_129_Take_and_upload_client_document_photo
    Remove_document_content -->|unnamed| n_01_133_Delete_document_content
    Remove_document_content -->|unnamed| n_01_133_Delete_document_content
    Set_proof_check -->|unnamed| MOD_01_105_Set_document_proof_check
    Remove_document -->|unnamed| n_01_123_Delete_client_document
    Add_document -->|unnamed| n_01_103_Add_client_document
```

# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Business Rules
- **Diagram ID**: 157425
- **Elements**: 8
- **Connectors**: 8

```mermaid
graph TD
    Check_that_user_is_assigned_to_the_same_salesroom["Check that user is assigned to the same salesroom"]
    DEL_01_169_Get_document_content["{DEL}01.169 Get document content"]
    DEL_01_174_Update_document["{DEL}01.174 Update document"]
    DEL_01_179_Upload_document_file["{DEL}01.179 Upload document file"]
    n_01_009_Upload_file_to_document_archive["01.009 Upload file to document archive"]
    Create_validation_error_message["Create validation error message"]
    Add_Edit_document_validations["Add/Edit document validations"]
    DEL_Update_document_instance["{DEL}Update document instance"]
    DEL_Update_document_instance -->|unnamed| Add_Edit_document_validations
    DEL_Update_document_instance -->|unnamed| Create_validation_error_message
    DEL_Update_document_instance -->|unnamed| n_01_009_Upload_file_to_document_archive
    DEL_Update_document_instance -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    DEL_01_174_Update_document -->|unnamed| DEL_Update_document_instance
    DEL_01_174_Update_document -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
    DEL_01_179_Upload_document_file -->|unnamed| DEL_Update_document_instance
    DEL_01_169_Get_document_content -->|unnamed| Check_that_user_is_assigned_to_the_same_salesroom
```

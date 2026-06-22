# CLM-776 (CBL-1324) Paperlerss REQ14 - Edit documents

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-776 (CBL-1324) Paperlerss REQ14 - Edit documents
- **Diagram ID**: 103422
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    ContractDocuments_ContractDocumentWS_Update_document["ContractDocuments : ContractDocumentWS - Update document"]
    UseCase_Model_Upload_document_from_external_source["UseCase Model : Upload document from external source"]
    Enhance_some_Contract_Management_s_web_service_by_new_method["Enhance some Contract Management’s web service by new method by which it would be possible to edit document attributes"]
    REQ_1_System_provides_update_of_existing_Document_object_and["REQ#1 - System provides update of existing Document object and its attributes by external system by API"]
    REQ_1_System_provides_update_of_existing_Document_object_and -->|unnamed| Enhance_some_Contract_Management_s_web_service_by_new_method
    UseCase_Model_Upload_document_from_external_source -->|unnamed| REQ_1_System_provides_update_of_existing_Document_object_and
    ContractDocuments_ContractDocumentWS_Update_document -->|unnamed| REQ_1_System_provides_update_of_existing_Document_object_and
```

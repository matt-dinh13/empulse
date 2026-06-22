# REQ #2 - Update ContractDocument WS to use UUID instead of DOCUMENT_REF

```mermaid
graph TD
    n_01_009_Upload_file_to_document_archive["01.009 Upload file to document archive"]
    n_01_108_Add_DDM_document_common["01.108 Add DDM document common"]
    n_01_106_Add_client_document_common["01.106 Add client document common"]
    n_01_107_Add_contract_document_common["01.107 Add contract document common"]
    REQ_2_Update_ContractDocument_WS_to_use_UUID_instead_of_DOCU["REQ #2 - Update ContractDocument WS to use UUID instead of DOCUMENT_REF"]
    ContractDocuments_ContractDocumentWS_Create_document["ContractDocuments : ContractDocumentWS - Create document"]
    Common_for_ContractDocument_WS_and_Contract_detail_GUI["Common for ContractDocument WS and Contract detail GUI"]
    DEL_01_277_Set_document_registration_check_service["{DEL}01.277 Set document registration check service"]
    DEL_01_276_Get_documents_for_registration_checking_service["{DEL}01.276 Get documents for registration checking service"]
```

# Document page information

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Document info/User Interface Model
- **Diagram ID**: 150908
- **Elements**: 16
- **Connectors**: 9

```mermaid
graph TD
    MOD_Preview_documents_based_on_security_level["{MOD}Preview documents based on security level"]
    Document_page_name["[Document page name]"]
    Document_file_revisions["Document file revisions"]
    MOD_01_128_Preview_document["{MOD}01.128 Preview document"]
    n_01_135_Get_information_about_document_from_document_archiv["01.135 Get information about document from document archive"]
    Tab_Direct_debit_mandates["Tab-Direct debit mandates"]
    Tab_Document_Printouts["Tab-Document Printouts"]
    Tab_Client_documents["Tab-Client documents"]
    Tab_Contract_documents["Tab-Contract documents"]
    Document_file_preview["Document file preview"]
    Close["Close"]
    Document_file_preview["Document file preview"]
    n_["? ? ?"]
    New_document_version_is_being_uploaded_into_document_archive["New document version is being uploaded into document archive."]
    Document_file["Document file"]
    MOD_Document_page_information["{MOD}Document page information"]
    Document_file -->|unnamed| n_01_135_Get_information_about_document_from_document_archiv
    Document_file_preview -->|unnamed| MOD_01_128_Preview_document
    Tab_Contract_documents -->|use| MOD_Document_page_information
    Tab_Client_documents -->|use| MOD_Document_page_information
    Tab_Document_Printouts -->|use| MOD_Document_page_information
    Tab_Direct_debit_mandates -->|use| MOD_Document_page_information
    Document_file_revisions -->|unnamed| Document_file_preview
    Document_file_revisions -->|unnamed| MOD_01_128_Preview_document
    MOD_01_128_Preview_document -->|unnamed| MOD_Preview_documents_based_on_security_level
```

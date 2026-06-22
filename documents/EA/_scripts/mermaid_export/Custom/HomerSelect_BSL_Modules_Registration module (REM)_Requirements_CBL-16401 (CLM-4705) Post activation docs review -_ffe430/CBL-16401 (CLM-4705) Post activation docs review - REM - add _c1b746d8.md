# CBL-16401 (CLM-4705) Post activation docs review - REM - add support of DDM documents to API methods

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-16401 (CLM-4705) Post activation docs review - REM - add support of DDM documents to API methods
- **Diagram ID**: 156789
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    getRegistrationDocuments_getRegistrationDocuments["getRegistrationDocuments : getRegistrationDocuments"]
    getDDM_getDDM["getDDM : getDDM"]
    Use_Cases_Get_registration_documents["Use Cases :Get registration documents"]
    CLM_4705_Add_support_of_DDM_documents_to_API_methods["CLM-4705 Add support of DDM documents to API methods"]
    CLM_4705_Add_support_of_DDM_documents_to_API_methods -->|unnamed| Use_Cases_Get_registration_documents
    CLM_4705_Add_support_of_DDM_documents_to_API_methods -->|unnamed| getDDM_getDDM
    CLM_4705_Add_support_of_DDM_documents_to_API_methods -->|unnamed| getRegistrationDocuments_getRegistrationDocuments
```

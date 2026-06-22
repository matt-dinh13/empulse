# Client search

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/User Interface Model/Client search form
- **Diagram ID**: 139663
- **Elements**: 14
- **Connectors**: 6

```mermaid
graph TD
    Product["Product"]
    VN["VN"]
    PH["PH"]
    KZ["KZ"]
    IN["IN"]
    ID["ID"]
    MOD_01_160_Search_client["{MOD}01.160 Search client"]
    Mapping_CLIENT_SEARCH_data_to_application_form["Mapping CLIENT_SEARCH data to application form"]
    Fingerprint_Client["Fingerprint Client"]
    Client_search_detail["Client search detail"]
    Application_form["Application form"]
    Cancel["Cancel"]
    Search["Search"]
    Search_client["Search client"]
    Search -->|No client found| Application_form
    Cancel -->|unnamed| Application_form
    Search -->|Client found| Client_search_detail
    Search -->|Fingerprints/e-document to be scanned| Fingerprint_Client
    Search_client -->|unnamed| MOD_01_160_Search_client
    Mapping_CLIENT_SEARCH_data_to_application_form -->|unnamed| Search_client
```

# Add/Edit document

```mermaid
graph TD
    Tab_Application_documents["Tab - Application documents"]
    Document_type["Document type"]
    Document_attributes["Document attributes"]
    Tab_Direct_debit_mandates["Tab - Direct debit mandates"]
    Tab_Client_documents["Tab - Client documents"]
    n_01_112_Edit_DDM_document["01.112 Edit DDM document"]
    n_01_102_Add_DDM_document["01.102 Add DDM document"]
    MOD_01_113_Edit_client_document["{MOD}01.113 Edit client document"]
    n_01_103_Add_client_document["01.103 Add client document"]
    MOD_01_110_Edit_contract_document["{MOD}01.110 Edit contract document"]
    MOD_01_100_Add_contract_document["{MOD}01.100 Add contract document"]
    Cancel["Cancel"]
    OK["OK"]
    Add_Edit_document["Add/Edit document"]
    Add_Edit_document["Add/Edit document"]
    Tab_Direct_debit_mandates -->|unnamed| Add_Edit_document
    Tab_Client_documents -->|unnamed| Add_Edit_document
    Tab_Application_documents -->|unnamed| Add_Edit_document
    Add_Edit_document -->|unnamed| MOD_01_100_Add_contract_document
    Add_Edit_document -->|unnamed| MOD_01_110_Edit_contract_document
    Add_Edit_document -->|unnamed| n_01_103_Add_client_document
    Add_Edit_document -->|unnamed| MOD_01_113_Edit_client_document
    Add_Edit_document -->|unnamed| n_01_102_Add_DDM_document
    Add_Edit_document -->|unnamed| n_01_112_Edit_DDM_document
```

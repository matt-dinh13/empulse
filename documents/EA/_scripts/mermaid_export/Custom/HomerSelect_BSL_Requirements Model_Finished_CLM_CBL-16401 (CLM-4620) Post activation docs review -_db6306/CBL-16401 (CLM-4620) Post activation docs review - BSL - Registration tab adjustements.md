# CBL-16401 (CLM-4620) Post activation docs review - BSL - Registration tab adjustements

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16401 (CLM-4620) Post activation docs review - BSL - Registration tab adjustements
- **Diagram ID**: 144919
- **Elements**: 13
- **Connectors**: 5

```mermaid
graph TD
    ADD_Edit_document["{ADD}Edit document"]
    MOD_01_110_Edit_contract_document["{MOD}01.110 Edit contract document"]
    MOD_01_113_Edit_client_document["{MOD}01.113 Edit client document"]
    ADD_01_282_Edit_client_or_contract_document["{ADD}01.282 Edit client or contract document"]
    ADD_01_282_Edit_client_or_contract_document["{ADD}01.282 Edit client or contract document"]
    n_01_282_Edit_client_or_contract_document["01.282 Edit client or contract document"]
    ADD_01_280_Record_document_mistake["{ADD}01.280 Record document mistake"]
    MOD_01_280_Record_document_mistake_v2["{MOD}01.280 Record document mistake v2"]
    n_01_280_Record_document_mistake["01.280 Record document mistake"]
    CLM_4620_Post_activation_docs_review_BSL_Registration_tab_ad["CLM-4620  Post activation docs review - BSL - Registration tab adjustements"]
    Record_mistake["Record mistake"]
    Edit_document["Edit document"]
    Operations_on_active_contract_on_Registration_tab["Operations on active contract on Registration tab"]
    MOD_01_280_Record_document_mistake_v2 -->|unnamed| n_01_280_Record_document_mistake
    MOD_01_280_Record_document_mistake_v2 -->|unnamed| ADD_01_280_Record_document_mistake
    n_01_282_Edit_client_or_contract_document -->|unnamed| ADD_01_282_Edit_client_or_contract_document
    n_01_282_Edit_client_or_contract_document -->|unnamed| ADD_01_282_Edit_client_or_contract_document
    ADD_Edit_document -->|unnamed| n_01_282_Edit_client_or_contract_document
```

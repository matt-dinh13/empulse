# CBL-14919 NATIONAL ID as new primary ID in PH

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14919 NATIONAL ID as new primary ID in PH
- **Diagram ID**: 144871
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    ADD_01_110_Edit_contract_document_flag_READ_ONLY["{ADD}01.110 Edit contract document (flag READ_ONLY)"]
    MOD_01_110_Edit_contract_document["{MOD}01.110 Edit contract document"]
    ADD_01_113_Edit_client_document_flag_READ_ONLY["{ADD}01.113 Edit client document (flag READ_ONLY)"]
    MOD_Access_control_to_Document_by_Document_type_flag["{MOD}Access control to Document by Document type flag"]
    MOD_01_113_Edit_client_document["{MOD}01.113 Edit client document"]
    CLM_4365_Implement_priviliges_for_editing_read_only_document["CLM-4365 - Implement priviliges for editing read only documents"]
    MOD_01_113_Edit_client_document -->|unnamed| MOD_Access_control_to_Document_by_Document_type_flag
    MOD_01_113_Edit_client_document -->|unnamed| ADD_01_113_Edit_client_document_flag_READ_ONLY
    MOD_01_110_Edit_contract_document -->|unnamed| MOD_Access_control_to_Document_by_Document_type_flag
    MOD_01_110_Edit_contract_document -->|unnamed| ADD_01_110_Edit_contract_document_flag_READ_ONLY
```

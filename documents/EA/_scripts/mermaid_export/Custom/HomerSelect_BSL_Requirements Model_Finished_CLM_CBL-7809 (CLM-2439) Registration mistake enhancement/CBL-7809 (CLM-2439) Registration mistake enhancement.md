# CBL-7809 (CLM-2439) Registration mistake enhancement

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7809 (CLM-2439) Registration mistake enhancement
- **Diagram ID**: 121561
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    n_10_080_Create_mistake_ticket["10.080 Create mistake ticket"]
    MOD_01_280_Record_document_mistake_v2["{MOD}01.280 Record document mistake v2"]
    n_01_270_Register_contract_manually["01.270 Register contract manually"]
    REQ_2_Keep_Registration_page_as_active_tab_after_contract_re["REQ#2 - Keep Registration page as active tab after contract registration"]
    REQ_1_Record_mistake_creation_in_the_popup_window_also_with_["REQ#1 - Record mistake creation in the popup window also with new TCK"]
    MOD_01_280_Record_document_mistake_v2 -->|unnamed| n_10_080_Create_mistake_ticket
```

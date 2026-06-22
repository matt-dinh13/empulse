# CBL-29217 (CSI-4601) Extend maximum length for QR_RAW_DATA and QR_ADDRESS of document type ID_CARD

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29217 (CSI-4601) Extend maximum length for QR_RAW_DATA and QR_ADDRESS of document type ID_CARD
- **Diagram ID**: 164701
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    MOD_CSI_4601_Document_Attribute["{MOD CSI-4601}Document Attribute"]
    Logical_Data_Model_Document_Instace_Logical_Data_Model["Logical Data Model : Document Instace - Logical Data Model"]
    Documents_v2_GetDocument["Documents_v2 : GetDocument"]
    Logical_Data_Model_Document["Logical Data Model : Document "]
    REQ_1_Extend_max_length_for_QR_RAW_DATA_and_QR_ADDRESS_of_do["REQ#1 - Extend max length for QR_RAW_DATA and QR_ADDRESS of doc type ID_CARD"]
    REQ_1_Extend_max_length_for_QR_RAW_DATA_and_QR_ADDRESS_of_do -->|unnamed| MOD_CSI_4601_Document_Attribute
    REQ_1_Extend_max_length_for_QR_RAW_DATA_and_QR_ADDRESS_of_do -->|unnamed| Logical_Data_Model_Document_Instace_Logical_Data_Model
    REQ_1_Extend_max_length_for_QR_RAW_DATA_and_QR_ADDRESS_of_do -->|unnamed| Documents_v2_GetDocument
    REQ_1_Extend_max_length_for_QR_RAW_DATA_and_QR_ADDRESS_of_do -->|unnamed| Logical_Data_Model_Document
```

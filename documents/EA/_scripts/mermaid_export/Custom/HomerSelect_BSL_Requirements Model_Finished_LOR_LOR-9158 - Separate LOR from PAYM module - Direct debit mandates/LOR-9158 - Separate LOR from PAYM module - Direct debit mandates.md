# LOR-9158 - Separate LOR from PAYM module - Direct debit mandates

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates
- **Diagram ID**: 150758
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    el_1744470["Note"]
    LOR_9257_Get_direct_debit_mandate_data_for_application_form_["LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API"]
    LOR_9180_Create_DDM_document_automatically_upon_creating_DDM["LOR-9180 - Create DDM document automatically upon creating DDM draft"]
    LOR_9180_Create_DDM_document_automatically_upon_creating_DDM["LOR-9180 - Create DDM document automatically upon creating DDM draft"]
    LOR_9257_Get_direct_debit_mandate_data_for_application_form_["LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API"]
    LOR_9158_Separate_LOR_from_PAYM_module_Direct_debit_mandates["LOR-9158 - Separate LOR from PAYM module - Direct debit mandates"]
    LOR_9160_Save_direct_debit_mandate_data_from_application_for["LOR-9160 - Save direct debit mandate data from application form via DDM REST API"]
    LOR_9160_Save_direct_debit_mandate_data_from_application_for["LOR-9160 - Save direct debit mandate data from application form via DDM REST API"]
    LOR_9180_Create_DDM_document_automatically_upon_creating_DDM -->|unnamed| LOR_9158_Separate_LOR_from_PAYM_module_Direct_debit_mandates
    LOR_9257_Get_direct_debit_mandate_data_for_application_form_ -->|unnamed| LOR_9158_Separate_LOR_from_PAYM_module_Direct_debit_mandates
    LOR_9160_Save_direct_debit_mandate_data_from_application_for -->|unnamed| LOR_9158_Separate_LOR_from_PAYM_module_Direct_debit_mandates
```

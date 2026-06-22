# LOR-9440 - Adjust logic of direct debit mandate data prefilling onto application form

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9440 - Adjust logic of direct debit mandate data prefilling onto application form
- **Diagram ID**: 152089
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    Get_application_DDM["Get application DDM"]
    Get_all_application_DDM["Get all application DDM"]
    Get_client_s_previous_DDM_for_application_form_prefilling["Get client's previous DDM for application form prefilling"]
    LOR_9440_Adjust_logic_of_direct_debit_mandate_data_prefillin["LOR-9440 - Adjust logic of direct debit mandate data prefilling onto application form"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    Get_all_application_DDM -->|unnamed| Get_application_DDM
    Get_client_s_previous_DDM_for_application_form_prefilling -->|unnamed| Get_all_application_DDM
```

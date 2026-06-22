# LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- **Diagram ID**: 150760
- **Elements**: 11
- **Connectors**: 4

```mermaid
graph TD
    Get_bank_branch_data["Get bank branch data"]
    Get_client_s_previous_DDM_for_application_form_prefilling["Get client's previous DDM for application form prefilling"]
    Frequency["Frequency"]
    Regular_payment_amount["Regular payment amount"]
    Regular_payment["Regular payment"]
    Limit["Limit"]
    Get_application_DDM["Get application DDM"]
    Prefill_application_form["Prefill application form"]
    Application_form_construction["Application form construction"]
    LOR_9257_Get_direct_debit_mandate_data_for_application_form_["LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API"]
    LOR_9158_Separate_LOR_from_PAYM_module_Direct_debit_mandates["LOR-9158 - Separate LOR from PAYM module - Direct debit mandates"]
    Application_form_construction -->|unnamed| Prefill_application_form
    Prefill_application_form -->|{ADD LOR-9257/}| Get_client_s_previous_DDM_for_application_form_prefilling
    Application_form_construction -->|{ADD LOR-9257/}| Get_application_DDM
    Get_client_s_previous_DDM_for_application_form_prefilling -->|{ADD LOR-9257/}| Get_bank_branch_data
```

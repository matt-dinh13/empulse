# LOR-9160 - Save direct debit mandate data from application form via DDM REST API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- **Diagram ID**: 150037
- **Elements**: 21
- **Connectors**: 15

```mermaid
graph TD
    External_Reference["External Reference"]
    PaymentChannel["PaymentChannel"]
    Application["Application"]
    MOD_PaymentChannel["{MOD}PaymentChannel"]
    Application["Application"]
    Frequency["Frequency"]
    Regular_payment_amount["Regular payment amount"]
    Regular_payment["Regular payment"]
    Limit["Limit"]
    n_01_095_Create_and_evaluate_application["01.095 Create and evaluate application"]
    MOD_01_098_Update_and_evaluate_application_v9["{MOD}01.098 Update and evaluate application v9"]
    MOD_01_310_Update_application_v9["{MOD}01.310 Update application v9"]
    MOD_01_314_Create_application_externally["{MOD}01.314 Create application externally"]
    Update_application_DDM["Update application DDM"]
    Create_application_DDM["Create application DDM"]
    Save_application_DDM_data["Save application DDM data"]
    Application_Processing["Application Processing"]
    n_01_080_Fill_in_application["01.080 Fill in application"]
    el_1738516["Note"]
    LOR_9158_Separate_LOR_from_PAYM_module_Direct_debit_mandates["LOR-9158 - Separate LOR from PAYM module - Direct debit mandates"]
    LOR_9160_Save_direct_debit_mandate_data_from_application_for["LOR-9160 - Save direct debit mandate data from application form via DDM REST API"]
    n_01_080_Fill_in_application -->|{ADD LOR-9160/}| Save_application_DDM_data
    n_01_080_Fill_in_application -->|unnamed| Application_Processing
    n_01_095_Create_and_evaluate_application -->|{ADD LOR-9160/}| Save_application_DDM_data
    n_01_095_Create_and_evaluate_application -->|unnamed| Application_Processing
    MOD_01_310_Update_application_v9 -->|unnamed| Application_Processing
    MOD_01_310_Update_application_v9 -->|{ADD LOR-9160/}| Save_application_DDM_data
    MOD_01_098_Update_and_evaluate_application_v9 -->|{ADD LOR-9160/}| Save_application_DDM_data
    MOD_01_098_Update_and_evaluate_application_v9 -->|unnamed| Application_Processing
    MOD_01_314_Create_application_externally -->|{ADD LOR-9160/}| Save_application_DDM_data
    Application -->|unnamed| PaymentChannel
    Application -->|unnamed| PaymentChannel
    Application -->|unnamed| MOD_PaymentChannel
    Application -->|unnamed| MOD_PaymentChannel
    Save_application_DDM_data -->|unnamed| Update_application_DDM
    Save_application_DDM_data -->|unnamed| Create_application_DDM
```

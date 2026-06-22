# CBL-5286 (CLM-1852) Late termination process support

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5286 (CLM-1852) Late termination process support
- **Diagram ID**: 118929
- **Elements**: 10
- **Connectors**: 9

```mermaid
graph TD
    Incoming_Payments_Module_PaymentManagementWS_for_local_syste["Incoming Payments Module - PaymentManagementWS (for local systems)"]
    PaymentManagementWS_BSL["PaymentManagementWS - BSL"]
    DEV_Add_payment_channel_to_PaymentManagementWS_createPayment["DEV Add payment channel to PaymentManagementWS.createPayment"]
    Contract_Services_POST_Contract_Services_POST_create_contrac["Contract Services - POST:Contract Services - POST create contract service"]
    Service_Processing_Setting["Service Processing Setting"]
    InstallmentServiceWS["InstallmentServiceWS"]
    DEV_CLM_CBL_5286_Late_termination_process_support["DEV CLM CBL-5286 Late termination process support"]
    Fee_services_used_by_external_system_Collection["Fee services used by external system (Collection)"]
    DEV_ISPAY_CBL_5286_Late_termination_process_support["DEV ISPAY CBL-5286 Late termination process support"]
    CBL_5286_CLM_1852_Late_termination_process_support["CBL-5286 (CLM-1852) Late termination process support"]
    PaymentManagementWS_BSL -->|unnamed| DEV_Add_payment_channel_to_PaymentManagementWS_createPayment
    Incoming_Payments_Module_PaymentManagementWS_for_local_syste -->|unnamed| DEV_Add_payment_channel_to_PaymentManagementWS_createPayment
    DEV_CLM_CBL_5286_Late_termination_process_support -->|unnamed| CBL_5286_CLM_1852_Late_termination_process_support
    DEV_ISPAY_CBL_5286_Late_termination_process_support -->|unnamed| CBL_5286_CLM_1852_Late_termination_process_support
    DEV_Add_payment_channel_to_PaymentManagementWS_createPayment -->|unnamed| CBL_5286_CLM_1852_Late_termination_process_support
    InstallmentServiceWS -->|unnamed| DEV_ISPAY_CBL_5286_Late_termination_process_support
    Fee_services_used_by_external_system_Collection -->|unnamed| DEV_ISPAY_CBL_5286_Late_termination_process_support
    Contract_Services_POST_Contract_Services_POST_create_contrac -->|unnamed| DEV_CLM_CBL_5286_Late_termination_process_support
    Service_Processing_Setting -->|unnamed| DEV_CLM_CBL_5286_Late_termination_process_support
```

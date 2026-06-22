# PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java
- **Diagram ID**: 119183
- **Elements**: 11
- **Connectors**: 10

```mermaid
graph TD
    Feature_switches["Feature switches"]
    InstallmentServiceWS_GetContractServicesToEvaluate["InstallmentServiceWS - GetContractServicesToEvaluate"]
    DEV_REQ_3_ODS_Cleanup["DEV REQ#3 ODS Cleanup"]
    DEV_REQ_2_Use_new_evaluation_mechanism_for_manual_contract_f["DEV REQ#2 Use new evaluation mechanism for manual contract finishing"]
    Contract_finishing_manually["Contract finishing manually"]
    Evaluation_of_services_on_system_events_Java["Evaluation of services on system events (Java)"]
    Service_Processing_Setting["Service Processing Setting"]
    Service_evaluation_and_processing["Service evaluation and processing"]
    el_1434271["Note"]
    DEV_Rewrite_DB_evaluation_of_services_from_ODS_to_Java["DEV Rewrite DB evaluation of services from ODS to Java"]
    PAYM_2254_CBL_5507_Rewrite_DB_evaluation_of_services_to_Java["PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java"]
    Service_evaluation_and_processing -->|unnamed| DEV_REQ_3_ODS_Cleanup
    Service_Processing_Setting -->|unnamed| DEV_REQ_2_Use_new_evaluation_mechanism_for_manual_contract_f
    Evaluation_of_services_on_system_events_Java -->|unnamed| DEV_REQ_2_Use_new_evaluation_mechanism_for_manual_contract_f
    Contract_finishing_manually -->|unnamed| DEV_REQ_2_Use_new_evaluation_mechanism_for_manual_contract_f
    Evaluation_of_services_on_system_events_Java -->|unnamed| DEV_Rewrite_DB_evaluation_of_services_from_ODS_to_Java
    InstallmentServiceWS_GetContractServicesToEvaluate -->|unnamed| DEV_Rewrite_DB_evaluation_of_services_from_ODS_to_Java
    Feature_switches -->|unnamed| DEV_Rewrite_DB_evaluation_of_services_from_ODS_to_Java
    DEV_Rewrite_DB_evaluation_of_services_from_ODS_to_Java -->|unnamed| PAYM_2254_CBL_5507_Rewrite_DB_evaluation_of_services_to_Java
    DEV_REQ_2_Use_new_evaluation_mechanism_for_manual_contract_f -->|unnamed| PAYM_2254_CBL_5507_Rewrite_DB_evaluation_of_services_to_Java
    DEV_REQ_3_ODS_Cleanup -->|unnamed| PAYM_2254_CBL_5507_Rewrite_DB_evaluation_of_services_to_Java
```

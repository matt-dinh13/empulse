# CSI-2974 Terminate Service on Contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Requirement Model/CBL-22680 Service Management Modules for REL/CSI-2974 Terminate Service on Contract
- **Diagram ID**: 155403
- **Elements**: 13
- **Connectors**: 7

```mermaid
graph LR
    MOD_08_091_Terminate_Contract_Service_common(("{MOD}08.091 Terminate Contract Service common"))
    n_08_090_Terminate_Contract_Service_manually(("08.090 Terminate Contract Service manually"))
    n_08_490_Terminate_Contract_Service_externally(("08.490 Terminate Contract Service externally"))
    ADD_Add_Event_into_Contract_Business_Events_BSL["{ADD}Add Event into Contract Business Events (BSL)"]
    ADD_11_060_Terminate_Deal_VAS(("{ADD}11.060 Terminate Deal (VAS)"))
    n_11_130_Terminate_finished_insurance_contracts(("11.130 Terminate finished insurance contracts"))
    n_11_121_Terminate_insurance_contract_manually(("11.121 Terminate insurance contract manually"))
    MOD_11_120_Terminate_insurance_contract(("{MOD}11.120 Terminate insurance contract"))
    MOD_08_121_Terminate_contract_insurance_common(("{MOD}08.121 Terminate contract insurance common"))
    n_08_454_Terminate_contract_insurance_service(("08.454 Terminate contract insurance service"))
    VAS_Deal[/"VAS Deal"/]
    External_System[/"External System"/]
    n_08_040_Terminate_Loan_Service_COS(("08.040 Terminate Loan Service (COS)"))
    External_System --- n_08_040_Terminate_Loan_Service_COS
    VAS_Deal --- n_08_040_Terminate_Loan_Service_COS
    n_08_040_Terminate_Loan_Service_COS -->|unnamed| ADD_Add_Event_into_Contract_Business_Events_BSL
    n_11_121_Terminate_insurance_contract_manually -.->|include| MOD_08_121_Terminate_contract_insurance_common
    n_11_130_Terminate_finished_insurance_contracts -.->|include| MOD_11_120_Terminate_insurance_contract
    n_08_454_Terminate_contract_insurance_service -.->|include| MOD_08_121_Terminate_contract_insurance_common
    MOD_08_121_Terminate_contract_insurance_common -.->|include| MOD_11_120_Terminate_insurance_contract
```

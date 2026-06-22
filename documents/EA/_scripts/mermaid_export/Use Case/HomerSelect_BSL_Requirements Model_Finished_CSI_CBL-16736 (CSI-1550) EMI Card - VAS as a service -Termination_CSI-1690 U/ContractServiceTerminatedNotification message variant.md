# ContractServiceTerminatedNotification message variant

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1690 Use ContractServiceNotification message variants for notifications
- **Diagram ID**: 145018
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph LR
    n_11_147_Activate_insurance_on_contract(("11.147 Activate insurance on contract"))
    unnamed["unnamed"]
    CaBus_AM[/"CaBus-AM"/]
    System_event[/"System event"/]
    User[/"User"/]
    n_01_739_Process_Account_Balance_Change_EOM_notification(("01.739 Process Account Balance Change EOM notification"))
    n_11_126_Check_client_eligibility_for_insurance(("11.126 Check client eligibility for insurance"))
    MOD_08_091_Terminate_Contract_Service_common(("{MOD}08.091 Terminate Contract Service common"))
    n_08_292_Process_Contract_Service_Change_event(("08.292 Process Contract Service Change event"))
    n_08_090_Terminate_Contract_Service_manually(("08.090 Terminate Contract Service manually"))
    unnamed -->|unnamed| n_11_126_Check_client_eligibility_for_insurance
    n_01_739_Process_Account_Balance_Change_EOM_notification -.->|include| n_11_126_Check_client_eligibility_for_insurance
    n_01_739_Process_Account_Balance_Change_EOM_notification --> CaBus_AM
    n_11_147_Activate_insurance_on_contract -->|unnamed| n_11_126_Check_client_eligibility_for_insurance
    User --- n_08_090_Terminate_Contract_Service_manually
```

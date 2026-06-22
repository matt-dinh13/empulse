# Adding switch for ContractServiceChangeSE

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1690 Use ContractServiceNotification message variants for notifications
- **Diagram ID**: 145021
- **Elements**: 8
- **Connectors**: 5

```mermaid
graph LR
    n_08_454_Terminate_contract_insurance_service(("08.454 Terminate contract insurance service"))
    n_11_121_Terminate_insurance_contract_manually(("11.121 Terminate insurance contract manually"))
    n_08_452_Cancel_contract_insurance_service(("08.452 Cancel contract insurance service"))
    MOD_11_111_Cancel_insurance_contract_manually(("{MOD}11.111 Cancel insurance contract manually"))
    CaBus_AM[/"CaBus-AM"/]
    n_11_773_Process_account_EOM_billing_finished_notification(("11.773 Process account EOM billing finished notification"))
    MOD_08_121_Terminate_contract_insurance_common(("{MOD}08.121 Terminate contract insurance common"))
    n_08_111_Cancel_contract_insurance_common(("08.111 Cancel contract insurance common"))
    CaBus_AM --> n_11_773_Process_account_EOM_billing_finished_notification
    n_08_452_Cancel_contract_insurance_service -.->|include| n_08_111_Cancel_contract_insurance_common
    n_11_121_Terminate_insurance_contract_manually -.->|include| MOD_08_121_Terminate_contract_insurance_common
    MOD_11_111_Cancel_insurance_contract_manually -.->|include| n_08_111_Cancel_contract_insurance_common
    n_08_454_Terminate_contract_insurance_service -.->|include| MOD_08_121_Terminate_contract_insurance_common
```

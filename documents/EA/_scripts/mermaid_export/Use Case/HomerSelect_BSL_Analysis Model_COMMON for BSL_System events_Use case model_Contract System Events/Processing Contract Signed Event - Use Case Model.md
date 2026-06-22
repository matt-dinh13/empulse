# Processing Contract Signed Event - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Use case model/Contract System Events
- **Diagram ID**: 164588
- **Elements**: 7
- **Connectors**: 1

```mermaid
graph LR
    Send_ContractFullInfoRequest["Send ContractFullInfoRequest"]
    System_event[/"System event"/]
    n_11_772_Activate_insurance_on_Contract_event_notification(("11.772 Activate insurance on Contract event notification"))
    DDM_DDM_Info["DDM : DDM Info"]
    CELAccountTransactionsRequest_CELAccountTransactionsRequest["CELAccountTransactionsRequest : CELAccountTransactionsRequest"]
    MOD_08_291_Switch_service_on_automatically(("{MOD}08.291 Switch service on automatically"))
    Process_ContractSignSE(("Process ContractSignSE"))
    System_event --- Process_ContractSignSE
```

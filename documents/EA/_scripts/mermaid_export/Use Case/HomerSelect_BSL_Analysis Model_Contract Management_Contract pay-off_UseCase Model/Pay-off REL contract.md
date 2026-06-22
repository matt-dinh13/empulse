# Pay-off REL contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/UseCase Model
- **Diagram ID**: 164397
- **Elements**: 21
- **Connectors**: 9

```mermaid
graph LR
    unnamed["unnamed"]
    Use_Case_Model_Processing_Account_Closure_notifications["Use Case Model : Processing Account Closure notifications"]
    n_08_295_Process_Account_Closure_notifications(("08.295 Process Account Closure notifications"))
    CaBus_AM[/"CaBus-AM"/]
    Send_ContractFullInfoRequest["Send ContractFullInfoRequest"]
    Recalculate_debt_catalogue["Recalculate debt catalogue"]
    ADD_Process_ContractPaidOffSE_IS(("{ADD}Process ContractPaidOffSE [IS]"))
    COMA[/"COMA"/]
    unnamed["unnamed"]
    Process_ContractPaidOff(("Process ContractPaidOff"))
    Process_ContractPaidOffSE_CLM(("Process ContractPaidOffSE [CLM] "))
    unnamed["unnamed"]
    ProxyConnector["ProxyConnector"]
    MOD_Process_account_closure(("{MOD}Process account closure"))
    ProcessAccountClosureResult_ProcessAccountClosureResult["ProcessAccountClosureResult : ProcessAccountClosureResult"]
    ProxyConnector["ProxyConnector"]
    ContractPaidOff_ContractPaidOff["ContractPaidOff : ContractPaidOff"]
    MOD_Contract_pay_off(("{MOD}Contract pay-off"))
    BSL[/"BSL"/]
    Account_management[/"Account management"/]
    COMA["COMA"]
    Account_management -->|unnamed| MOD_Process_account_closure
    MOD_Contract_pay_off -->|unnamed| BSL
    ContractPaidOff_ContractPaidOff -->|unnamed| ProxyConnector
    ProcessAccountClosureResult_ProcessAccountClosureResult -->|unnamed| ProxyConnector
    MOD_Process_account_closure -.->|include| MOD_Contract_pay_off
    Process_ContractPaidOff -->|unnamed| ADD_Process_ContractPaidOffSE_IS
    Process_ContractPaidOff -->|unnamed| Process_ContractPaidOffSE_CLM
    COMA --- Process_ContractPaidOff
    CaBus_AM --> n_08_295_Process_Account_Closure_notifications
```

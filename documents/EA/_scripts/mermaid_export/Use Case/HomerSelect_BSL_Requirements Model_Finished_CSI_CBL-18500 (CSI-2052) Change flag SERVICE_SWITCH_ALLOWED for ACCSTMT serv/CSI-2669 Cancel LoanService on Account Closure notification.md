# CSI-2669 Cancel LoanService on Account Closure notification

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/CSI-2669 Cancel LoanService on Account Closure notification
- **Diagram ID**: 152859
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph LR
    n_01_360_Cancel_contract(("01.360 Cancel contract"))
    MOD_08_096_Cancel_contract_service_common(("{MOD}08.096 Cancel contract service common"))
    n_08_111_Cancel_contract_insurance_common(("08.111 Cancel contract insurance common"))
    n_01_740_Process_notification_about_credit_account_closure(("01.740 Process notification about credit account closure "))
    CaBus_AM[/"CaBus-AM"/]
    n_08_295_Process_Account_Closure_notifications(("08.295 Process Account Closure notifications"))
    CaBus_AM --> n_01_740_Process_notification_about_credit_account_closure
    n_01_740_Process_notification_about_credit_account_closure -.->|include| n_01_360_Cancel_contract
    CaBus_AM --> n_08_295_Process_Account_Closure_notifications
```

# CSI-2978 Process Account Closure notification

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Requirement Model/CBL-22680 Service Management Modules for REL/CSI-2978 Process Account Closure notification
- **Diagram ID**: 155686
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph LR
    ADD_11_050_Deactivate_Deal_VAS(("{ADD}11.050 Deactivate Deal (VAS)"))
    n_08_050_Cancel_Loan_Service_method_COS(("08.050 Cancel Loan Service method (COS)"))
    n_08_040_Terminate_Loan_Service_COS(("08.040 Terminate Loan Service (COS)"))
    n_08_030_Deactivate_Loan_Service_method_COS(("08.030 Deactivate Loan Service method (COS)"))
    n_08_218_Process_Account_Closure_notifications(("08.218 Process Account Closure notifications"))
    Use_Case_Model_Processing_Account_Closure_notifications["Use Case Model : Processing Account Closure notifications"]
    n_08_295_Process_Account_Closure_notifications(("08.295 Process Account Closure notifications"))
    n_08_218_Process_Account_Closure_notifications -.->|include| n_08_040_Terminate_Loan_Service_COS
    n_08_218_Process_Account_Closure_notifications -.->|include| n_08_030_Deactivate_Loan_Service_method_COS
    n_08_218_Process_Account_Closure_notifications -.->|include| n_08_050_Cancel_Loan_Service_method_COS
```

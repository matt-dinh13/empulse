# Creating incoming payment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/UseCase Model
- **Diagram ID**: 164592
- **Elements**: 9
- **Connectors**: 2

```mermaid
graph LR
    Check_if_Contract_exists["Check if Contract exists"]
    User_Interface_Create_incoming_payment_UI["User Interface : Create incoming payment - UI"]
    diagram_5D7DD946_3C11_4c99_A90A_FD3545E55ECB["$diagram://{5D7DD946-3C11-4c99-A90A-FD3545E55ECB}"]
    MOD_CBL_4472_Contract_pairing_allowed["{MOD CBL-4472}Contract pairing allowed"]
    IncomingPaymentModuleWS_IncomingPaymentModuleWS["IncomingPaymentModuleWS : IncomingPaymentModuleWS"]
    n_05_080_Create_incoming_payment_manually(("05.080 Create incoming payment manually"))
    Incoming_payment_types_allowed_to_user_entering["Incoming payment types allowed to user entering"]
    User[/"User"/]
    n_05_050_Show_incoming_payment_detail(("05.050 Show incoming payment detail"))
    User --> n_05_080_Create_incoming_payment_manually
    User --> n_05_050_Show_incoming_payment_detail
```

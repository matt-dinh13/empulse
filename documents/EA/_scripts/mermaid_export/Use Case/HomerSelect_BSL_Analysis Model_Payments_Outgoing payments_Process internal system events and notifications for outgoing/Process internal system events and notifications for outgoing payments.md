# Process internal system events and notifications for outgoing payments

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process internal system events and notifications for outgoing payments/UseCase model
- **Diagram ID**: 144263
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph LR
    ADD_05_237_Process_outgoing_payment_for_ContractRegistration(("{ADD}05.237 Process outgoing payment for ContractRegistrationOutPaySE"))
    n_05_238_Process_outgoing_payments_for_ApplicationDocumentat(("05.238 Process outgoing payments for ApplicationDocumentationPreparedNotification"))
    Loan_Origination[/"Loan Origination"/]
    System_event[/"System event"/]
    MOD_05_090_Generate_outgoing_payment_for_contract(("{MOD}05.090 Generate outgoing payment for contract"))
    n_05_236_Process_outgoing_payments_for_ContractPackageReceiv(("05.236 Process outgoing payments for ContractPackageReceivedSE"))
    n_05_236_Process_outgoing_payments_for_ContractPackageReceiv -.->|include| MOD_05_090_Generate_outgoing_payment_for_contract
    ADD_05_237_Process_outgoing_payment_for_ContractRegistration -.->|include| MOD_05_090_Generate_outgoing_payment_for_contract
    ADD_05_237_Process_outgoing_payment_for_ContractRegistration --- System_event
    Loan_Origination --> n_05_238_Process_outgoing_payments_for_ApplicationDocumentat
    System_event --> n_05_236_Process_outgoing_payments_for_ContractPackageReceiv
```

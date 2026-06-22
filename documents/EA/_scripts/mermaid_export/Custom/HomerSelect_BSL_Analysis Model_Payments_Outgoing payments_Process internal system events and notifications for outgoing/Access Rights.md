# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process internal system events and notifications for outgoing payments/Access Rights
- **Diagram ID**: 119575
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    n_05_238_Process_outgoing_payments_for_ApplicationDocumentat["05.238 Process outgoing payments for ApplicationDocumentationPreparedNotification"]
    ADD_05_238_Process_outgoing_payments_for_ApplicationDocument["{ADD}05.238 Process outgoing payments for ApplicationDocumentationPreparedNotification"]
    DEL_05_237_Process_outgoing_payments_for_ContractRegistratio["{DEL}05.237 Process outgoing payments for ContractRegistrationSE"]
    n_05_236_Process_outgoing_payments_for_ContractPackageReceiv["05.236 Process outgoing payments for ContractPackageReceivedSE"]
    DEL_05_237_Process_outgoing_payments_for_ContractRegistratio["{DEL}05.237 Process outgoing payments for ContractRegistrationSE"]
    n_05_236_Process_outgoing_payments_for_ContractPackageReceiv["05.236 Process outgoing payments for ContractPackageReceivedSE"]
    n_05_236_Process_outgoing_payments_for_ContractPackageReceiv -->|unnamed| n_05_236_Process_outgoing_payments_for_ContractPackageReceiv
    DEL_05_237_Process_outgoing_payments_for_ContractRegistratio -->|unnamed| DEL_05_237_Process_outgoing_payments_for_ContractRegistratio
    n_05_238_Process_outgoing_payments_for_ApplicationDocumentat -->|unnamed| ADD_05_238_Process_outgoing_payments_for_ApplicationDocument
```

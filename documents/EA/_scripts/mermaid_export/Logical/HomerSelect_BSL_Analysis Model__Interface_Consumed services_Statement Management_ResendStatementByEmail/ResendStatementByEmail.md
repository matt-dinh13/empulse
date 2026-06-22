# ResendStatementByEmail

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Statement Management/ResendStatementByEmail
- **Diagram ID**: 99185
- **Elements**: 5
- **Connectors**: 1

```mermaid
classDiagram
    class ResendStatementByEmailFailure["ResendStatementByEmailFailure"]
    class n_12_603_Print_or_send_statement["12.603 Print or send statement"]
    class StatementManagementWebService["StatementManagementWebService"]
    class ResendStatementByEmailResponse["ResendStatementByEmailResponse"]
    class ResendStatementByEmailRequest["ResendStatementByEmailRequest"]
    StatementManagementWebService --> n_12_603_Print_or_send_statement : unnamed
```

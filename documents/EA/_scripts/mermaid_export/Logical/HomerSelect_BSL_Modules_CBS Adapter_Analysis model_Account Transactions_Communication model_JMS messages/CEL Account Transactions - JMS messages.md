# CEL Account Transactions - JMS messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/JMS messages
- **Diagram ID**: 102223
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class Legend["Legend"]
    class CELPrincipalAccountTransaction["CELPrincipalAccountTransaction"]
    class CELInsuranceAccountTransaction["CELInsuranceAccountTransaction"]
    class CELFeeAccountTransaction["CELFeeAccountTransaction"]
    class CELAccountTransaction["CELAccountTransaction"]
    class DEL_CELAccountTransactionsRequest["{DEL}CELAccountTransactionsRequest"]
    CELAccountTransaction <|-- CELFeeAccountTransaction : unnamed
    CELAccountTransaction <|-- CELInsuranceAccountTransaction : unnamed
    CELAccountTransaction <|-- CELPrincipalAccountTransaction : unnamed
    DEL_CELAccountTransactionsRequest ..> CELPrincipalAccountTransaction : unnamed
    DEL_CELAccountTransactionsRequest ..> CELFeeAccountTransaction : unnamed
    DEL_CELAccountTransactionsRequest ..> CELInsuranceAccountTransaction : unnamed
```

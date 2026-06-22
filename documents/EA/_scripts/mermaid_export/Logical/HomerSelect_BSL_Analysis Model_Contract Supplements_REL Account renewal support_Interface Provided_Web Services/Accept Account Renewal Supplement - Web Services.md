# Accept Account Renewal Supplement - Web Services

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/REL Account renewal support/Interface Provided/Web Services
- **Diagram ID**: 164407
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class n_13_204_Accept_Account_Renewal_Supplement["13.204 Accept Account Renewal Supplement"]
    class AcceptAccountRenewalRequest["AcceptAccountRenewalRequest"]
    class AccountRenewalSupplements["AccountRenewalSupplements"]
    AccountRenewalSupplements ..> AcceptAccountRenewalRequest : unnamed
    AccountRenewalSupplements ..> n_13_204_Accept_Account_Renewal_Supplement : unnamed
```

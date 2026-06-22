# Cancel Account Renewal Supplement - Web Services

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/REL Account renewal support/Interface Provided/Web Services
- **Diagram ID**: 164408
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class n_13_230_Cancel_Account_Renewal_Supplement["13.230 Cancel Account Renewal Supplement"]
    class ContractSupplement["ContractSupplement"]
    class CancelAccountRenewalSupplement["CancelAccountRenewalSupplement"]
    class AccountRenewalSupplements["AccountRenewalSupplements"]
    AccountRenewalSupplements --> ContractSupplement : unnamed
    AccountRenewalSupplements ..> n_13_230_Cancel_Account_Renewal_Supplement : unnamed
    AccountRenewalSupplements --> CancelAccountRenewalSupplement : unnamed
    AccountRenewalSupplements --> ContractSupplement : unnamed
```

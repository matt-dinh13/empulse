# Contract Loan Account Overview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v1.0/Contract Loan Account Overview
- **Diagram ID**: 159603
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class MOD_contracts["(MOD)contracts"]
    class customer["customer"]
    class loanaccountoverview["loanaccountoverview"]
    class contract["contract"]
    class MOD_customers["(MOD)customers"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class LoanAccountOverview["LoanAccountOverview"]
    class n_01_764_Get_loan_account_overview_for_self_care["01.764 Get loan account overview for self-care"]
    customer ..> MOD_contracts : /contracts
    MOD_contracts ..> contract : /{contractNumber}
    MOD_customers ..> customer : /{cuid}
    contract ..> loanaccountoverview : /loanaccountoverviews
    loanaccountoverview ..> LoanAccountOverview : unnamed
    BSL_OpenAPI ..> MOD_customers : /customers
    loanaccountoverview ..> n_01_764_Get_loan_account_overview_for_self_care : unnamed
```

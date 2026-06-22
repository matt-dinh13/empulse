# Get DDM info

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Use Case Model
- **Diagram ID**: 162684
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph LR
    n_01_584_Get_DDM_by_contract(("01.584 - Get DDM by contract"))
    DirectDebitService_DirectDebitService["DirectDebitService : DirectDebitService"]
    Loan_Origination[/"Loan Origination"/]
    n_01_583_Get_DDM_by_CUID(("01.583 - Get DDM by CUID"))
    n_01_583_Get_DDM_by_CUID -->|unnamed| DirectDebitService_DirectDebitService
    n_01_584_Get_DDM_by_contract --> Loan_Origination
    n_01_584_Get_DDM_by_contract -->|unnamed| DirectDebitService_DirectDebitService
    Loan_Origination --> n_01_583_Get_DDM_by_CUID
```

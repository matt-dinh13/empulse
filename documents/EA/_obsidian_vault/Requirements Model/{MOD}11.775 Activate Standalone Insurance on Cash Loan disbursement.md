---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change"
domain: "Requirements Model"
element_id: 1879792
diagrams: 3
connections: 4
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}11.775 Activate Standalone Insurance on Cash Loan disbursement

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change

## 📝 Notes

{ADD CLM-6044 /}
The use case present functionality for the standalone insurance activation triggered by Cash Loan disbursement confirmation.

## 🔗 Connections (4)

- → UseCase «include»: [[{MOD}05.091 Generate outgoing payment - insurance]]
- → Dependency: [[Create first Insurance Period upon related Contract disbursement]]
- → Dependency: [[Get Service definition from Services (Requirement 1833416)]]
- → UseCase «include»: [[11.040 Activate insurance contract (UseCase 1879790)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: CLM-6044 Activate Insurance on related CL Contract disbursement

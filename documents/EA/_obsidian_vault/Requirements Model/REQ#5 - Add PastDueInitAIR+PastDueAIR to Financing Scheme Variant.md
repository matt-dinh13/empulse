---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1285992
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#5 - Add PastDueInitAIR+PastDueAIR to Financing Scheme Variant

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

See solution described in PCG-900.
Add new parameters to Financing Scheme Variant:
PastDueInitAIR - interest rate charged for debt in due for initial number of installments
PastDueAIR - interest rate charged for debt in due for other installments
Both values are optional, PastDueInitAIR can be set only if InitTerm is defined.
No initial setting is required.
Reflect the change in data structure, UI and methods of FinancingSchemeWS.

## 📊 Appears In (1 diagrams)

- Custom: PCG-701 Financing Schema II (CBL-1533)

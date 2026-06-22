---
type: Component
stereotype: "ArchiMate_ApplicationComponent"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Processing Cardless Transaction request"
domain: "Requirements Model"
element_id: 1748408
diagrams: 1
connections: 5
tags:
  - component
  - requirements-model
---

# 📦 ContractSupplement service

> **Type**: Component · **Stereotype**: «ArchiMate_ApplicationComponent»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Processing Cardless Transaction request

## 🔗 Connections (5)

- → ControlFlow «ArchiMate_Flow»: [[ContractSupplement Events]]
- ← Dependency «ArchiMate_UsedBy»: [[CreditLimitChange service]]
- ← Dependency «ArchiMate_UsedBy»: [[TransactionSupplements service]]
- → Dependency «ArchiMate_Access»: [[ContractSupplement data]]
- ← Dependency «ArchiMate_UsedBy»: [[LoanServiceRequests]]

## 📊 Appears In (1 diagrams)

- Logical: Processing Cardless Transaction request

---
type: Activity
stereotype: "ArchiMate_BusinessFunction"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Processing Cardless Transaction request"
domain: "Requirements Model"
element_id: 1748439
diagrams: 1
connections: 4
tags:
  - activity
  - requirements-model
---

# ⚡ Update transaction documents

> **Type**: Activity · **Stereotype**: «ArchiMate_BusinessFunction»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Processing Cardless Transaction request

## 🔗 Connections (4)

- → ControlFlow «ArchiMate_Triggering»: [[Create transaction authorization_confirmation]]
- → Dependency «ArchiMate_UsedBy»: [[Update Document File]]
- ← Association «ArchiMate_Association»: [[Accept cardless transaction]]
- → Dependency «ArchiMate_UsedBy»: [[Update ContractSupplement]]

## 📊 Appears In (1 diagrams)

- Logical: Processing Cardless Transaction request (BL)

---
type: Class
stereotype: "DFD_DataStore"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Processing Cardless Transaction request"
domain: "Requirements Model"
element_id: 1748393
diagrams: 1
connections: 11
tags:
  - class
  - requirements-model
---

# 🔷 Contract Supplement

> **Type**: Class · **Stereotype**: «DFD_DataStore»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Processing Cardless Transaction request

## 🔗 Connections (10)

- ← Dependency «DFD_DataFlow»: [[Accept documents]]
- ← Dependency «DFD_DataFlow»: [[Authorize ALOP Trx]]
- ← Dependency «DFD_DataFlow»: [[Process transaction paid_cancel notification]]
- ← Dependency «DFD_DataFlow»: [[Prepare ALOP request documents]]
- ← Dependency «DFD_DataFlow»: [[Create cardless POS transaction]]
- → Dependency «DFD_DataFlow»: [[Get contract supplement]]
- ← Dependency «DFD_DataFlow»: [[Prepare request documents]]
- ← Dependency «DFD_DataFlow»: [[Accept ALOP Trx documents]]
- ← Dependency «DFD_DataFlow»: [[Authorize_Confirm transaction]]
- ← Dependency «DFD_DataFlow»: [[Create ALOP request]]

## 📊 Appears In (1 diagrams)

- Analysis: Processing Cardless Transaction request

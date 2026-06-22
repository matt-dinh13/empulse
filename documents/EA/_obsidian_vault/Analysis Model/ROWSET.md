---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Add charging requests"
domain: "Analysis Model"
element_id: 912360
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ROWSET

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Add charging requests

## 📝 Notes

It is file structure for batch charging of fees, or penalties into the installment schedule.
The structure contains array of ROW (1 ... *)

## 🔗 Connections (3)

- ← Dependency: [[AutomaticChargingRequestsImportWS]]
- ← Association «use»: [[AutomaticChargingRequestsImportWS]]
- ← Association: [[ROW]]

## 📊 Appears In (2 diagrams)

- Logical: AddChargingRequestsWS
- Logical: ChargingRequests file structure

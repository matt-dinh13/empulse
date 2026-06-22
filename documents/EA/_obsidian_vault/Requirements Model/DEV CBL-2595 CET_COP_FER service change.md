---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1053 (CBL-2595) CET_services_changes (DPD)"
domain: "Requirements Model"
element_id: 1374243
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 DEV CBL-2595 CET/COP/FER service change

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1053 (CBL-2595) CET_services_changes (DPD)

## 📝 Notes

For KZ, we need to change CET behaviour so that the extraordinary installment created to cover the remaining principal etc. has more suitable due date than a request due date as it was causing bad client credibility by causing DPD on these CET extraordinary installments. Newly a date of request processing will be used as a due date of the installments.

To provide backward compatibility, the feature will be a new setting of CET service added by PCG.

We will also provide this functionality for FER and COP - it can be turned off and will not affect anything.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1053 (CBL-2595) CET_services_changes (DPD) (Requirement 1374244)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1053 (CBL-2595) CET_services_changes (DPD)

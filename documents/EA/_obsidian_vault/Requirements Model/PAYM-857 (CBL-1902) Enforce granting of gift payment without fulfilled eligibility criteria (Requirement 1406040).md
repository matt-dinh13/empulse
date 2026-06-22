---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-857 (CBL-1902) Enforce granting of gift payment without fulfilled eligibility criteria"
domain: "Requirements Model"
element_id: 1406040
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-857 (CBL-1902) Enforce granting of gift payment without fulfilled eligibility criteria

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-857 (CBL-1902) Enforce granting of gift payment without fulfilled eligibility criteria

## 📝 Notes

* New option 'Skip payment discipline checking' (or something similar) will be added to Gift payment service evaluation on Contract detail screen - Service Tab. This option will be available only for gift payment services and accessible via a new access right.
* If this option is checked, payment discipline (DPD) criteria on evaluated contract and potential secondary contracts will be skipped during gift payment evaluation; it will just be checked that all installments prior to gift payment installments are repaid. If so, gift payment will be granted.

## 🔗 Connections (1)

- ← Generalization: [[DEV CBL-1902 Enforce granting of gift payment]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-857 (CBL-1902) Enforce granting of gift payment without fulfilled eligibility criteria

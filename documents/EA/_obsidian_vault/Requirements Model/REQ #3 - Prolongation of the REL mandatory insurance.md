---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12831 (CSI-617) Mandatory Life Insurance for REL"
domain: "Requirements Model"
element_id: 1603417
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #3 - Prolongation of the REL mandatory insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12831 (CSI-617) Mandatory Life Insurance for REL

## 📝 Notes

If the REL mandatory insurance is set as "free of charge" and the Insurance Service has First Insurance Period Duration = BILLING_PERIOD, and Next period duration = BILLING_PERIOD, the Insurance Service must be set for automatic prolongation (i.e. Insurance Service. Automatic insurance prolongation = TRUE)
Reason for that is the AM module knows nothing about "free of charge" insurance and doesn't notify us about End of month billing. This notification is needed for prolongation of the insurance period of the REL insurance.
See also Recommended setting of Insurance Service in Appendix section

## 🔗 Connections (1)

- → Generalization: [[General requirement description]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12831 (CSI-617) Mandatory Life Insurance for REL

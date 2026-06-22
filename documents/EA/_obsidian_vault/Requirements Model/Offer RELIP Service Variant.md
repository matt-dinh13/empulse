---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1878184
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Offer RELIP Service Variant

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

Offer parameters ("sub-offer") for Installment Plan for initial transaction.
Calculation of attributes is described in the rule Evaluate offer for RELIP Variant.
Update of attributes is described in the Update Offer RELIP Service Variant rule

## 🔗 Connections (3)

- → Association: [[RELIP Service Variant Term]]
- → Aggregation: [[Offer RELIP Service]]
- ← Aggregation: [[Offer RELIP Service Variant Installment]]

## 📊 Appears In (2 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Offer Service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Offer RELIP Code | string |  |
| Chosen | boolean | False |
| Archived | boolean | false |
| Transaction Amount | Financial Amount |  |
| First Due Date | Date |  |
| First End of Interest Period Date | Date |  |
| Annuity | Financial Amount |  |
| Presented Interest Rate | percentage |  |
| Total Monthly Payment | Financial Amount |  |
| Total Payment Per Credit | Financial Amount |  |
| Total Principal | Financial Amount |  |
| Total Interest | Financial Amount |  |
| Total Fee | Financial Amount |  |
| Transaction RELIP Code | string |  |

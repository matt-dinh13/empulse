---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model/Service Type/INSURANCE"
domain: "Modules"
element_id: 1848432
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 INSURANCE

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model/Service Type/INSURANCE

## 📝 Notes

Insurance
Insurance as a service.

## 🔗 Connections (6)

- → Aggregation: [[Service Parameter Type (Class 1846082)]]
- → Dependency: [[{MOD}Insurance type]]
- → Dependency: [[Insurance First Period Trigger]]
- → Dependency: [[Insurance Next Period Duration]]
- → Dependency: [[Insurance First Period Duration]]
- → Dependency: [[Insurance Early Termination Term Type]]

## 📊 Appears In (2 diagrams)

- Logical: INSURANCE
- Logical: Service Type

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Automatic Prolongation | boolean |  |
| Cnacellation Offset | int |  |
| Cut Off Days Count | int |  |
| Early Termination Term | Insurance Early Termination Term Type |  |
| First Period Duration | Insurance First Period Duration |  |
| First Period Duration Offset | int |  |
| First Period Trigger | Insurance First Period Trigger |  |
| First Period Trigger Offset | int |  |
| Insurance Program Code | string |  |
| Insurance type | {MOD}Insurance type |  |
| Limit Cancellation To Cooling Off Period | boolean |  |
| Next Period Duration | Insurance Next Period Duration |  |
| Next Period Duration Offset | int |  |
| Number of billing periods | int |  |
| Terminate on full loan repayment | boolean |  |
| Terminate on unpaid premium | boolean |  |
| Termination Offset | int |  |

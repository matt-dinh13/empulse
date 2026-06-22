---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755742
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetCustomerDataRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

{ADD CLM-2727 /}
Request to get a customer

## 🔗 Connections (2)

- → Usage: [[Projection (Enumeration 1755747)]]
- ← Usage: [[Customer Data]]

## 📊 Appears In (1 diagrams)

- Logical: Customer Data - Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | int |  |
| officialOnly | boolean |  |
| activeOnly | boolean |  |
| projections | Projection |  |
| hci_tech_ipAddress | string |  |
| hci_biz_user | string |  |
| hci_biz_businessId | string |  |
| hci_tech_callingSystem | string |  |
| verificationLevel | int |  |

---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755748
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateCustomerDataRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

{ADD CLM-2727 /}
Request to update a customer

## 🔗 Connections (3)

- → Usage: [[UpdateMode]]
- → Usage: [[CustomerPerson]]
- ← Usage: [[Customer Data]]

## 📊 Appears In (1 diagrams)

- Logical: Customer Data - Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| hci_tech_ipAddress | string |  |
| hci_biz_user | string |  |
| requestBody | CustomerPerson |  |
| externalId | int |  |
| hci_biz_businessId | string |  |
| mode | UpdateMode |  |
| hci_tech_callingSystem | string |  |

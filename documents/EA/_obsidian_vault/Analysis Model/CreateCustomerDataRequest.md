---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755751
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateCustomerDataRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

{ADD CLM-2727 /}
Request to create a customer

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
| hci_biz_businessId | string |  |
| hci_tech_callingSystem | string |  |
| updateIfExists | UpdateMode |  |

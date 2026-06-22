---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755728
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 IdentificationCustomerDataRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

{ADD CLM-2727 /}
Request to identify a customer

## 🔗 Connections (2)

- → Usage: [[CustomerPerson]]
- ← Usage: [[Customer Data]]

## 📊 Appears In (1 diagrams)

- Logical: Customer Data - Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| hci_tech_ipAddress | string |  |
| requestBody | CustomerPerson |  |
| hci_biz_user | string |  |
| hci_biz_businessId | string |  |
| hci_tech_callingSystem | string |  |
| skipManualIdentification | boolean |  |

---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Contract information"
domain: "Analysis Model"
element_id: 1612875
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Contract status transition requests

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Contract information

## 📝 Notes

Information about requests made for contract status change (e.g. request to finish or cancel contract).

LDM: 
Contract->Contract_Status_Transition_Request

Localization code: CON_StatusRequests

## 📊 Appears In (1 diagrams)

- Custom: Tab-Contract information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Request type | Text |  |
| Status | Text |  |
| Request date | dateTime |  |
| Requested by | Text |  |
| Canceled by | Text |  |
| Cancellation date | dateTime |  |

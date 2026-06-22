---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications"
domain: "Analysis Model"
element_id: 1856587
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RequestParametersChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications

## 📝 Notes

Parameters of service request by request type. One type is contained in the choice only.

## 🔗 Connections (2)

- → Dependency «use»: [[switchServiceOperationStatusParametersDto (Class 1856590)]]
- ← Association: [[LoanServiceRequestRequest (Class 1856588)]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance change notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| switchServiceOperationStatusParameters | switchServiceOperationStatusParametersDto |  |

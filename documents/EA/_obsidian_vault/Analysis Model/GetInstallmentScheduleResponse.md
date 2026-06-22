---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS"
domain: "Analysis Model"
element_id: 1592132
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 GetInstallmentScheduleResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS

## 📝 Notes

Defines structure of response for getInstallmentSchedule method of InstallmentSchedule web-service.

## 🔗 Connections (4)

- ← Dependency «use»: [[InstallmentScheduleWS (Interface 1592139)]]
- ← Aggregation: [[PaymentDto (Class 1592136)]]
- ← Aggregation: [[InstallmentDto (Class 1592130)]]
- ← Association: [[RefundItemDto]]

## 📊 Appears In (1 diagrams)

- Logical: InstallmentScheduleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| result | int |  |

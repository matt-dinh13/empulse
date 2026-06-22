---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS"
domain: "Analysis Model"
element_id: 1592127
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 GetNextInstallmentFilter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS

## 📝 Notes

Defines structure of input parameters for getNextInstallment method of InstallmentSchedule web-service.

## 🔗 Connections (1)

- ← Dependency «use»: [[InstallmentScheduleWS (Interface 1592139)]]

## 📊 Appears In (1 diagrams)

- Logical: InstallmentScheduleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| searchStartDate | date |  |
| nextUnpaidInstallment | boolean |  |

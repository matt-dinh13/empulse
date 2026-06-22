---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3088 VAS - Deal (Insurance) Prolongation notification"
domain: "Requirements Model"
element_id: 1796848
diagrams: 1
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {ADD}InsuranceProlongationNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3088 VAS - Deal (Insurance) Prolongation notification

## 📝 Notes

{ADD CSI-3088 /}
Data structure related to Insurance prolongation notification

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[{ADD}InsuranceContract]]
- ← Generalization «XSDextension»: [[{ADD}InsuranceProlongationRenewed]]
- ← Generalization «XSDextension»: [[{ADD}InsuranceProlongationFailed]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance Prolongation notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventDateTime | dateTime |  |
| nextPeriodStartDate | date |  |
| nextPeriodEndDate | date |  |
| premiumAmount | Money |  |

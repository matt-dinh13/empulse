---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Generated messages/DealProlongationNotification"
domain: "Modules"
element_id: 1804044
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}InsuranceProlongationNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Generated messages/DealProlongationNotification

## 📝 Notes

{ADD CSI-3088 /}
Data structure related to Insurance prolongation notification

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[{ADD}InsuranceProlongationRenewed (Class 1804046)]]
- ← Generalization «XSDextension»: [[{ADD}InsuranceProlongationFailed (Class 1804047)]]
- → Generalization «XSDextension»: [[{ADD}InsuranceContract (Class 1804045)]]

## 📊 Appears In (1 diagrams)

- Logical: DealProlongationNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventDateTime | dateTime |  |
| nextPeriodStartDate | date |  |
| nextPeriodEndDate | date |  |
| premiumAmount | Money |  |

---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance Contract notifications"
domain: "Analysis Model"
element_id: 1856582
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}InsuranceProlongationNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance Contract notifications

## 📝 Notes

{ADD CLM-1854 /}
Data structure related to Insurance prolongation notification

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[{ADD}InsuranceProlongationRenewed (Class 1856584)]]
- ← Generalization «XSDextension»: [[{ADD}InsuranceProlongationFailed (Class 1856583)]]
- → Generalization «XSDextension»: [[{ADD}InsuranceContract (Class 1856581)]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance Contract prolongation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventDateTime | dateTime |  |
| nextPeriodStartDate | date |  |
| nextPeriodEndDate | date |  |
| premiumAmount | Money |  |

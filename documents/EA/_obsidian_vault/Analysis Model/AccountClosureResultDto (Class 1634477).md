---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Account management/ProcessAccountClosureResult"
domain: "Analysis Model"
element_id: 1634477
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AccountClosureResultDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Account management/ProcessAccountClosureResult

## 📝 Notes

Result of account closure

## 🔗 Connections (2)

- → Dependency: [[AccountClosureResultTypeDto (Enumeration 1634478)]]
- ← Dependency: [[ProcessAccountClosureResultRequest (Class 1634479)]]

## 📊 Appears In (1 diagrams)

- Logical: ProcessAccountClosureResult

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | long |  |
| resultType | AccountClosureResultTypeDto |  |
| overpayment | MoneyDto |  |

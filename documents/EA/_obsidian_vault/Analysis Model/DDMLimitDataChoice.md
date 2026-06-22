---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/calculateDDMLimit"
domain: "Analysis Model"
element_id: 1710622
diagrams: 5
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DDMLimitDataChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/calculateDDMLimit

## 📝 Notes

{ADD PAYM-1844 CBL-1541 /}

## 🔗 Connections (4)

- ← Dependency «use»: [[CalculateDDMLimitRequest]]
- ← Dependency «use»: [[DDMLimitDataDto]]
- → Dependency: [[DDMLimitDataRELDto]]
- → Dependency: [[DDMLimitDataCELDto]]

## 📊 Appears In (5 diagrams)

- Logical: DirectDebitService.calculateDDMLimit
- Logical: DirectDebitService.createDDM
- Logical: DirectDebitService.updateDDM
- Logical: DirectDebitServiceV5 - Create DDM
- Logical: DirectDebitServiceV5 - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ddmLimitDataCEL | DDMLimitDataCELDto |  |
| ddmLimitDataREL | DDMLimitDataRELDto |  |

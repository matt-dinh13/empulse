---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/changeDDMStatus"
domain: "Analysis Model"
element_id: 1363454
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ChangeDDMStatusRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/changeDDMStatus

## 📝 Notes

{ADD CBL-2505 PAYM-1072 /}

## 🔗 Connections (2)

- → Dependency: [[DDMChangedStatusDto]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitService.changeDDMStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}ddmDataExchangeID | DDMChangedStatusDto |  |
| {DEL}ddmCode | DDMChangedStatusDto |  |
| ddmStatus | DDMChangedStatus |  |
| confirmationRemark | string |  |

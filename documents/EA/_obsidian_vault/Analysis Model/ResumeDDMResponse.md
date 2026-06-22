---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/resumeDDM"
domain: "Analysis Model"
element_id: 1258791
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ResumeDDMResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/resumeDDM

## 📝 Notes

{ADD CBL-29 PAY /}

## 🔗 Connections (3)

- → Dependency: [[ContractDDMBaseDto]]
- → Dependency: [[ResumeDDMResultTypeDto]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitService.resumeDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| result | ResumeDDMResultTypeDto |  |
| contract | ContractDDMBaseDto |  |

---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1435466
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 getBankAccountByCUIDFault

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 🔗 Connections (3)

- → Dependency: [[ValidationResultDto (Class 1710617)]]
- → Dependency: [[DDMResultTypeDto]]
- ← Dependency: [[{ADD} BankAccountsWS]]

## 📊 Appears In (1 diagrams)

- Logical: BankAccountsWS.getBankAccountByCUID

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | DDMResultTypeDto |  |
| validationResult | ValidationResultDto |  |

---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/OnlineDebt"
domain: "Modules"
element_id: 1795942
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 CalculateDebtResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/OnlineDebt

## 🔗 Connections (2)

- → Dependency: [[FeeDebt (Class 1795944)]]
- ← Dependency: [[GetOnlineDebt]]

## 📊 Appears In (1 diagrams)

- Logical: OnlineDebt

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| debtOnAccuredInterest | MoneyDto |  |
| debtOnFees | FeeDebt |  |
| debtOnPrincipal | MoneyDto |  |
| prepaidAmount | MoneyDto |  |
| prePayment | MoneyDto |  |

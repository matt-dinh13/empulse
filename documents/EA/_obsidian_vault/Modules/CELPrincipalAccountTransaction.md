---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1471789
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 CELPrincipalAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

It represents one account transaction on a principal.

## 🔗 Connections (5)

- → Dependency «transformation»: [[TRANSAC150 (Boundary 1471790)]]
- → Dependency «transformation»: [[TRANSAC150]]
- → Dependency: [[Processing CELPrincipalAccountTransaction]]
- → Generalization «XSDextension»: [[CELAccountTransaction]]
- ← Dependency: [[{DEL}CELAccountTransactionsRequest]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Account Transactions - Communication model
- Logical: CEL Account Transactions - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| refinancedAmount | MoneyDto |  |
| refinancedExtAmount | MoneyDto |  |
| amount | MoneyDto |  |

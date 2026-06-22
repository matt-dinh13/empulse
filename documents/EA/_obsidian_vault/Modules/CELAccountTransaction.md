---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1471787
diagrams: 4
connections: 3
tags:
  - class
  - modules
---

# 🔷 CELAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

It represent common attributes for account transactions.

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[CELPrincipalAccountTransaction]]
- ← Generalization «XSDextension»: [[CELInsuranceAccountTransaction]]
- ← Generalization «XSDextension»: [[CELFeeAccountTransaction]]

## 📊 Appears In (4 diagrams)

- Logical: Additional insurance transaction - Communication model
- Logical: Additional insurance transaction - JMS messages
- Logical: CEL Account Transactions - Communication model
- Logical: CEL Account Transactions - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyDto |  |

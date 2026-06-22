---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1223771
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 TransactionReconciliationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

Transaction reconciliation message. (TRANSAC161)

## 🔗 Connections (4)

- → Dependency «transformation»: [[TRANSAC161]]
- → Dependency: [[Processing TransactionReconciliationDto]]
- → Dependency: [[ReconciliationTypeDto (Enumeration 1266621)]]
- ← Dependency: [[TransactionMessageDto (Class 1347890)]]

## 📊 Appears In (2 diagrams)

- Logical: REL Account Transactions - Communication model
- Logical: REL Account Transactions - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reconciliationCode | AccountItemCodeType |  |
| amount | PositiveMoneyDto |  |
| reconciliationType | ReconciliationTypeDto |  |

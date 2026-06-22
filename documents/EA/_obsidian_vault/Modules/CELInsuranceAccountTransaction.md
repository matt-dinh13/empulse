---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1471788
diagrams: 4
connections: 6
tags:
  - class
  - modules
---

# 🔷 CELInsuranceAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

It represents one account transaction on a insurance.

LDM source for CELAccountTransaction (it is XMLextension):

	
- amount = Insurance Period.NetPremium

## 🔗 Connections (6)

- → Dependency: [[Processing CELInsuranceAccountTransaction]]
- → Dependency «transformation»: [[TRANSAC150 (Boundary 1471790)]]
- → Dependency «transformation»: [[TRANSAC150]]
- → Generalization «XSDextension»: [[CELAccountTransaction]]
- ← Dependency: [[InsuranceTransactionRequest (Class 1749966)]]
- ← Dependency: [[{DEL}CELAccountTransactionsRequest]]

## 📊 Appears In (4 diagrams)

- Logical: Additional insurance transaction - Communication model
- Logical: Additional insurance transaction - JMS messages
- Logical: CEL Account Transactions - Communication model
- Logical: CEL Account Transactions - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insuranceCompanyCode | string |  |

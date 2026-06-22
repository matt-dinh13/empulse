---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest"
domain: "Analysis Model"
element_id: 1879810
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CELSubsidyAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest

## 📝 Notes

CEL subsidy account transactions

LDM source for CELAccountTransaction (it is XMLextension):

	
- amount = Financial Parameter Item[Item Type = SUBVENTION].Item Amount
	
- {ADD IS-2768}{country PH}
or for item type DISCOUNT:
amount = Financial Parameter Item[Item Type = DISCOUNT].Item Amount 
{/ADD}

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[CELAccountTransaction (Class 1879813)]]
- ← Dependency: [[{ADD}CELAccountTransactionsDto]]
- → Dependency: [[SubventionType]]

## 📊 Appears In (1 diagrams)

- Logical: CELAccountTransactionsRequest

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| subsidyType | SubventionType |  |

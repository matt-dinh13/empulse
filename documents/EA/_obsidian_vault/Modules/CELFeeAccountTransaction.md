---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1471786
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 CELFeeAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

It represents one account transaction on a fee.


LDM source for CELAccountTransaction (it is XMLextension):

	
- amount = Contract->FinancialParameters[where Archived = false]->FinancialParameterItem.ItemAmount

## 🔗 Connections (4)

- → Dependency «transformation»: [[ACCOPER156]]
- → Generalization «XSDextension»: [[CELAccountTransaction]]
- → Dependency: [[Processing CELFeeAccountTransaction]]
- ← Dependency: [[{DEL}CELAccountTransactionsRequest]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Account Transactions - Communication model
- Logical: CEL Account Transactions - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tariffItemTypeCode | string |  |
| finParamItemDataExchangeID | string |  |

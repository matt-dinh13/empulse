---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1749965
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 {DEL}CELAccountTransactionsRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

{DEL CLM-5293/}

It represent a set of account transactions which occurred on a closed end contract in one moment (currently it can be sent only after a contract signature).

LDM sources:

	
- Contract


	
- Contract->FinancialParameters[where Archived = false]


	
- Contract->FinancialParameters[where Archived = false]->FinancialParametersItem
	
- type of SystemEvent (i.e. CheckMomentType.*)

## 🔗 Connections (5)

- → Dependency: [[CELInsuranceAccountTransaction]]
- → Dependency: [[Processing CELAccountTransactionsRequest]]
- → Dependency: [[CELAccountTransactionsOperationType]]
- → Dependency: [[CELFeeAccountTransaction]]
- → Dependency: [[CELPrincipalAccountTransaction]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Account Transactions - Communication model
- Logical: CEL Account Transactions - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionDate | date |  |
| contractCode | string |  |
| salesroomCode | string |  |
| typeOfOperation | CELAccountTransactionsOperationType |  |
| fees | CELFeeAccountTransaction |  |
| insuranceItems | CELInsuranceAccountTransaction |  |
| principal | CELAccountTransaction |  |

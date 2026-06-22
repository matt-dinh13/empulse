---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest"
domain: "Analysis Model"
element_id: 1879812
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CELAccountTransactionsDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest

## 📝 Notes

{ADD CLM-3511 /}
It represent a set of account transactions which occurred on a closed end contract in one moment.
Currently it can be sent only after a contract signature.

LDM sources:

	
- Contract


	
- Contract->FinancialParameters[where Archived = false]


	
- Contract->FinancialParameters[where Archived = false]->FinancialParametersItem
	
- type of SystemEvent (i.e. CheckMomentType.*)

## 🔗 Connections (9)

- ← Generalization «XSDextension»: [[{ADD}CELAccountTransactionsRequest v3]]
- → Dependency: [[Get salesroom by Contract operation type]]
- → Dependency: [[CELInsuranceAccountTransaction (Class 1879814)]]
- → Dependency: [[CELPrincipalAccountTransaction (Class 1879818)]]
- → Dependency: [[CELAccountTransactionsOperationType (Enumeration 1879816)]]
- → Dependency: [[CELFeeAccountTransaction (Class 1879817)]]
- → Dependency: [[CELSubsidyAccountTransaction]]
- → Dependency: [[InitialTransactionType (Enumeration 1879808)]]
- → Dependency: [[EventType (Enumeration 1879807)]]

## 📊 Appears In (1 diagrams)

- Logical: CELAccountTransactionsRequest

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}transactionDate | date |  |
| contractCode | string |  |
| salesroomCode | string |  |
| typeOfOperation | CELAccountTransactionsOperationType |  |
| fees | CELFeeAccountTransaction |  |
| insuranceItems | CELInsuranceAccountTransaction |  |
| principal | CELAccountTransaction |  |
| subsidies | CELSubsidyAccountTransaction |  |
| initTransactionType | InitialTransactionType |  |
| conditionAccepted | boolean |  |
| {ADD}eventType | EventType |  |

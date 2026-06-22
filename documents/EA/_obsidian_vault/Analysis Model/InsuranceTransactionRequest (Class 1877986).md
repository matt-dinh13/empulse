---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Insurance Transaction (CITR)"
domain: "Analysis Model"
element_id: 1877986
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 InsuranceTransactionRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Insurance Transaction (CITR)

## 📝 Notes

It represent an account transactions which occurred on an insurance contract in one moment (except contract signature - this information is send due CELAccountTransactionsRequest together with transactions on fees and principal).
System events: InsuranceContractCancelationSE, InsuranceContractTerminationSE

This message (CITR v3) is sent into RabbitMQ exchange of csi.insr.transaction

LDM sources:

	
- InsuranceContract

## 🔗 Connections (4)

- → Dependency: [[InitialTransactionType (Enumeration 1877980)]]
- → Dependency: [[CELAccountTransactionsOperationType (Enumeration 1877982)]]
- → Dependency: [[CELInsuranceAccountTransaction (Class 1727329)]]
- → Dependency: [[InitialTransactionType (Boundary 1879824)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Additional insurance transaction v4

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionDate | date |  |
| contractCode | string |  |
| insuranceItem | External Reference |  |
| typeOfOperation | CELAccountTransactionsOperationType |  |
| initTransactionType | InitialTransactionType |  |
| conditionAccepted | boolean |  |

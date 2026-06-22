---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Insurance Transaction (CITR)"
domain: "Analysis Model"
element_id: 1688227
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 InsuranceTransactionRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Insurance Transaction (CITR)

## 📝 Notes

It represent an account transactions which occurred on an insurance contract in one moment (except contract signature - this information is send due CELAccountTransactionsRequest together with transactions on fees and principal).

This message (CITR v1) is sent only if feature flag isInsuranceTransactionReqV2Enabled = false, otherwise CITR v2 is sent instead.

LDM sources:

	
- InsuranceContract

## 🔗 Connections (1)

- → Dependency: [[External Reference (Boundary 1877983)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Additional insurance transaction

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionDate | date |  |
| contractCode | string |  |
| insuranceItem | External Reference |  |
| typeOfOperation | CELAccountTransactionsOperationType |  |
| {ADD}initTransactionType | InitialTransactionType |  |

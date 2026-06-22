---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest"
domain: "Analysis Model"
element_id: 1879814
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CELInsuranceAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest

## 📝 Notes

It represents one account transaction on a insurance.

LDM source for CELAccountTransaction (it is XMLextension)determination:
If this object is in the InsuranceTransactionRequest and typeOfOperation = CANCEL:

	
- if Insurance Period.Premium is not null then amount =  Insurance Period.Premium Terminated and amountType = IP
	
- else amount = Insurance Period.Net Premium Terminated and amountType = NP


If this object is part of the CELAccountTransactionsRequest 

	
- if Insurance Period.Premium is not null then amount =  Insurance Period.Premium and amountType = IP
	
- else amount = Insurance Period.NetPremium and amountType = NP

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[CELAccountTransaction (Class 1879813)]]
- ← Dependency: [[{ADD}CELAccountTransactionsDto]]
- → Dependency: [[InsurancePremiumType]]

## 📊 Appears In (1 diagrams)

- Logical: CELAccountTransactionsRequest

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insuranceCompanyCode | string |  |
| amountType | InsurancePremiumType |  |
| insuranceSubjectType | string |  |
| insuranceServiceType | string |  |
| tariffItemTypeCode | string |  |

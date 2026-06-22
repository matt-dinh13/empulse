---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Insurance Transaction (CITR)"
domain: "Analysis Model"
element_id: 1727329
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CELInsuranceAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Insurance Transaction (CITR)

## 📝 Notes

It represents one account transaction on a insurance.

LDM source for CELAccountTransaction (it is XMLextension)determination:
If this object is part of the InsuranceTransactionsRequest (CITR) and
If typeOfOperation = CREATE

	
- if Insurance Period.Premium is not null then amount =  Insurance Period.Premium and amountType = IP
	
- else amount = Insurance Period.Net Premium and amountType = NP


if typeOfOperation = TERMINATE || CANCEL

	
- if Insurance Period.Premium is not null then amount =  Insurance Period.Premium Terminated and amountType = IP
	
- else amount = Insurance Period.Net Premium Terminated and amountType = NP
	
- if typeOfOperation = TERMINATE and ((Insurance Period.Premium Terminated is NULL for amountType = IP) OR (Insurance Period.Net Premium Terminated is NULL for amountType = NP)) then the InsuranceTransactionsRequest is NOT generated


If amount is NULL then set amount = 0

If this object is part of the CELAccountTransactionsRequest 

	
- if Insurance Period.Premium is not null then amount =  Insurance Period.Premium and amountType = IP
	
- else amount = Insurance Period.NetPremium and amountType = NP

## 🔗 Connections (3)

- → Generalization: [[CELAccountTransaction (Class 1727330)]]
- → Dependency: [[Get INSR Insurance Program data (Requirement 1876179)]]
- ← Dependency: [[InsuranceTransactionRequest (Class 1877986)]]

## 📊 Appears In (2 diagrams)

- Logical: Generated JMS messages - Additional insurance transaction v4
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insuranceCompanyCode | string |  |
| amountType | InsurancePremiumType |  |
| insuranceSubjectType | string |  |
| insuranceServiceType | string |  |
| tariffItemTypeCode | string |  |
| serviceCode | string |  |
| insurancePeriodEndDate | date |  |

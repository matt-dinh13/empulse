---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening"
domain: "Requirements Model"
element_id: 1365398
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {ADD}AccountOpenedMessage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening

## 📝 Notes

{ADD PAYM-1836 CBL-4667 /}
Info that client's account has been opened in JFS partner (bank) for a contract. If Contract->Product->InstallmentScheduleGenerationTrigger
= 'ON_DISBURSEMENT' than receiving of this JMS generates JFSAccountOpenedSE and triggers generating of installment schedule.

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
- Logical: Consumed JMS messages - Account Opened

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| accountOpenDate | date |  |
| firstDueDate | date |  |

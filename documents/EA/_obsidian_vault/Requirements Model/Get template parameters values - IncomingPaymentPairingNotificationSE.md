---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-452 (CBL-2283) CEL Reward enhancement"
domain: "Requirements Model"
element_id: 1335464
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Get template parameters values - IncomingPaymentPairingNotificationSE

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-452 (CBL-2283) CEL Reward enhancement

## 📝 Notes

Description:
Rule describes how to get value of notification message template parameter for system event InclmingPaymentPairingNotificationSE.

Input: 
- bodyParameters
- parameter values

Output: 
- messageParameters

Steps: 

	
- For each parameter  in bodyParameters get value and set on messageParameters
- if parameter = "title" then value = contactDetail.gender (Note: Please be aware gender may contan whether 'M'|'F' or 'Male'|'Female' depending on country)
- if parameter = "clientName" then value = contactDetail.firstName
- if parameter = "paymentAmount" then value = parameter values.payment amount
- if parameter = "contractNumber" then value = parameter values.contract code
- if parameter = "remainingInstallment" then value =  count of all active standard unpaid installments
{DEL IS-418} - if parameter = "remainingDebt" then value = remaining debt as sum of all active standard unpaid installments {/DEL}
- if parameter = "nextDueDate" then value = first active standard unpaid installment.Due date (with due date >= current date)
- if parameter = "installmentAmount" then value = amount of first active standard unpaid installment (with due date >= current date)
- if parameter = "installmentAmountToPay" then value = unpaid amount of first active standard unpaid installment (with due date >= current date)
- if parameter = "remainingOverdueDebt" then value = remaining overdue debt of the contract
- if parameter = "remainingPenalty" then value = count of all active extraordinary installments with due date >= current date which contain at least one not fully paid installment part of type P or F
- if error then return null
	
- Return messageParameters

## 🔗 Connections (2)

- → Generalization: [[Get template parameters values]]
- → Association: [[Create and integrate new fillers for CEL rewards in Client Notification functionality]]

## 📊 Appears In (2 diagrams)

- Custom: IS-452 (CBL-2283) CEL Reward enhancement
- Use Case: SMS notification

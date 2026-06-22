---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-418 (CBL-2228) Changes for ID Payment SMS"
domain: "Requirements Model"
element_id: 1290961
diagrams: 1
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-2228 Changes for ID Payment SMS

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-418 (CBL-2228) Changes for ID Payment SMS

## 📝 Notes

Description:
List of changes agreed to be done for ID Payment SMS:

	
- Penalty should not be counted as one installment, it should be merged with previous installment. And as behaviour of penalty is it will not be charged in the future, then SMS sent when penalty is charged & unpaid will always be with template MSG_PAYMENT_PAIRED_DPD.


	
- Please use DPD without tolerance in deciding which template should be used. Current situation is, BSL use DPD calculation on installment level, meanwhile ID is counting DPD in contract level. But tolerance (smallunderpayment) should still be considered in last payment, though.


	
- Please use client's first name in the SMS. It's not common in ID to call people by their last name.

## 🔗 Connections (5)

- ← Generalization: [[REQ#4 Change localization of SMS messages]]
- ← Generalization: [[REQ#3 - Use template MSG_PAYMENT_PAIRED_DPD properly]]
- ← Generalization: [[REQ#3 - Add new SMS template for future penalties]]
- ← Generalization: [[REQ#1 - Count only standard installments into the number of installments]]
- ← Generalization: [[REQ#2 - Use first name instead of surname in salutation]]

## 📊 Appears In (1 diagrams)

- Custom: IS-418 (CBL-2228) Changes for ID Payment SMS

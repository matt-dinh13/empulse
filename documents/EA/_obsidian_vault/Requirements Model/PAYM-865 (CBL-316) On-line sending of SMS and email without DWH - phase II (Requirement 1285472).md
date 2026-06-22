---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II"
domain: "Requirements Model"
element_id: 1285472
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II

## 📝 Notes

We need to implement new type of SMS:
b. Reversal Payment SMS
This SMS will be sent to customer in event of unpairing payment from installment schedule. And this situation will not include if unpairing event happened when payment is paired to the last amount of installment (payment that makes the contract fully paid).

IMPORTANT NOTE:
We have agreed with Account Pricing team that our developers will cooperate on development of CBL-316 into the Notifier application. Subsequently, we will use the gained knowledge to move ID SMS templates from our own notification module to Notifier while in parallel implementing changes requested in CBL-3370.

## 🔗 Connections (1)

- ← Generalization: [[ReversalPaymentNotification]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II

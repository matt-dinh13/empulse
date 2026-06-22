---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II"
domain: "Requirements Model"
element_id: 1276273
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 ReversalPaymentNotification

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II

## 📝 Notes

In order to trigger sending of Reversal payment SMS notifications from Notifier we need to implement a new JMS message (ReversalPaymentNotification) and JMS queue. Notifier will consume messages from the created queue.

The JMS will be generated based on ReversalPaymentNotificationSE system event that also has to be implemented.

It is necessary to provide all the information needed for constructing the SMS content and for decision logic in the JMS.

## 🔗 Connections (1)

- → Generalization: [[PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II (Requirement 1285472)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II

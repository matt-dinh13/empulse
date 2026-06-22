---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS"
domain: "Requirements Model"
element_id: 1336133
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 PairedPaymentNotification

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS

## 📝 Notes

In order to trigger sending of Paired payment SMS notifications from Notifier we need to implement a new JMS message (PairedPaymentNotification) and JMS queue. Notifier will consume messages from the created queue.

The JMS will be generated based on existing IncomingPaymentPairingNotificationSE system event.

It is necessary to provide all the information needed for constructing the SMS content in the JMS.

Feature will be driven by a feature switch parameter.

## 🔗 Connections (1)

- → Generalization: [[Requirement1PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS

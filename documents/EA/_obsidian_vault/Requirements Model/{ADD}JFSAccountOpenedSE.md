---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening"
domain: "Requirements Model"
element_id: 1876525
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {ADD}JFSAccountOpenedSE

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening

## 📝 Notes

{ADD PAYM-1903 CBL-4667 /}
System event triggered after receiving an AccountOpenedMessage JMS. It triggers UC {MOD}01.191 Process installment schedule generation after disbursement.

It contains all attributes from AccountOpenedMessage JMS.

## 🔗 Connections (1)

- → Generalization: [[OutgoingPaymentSystemEvent]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
- Logical: OutgoingPaymentSystemEvent

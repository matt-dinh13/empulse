---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1189 (CBL-3257) AMMIL"
domain: "Requirements Model"
element_id: 1374250
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 DEV CBL-3257 AMMIL

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1189 (CBL-3257) AMMIL

## 📝 Notes

In order for the 360 component (Campaign management) to be able to calculate AMMIL (available maximum monthly installment limit) we have to inform 360 about changes of monthly installment of a contract (FP.TotalMonthlyPayment) when it changes during a contract lifecycle (PER or LRES processing as of now).

We will implement new JMS message TotalMonthlyInstallmentInfo that will be generated on PartialEarlyRepaymentSE and LoanServiceRequestExecutedSE (in case it's of type LRES). OSB will transform it into Kafka message and distribute it to 360 component.

In IN, OSB will transform TotalMonthlyInstallmentInfo JMS messages into Kafka message and distribute it to 360 component. Structure of the Kafka message and name of the Kafka topic has to be communicated with the Campaign Management team and then communicate this information into OSB.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1189 (CBL-3257) AMMIL (Requirement 1374251)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1189 (CBL-3257) AMMIL

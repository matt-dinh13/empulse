---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job"
domain: "Requirements Model"
element_id: 1360930
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ2: Instalment schedule - prepayment instalments generating

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job

## 📝 Notes

To be able to generate the new Prepayment instalment where the prepaid payments (deposit date < any unpaid instalment due date), we need to add/modify following:

	
- New instalment part type "Prepayment" (PP) to be added in the enumeration - Standard instalment, Prepayment instalment part
	
- Add the logic of Prepayment instalment calculation
in case of incoming payment deposit:
if exists unpaid due/past due instalment on contract then
     system pairs the incoming payment to the contract´s unpaid due/past due according to valid pairing priority
     if incoming payment amount > contract due/past due instalments then
          system creates the standard instalment with Overpayment instalment part type as following:
               instalment.dueDate = IncomingPayment.depositDate
               instalment.TBD
	
- Add the Prepayment instalment part type pairing priority

## 🔗 Connections (3)

- → Association: [[REQ 2.3 Add prepayment during pairing]]
- → Association: [[REQ 2.2 Add global parameter - PairToPrepaymentTillDueDate]]
- → Association: [[REQ 2.1 Add the Prepayment (PP) installment part into enums]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job

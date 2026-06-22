---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-870 (CBL-2733) SD BSL - BOOK NG stateless interface"
domain: "Requirements Model"
element_id: 1281593
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-870 (CBL-2733) BSL - BOOK NG stateless interface

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-870 (CBL-2733) SD BSL - BOOK NG stateless interface

## 📝 Notes

- New WriteOff JMS message
-- Message will contain the whole installment schedule in its latest version during write-off event
-- Now being sent by CLM through DWH
-- CLM should create a system event which we will consume and generate this new WriteOff JMS message
-- It is prefered to use the message structure already used by REL - see the HPB-CNHOMERWriteOffNotification attachment of the original CBL
-- We will create and send batched JMS WriteOffNotification in reaction to contract write-off

- Changes of approach to providing data about IS to BOOK
-- Right now the whole installment schedule is provided when it is created (accounting entries for 4+ years is some cases) - InstallmentScheduleInfoRequest (ISIR) JMS
-- Proposed state:
--- Info about a new IS (after sign/disbursement) will be provided by ISIR JMS or new JMS (HPB-BSL_TransactionMessage)
---- Alternative 0 - Using ISIR as-is and extracting on BOOK NG side
---- Alternative 1 - Sending batched CELTransactionMessage JMS for all affected installments
--- Info about a due date of an actual an a next installment (due date period) will be provided by new JMS containing a due date of a next installment
---- We will create a new job + create and send batched CELTransactionMessage JMS
--- Info about a change of IS (regeneration, due date shift, payment holiday, cancellation, termination) will be provided by new JMS containing a due date of a next installment
---- Alternative 0 - Using ISIR as-is and extracting on BOOK NG side
---- Alternative 1 - Sending batched CELTransactionMessage JMS for all affected installments

## 🔗 Connections (3)

- ← Generalization: [[REQ#2 Daily job for sending ISIR JMS]]
- ← Generalization: [[REQ#3 Sending transaction notifications on IS regeneration]]
- ← Generalization: [[REQ#1 WriteOffNotification]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-870 (CBL-2733) SD BSL - BOOK NG stateless interface

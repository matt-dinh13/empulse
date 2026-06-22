---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-870 (CBL-2733) SD BSL - BOOK NG stateless interface"
domain: "Requirements Model"
element_id: 1277058
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 Daily job for sending ISIR JMS

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-870 (CBL-2733) SD BSL - BOOK NG stateless interface

## 📝 Notes

To provide the actual transaction data to BOOK NG on a daily basis we need to:

	
- Extend InstallmentScheduleInfoRequest (ISIR) XSD with installment.previousDueDate and installment.installmentPart.paidAmount and calculate them whene generating ISIR.
	
- Create a DB script for selecting all relevant transactions (based on due date of a contract) and data required for creating ISIR and saving it into a new DB table.
	
- Implement a daily job that triggers the DB script and post-process the generated transactional data from the new DB table - it will generate ISIR for every contract and insert it into a defined queue.


A database job will collect data of all installment parts (joined with parent installments and contracts) fulfilling following conditions:

	
- Its parent installment is first future installment (it has minimal due date that is >= current date)


	
- Its parent installment has ACTIVE_FLAG = 1
	
- Its parent installment has TYPE = STANDARD
	
- Its parent contract has STATUS in (Active, Signed)
	
- Its parent contract has installment which has DUE_DATE < current date AND DUE_DATE >= date of the previous job execution AND CREATION_DATE < date of the previous job execution
	
- The installment part has ITEM_TYPE not in (S, ST)
	
- Order by CONTRACT_CODE

## 🔗 Connections (1)

- → Generalization: [[PAYM-870 (CBL-2733) BSL - BOOK NG stateless interface]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-870 (CBL-2733) SD BSL - BOOK NG stateless interface

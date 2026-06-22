---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1046 (CBL-2962) Interest from disbursement date (Cash Loans only)"
domain: "Requirements Model"
element_id: 1373283
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Modify the global parameter installmentScheduleGenerationTrigger to affect only CASH loans

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1046 (CBL-2962) Interest from disbursement date (Cash Loans only)

## 📝 Notes

The original implementation of CBL-1586 was turned-off by VN before going to production. After a revision of the CBL, VN only requests calculate interest from disbursement date for CASH loans with no effect on non-CASH loans. We need to modify the implementation of a global parameter installmentScheduleGenerationTrigger to achieve this.

Behaviour of all loans if installmentScheduleGenerationTrigger = ON_SIGN:

	
- as-is


Behaviour of non-CASH loans if installmentScheduleGenerationTrigger = ON_DISBURSEMENT:

	
- During generating offer IS, FP will be always taken from OFP
	
- Conditions will be accepted during signing
	
- IS will be copied from offer during signing
	
- PaymentOrderCreatedSE will not cause IS generation as it was originally requested


Behaviour of CASH loans if installmentScheduleGenerationTrigger = ON_DISBURSEMENT:

	
- During generating offer IS, FP will be always taken from OFP
	
- IS will not be copied from offer during signing
	
- Conditions will not be accepted during signing
	
- CashDisbursementConfirmedSE with payment type CL will cause IS generation
	
- During generating IS after disbursement, FP will be taken from already existing FP
	
- During generating IS after disbursement, conditions will be accepted

## 🔗 Connections (1)

- → Generalization: [[PAYM-1046 (CBL-2962) Interest from disbursement date (Cash Loans only) (Requirement 1373282)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1046 (CBL-2962) Interest from disbursement date (Cash Loans only)

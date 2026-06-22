---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2353 - OBS interface - Installment schedule (REL)"
domain: "Modules"
element_id: 1224385
diagrams: 5
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Processing InstalmentMessageDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2353 - OBS interface - Installment schedule (REL)

## 📝 Notes

Input:

	
- InstalmentMessageDto


Validations:

	
- system checks eligibility of passed PaidInstallmentMessageDto according to the rule Filter instalment messages, passed is:
- accountType = InstallmentMessageDto.accountType 
- billingSystem = InstallmentMessageDto.billingSystem 
- reconciliationType = InstallmentMessageDto.reconciliationType 
If the rule returns false, the algorithm ends.


Initialization:
System tries to find a record in RELTariffItemToOBSCode where RELTariffItemToOBSCode .Code = InstalmentMessageDto.tariffItemTypeCode. 
If:
- record is found, the system sets OBStariffCode = RELTariffItemToOBSCode.value
- no record is found, the system sets OBStariffCode = TransactionMessageDto.tariffItemTypeCode

Algorithm:
System creates a record in the comm table INSTALMENT125 with the following parameters:

	
- Id = automatically generated unique identifier of the record
	
- IdCredit = according to the rule Get OBS contract identification, passed is InstalmentMessageDto.contractCode
	
- IdInstalment = InstalmentMessageDto.instalmentCode
	
- TypeInstalhead = according to the InstalmentMessageDto.typeInstalment:
- InstalmentTypeDto.REGULAR --> s
- InstalmentTypeDto.PAYOFF --> s
- InstalmentTypeDto.EXTRA --> s
- InstalmentTypeDto.ADDITIONAL --> m
- error otherwise
	
- TypeInstalment = RELTariffItemToOBSCode.Value of the found record during the Initialization
	
- TypeReconciliation =  according to the InstalmentMessageDto.reconciliationType:
- ReconciliationTypeDto.OWN_FUNDS --> DEBT
- ReconciliationTypeDto.DEBT --> DEBT
- ReconciliationTypeDto.OVERDRAFT --> OVERDRAFT
- error otherwise
	
- ValueInstalment = InstalmentMessageDto.amount   ...negative amount if InstalmentMessageDto.cancelled = CANCEL


	
- DateDue = InstalmentMessageDto.dueDate
	
- Allocation = according to the InstalmentMessageDto.allocation:
- AllocationTypeDto.IP --> IP
- AllocationTypeDto.CARD --> CARD


	
- TypeInform = if InstalmentMessageDto.cancelled = false, then I (Insert); else C (Cancel)
	
- IdResult190 = null
	
- ResultCode = null
	
- TimeStamp = current

## 🔗 Connections (5)

- ← Dependency: [[InstalmentMessageDto]]
- ← Dependency: [[Processing MessageEnvelopeDto]]
- → Dependency: [[Filter instalment messages]]
- → Dependency: [[REQ#1 Message INSTALMENT125]]
- → Dependency: [[Get OBS contract identification]]

## 📊 Appears In (5 diagrams)

- Custom: BRR-2353 - OBS interface - Installment schedule (REL)
- Custom: COMMON for comm. with CaBus - Business rules
- Custom: Installment schedule - Business rules
- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: REL Installment schedule - Communication model

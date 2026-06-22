---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2202 - OBS interface - Installment schedule (CEL)"
domain: "Modules"
element_id: 1224384
diagrams: 4
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Processing CELInstallmentScheduleRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2202 - OBS interface - Installment schedule (CEL)

## 📝 Notes

Input:

	
- CELInstallmentScheduleRequest


Algorithm:
1. System determinates a CELInstallmentScheduleRequest.contractCode according to the rule Get OBS contract identification, passed is CELInstallmentScheduleRequest.contractCode.


2. System load a set of InstallmentPartDto referenced from CELInstallmentScheduleRequest->Installments.installmentParts and for each item performs the following steps.

3. System tries to find a record in IINSTALMENT120TypeInstalment where IINSTALMENT120TypeInstalment.Code = 

	
- InstallmentpartDto.partType   ...if InstallmentpartDto.partType is NOT in (F, FT, P) 
	
- InstallmentpartDto.tariffItemTypeCode   ...if InstallmentpartDto.partType is in (F, FT, P)

If no record is found, the system logs an error and the algorithm ends. 

4. System creates a record in the comm table INTALMENT120 with the following parameters:

	
- id = automatically generated unique identifier of the record
	
- idInstallment = InstallmentPartDto.dataExchangeId
	
- idCredit = found contractCode from the step 1


	
- typeInstallment = INSTALMENT120TypeInstalment.Value of the record found in the previous.


	
- isTerminated = if InstallmentPartDto.partType in (IT, FT, ST), then true; else false
	
- installmentHeaderType = InstallmentDto.installmentType
	
- recalculationReason = InstallmentDto.recalculationReason
	
- dueDate = InstallmentDto.dueDate
	
- numInstallment = InstallmentDto.installmentNumber


	
- valueInstallment = InstallmentPartDto.amount   ...negative amount if ArticifialIncomingPaymentRequest.typeOfOperation = CANCEL


	
- typeInform = if InstallmentDto.typeOfOperation = CREATE, then I (Insert); else C (Cancel)


	
- version = if InstallmentDto.typeOfOperation = CREATE, then InstallmentDto.createdInVersion; else InstallmentDto.deactivatedInVersion


	
- packCount = count of all installment parts grouped by INSTALMENT120.version and INSTALMENT120.typeInform included within the request (i.e. count of all CELInstallmentScheduleRequest->Installments->InstallmentPart in one version
	
- timestamp = current

## 🔗 Connections (4)

- ← Dependency: [[InstallmentScheduleInfoRequest]]
- → Dependency: [[Get OBS contract identification]]
- → Dependency: [[REQ#1 Processing InstallmentScheduleRequest to INSTALPAY120]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]

## 📊 Appears In (4 diagrams)

- Custom: BRR-2202 - OBS interface - Installment schedule (CEL)
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: Installment schedule - Business rules
- Logical: CEL Installment schedule - Communication model

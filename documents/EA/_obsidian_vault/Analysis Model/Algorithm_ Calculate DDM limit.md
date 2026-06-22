---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules"
domain: "Analysis Model"
element_id: 1667256
diagrams: 5
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Calculate DDM limit

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules

## 📝 Notes

==================
---- CEL Contracts ---
==================
1. For Contract.Type = 'CEL'
For the calculation of first DDM on the application/contract the value depends on value of global parameter DDMLimitBase.

MULTIPLE_OF_MONTHS_INSTALLMENT:

For applications: OFFER_DDM_LIMIT = (Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Total_Monthly_Payment x DDMLimitMultiple) rounded up by DDMLimitRound

For contracts in status APPROVED: OFFER_DDM_LIMIT = (Contract->Offer_Financial_Parameters.Total_Monthly_Payment x DDMLimitMultiple) rounded up by DDMLimitRound

For contracts NOT in status APPROVED (i.e. it has been already approved): OFFER_DDM_LIMIT = (MAX_SUM_OF_INSTALLMENT_PARTS x DDMLimitMultiple) rounded up by DDMLimitRound
where MAX_SUM_OF_INSTALLMENT_PARTS:

	
- System will find all INSTALMENTs according to INTALLMENT.DUE_DATE.
	
- For each INSTALLMENT system find all INSTALLMENT.INSTALLMENT_PARTs.
	
- System count SUM of all INSTALLMENT_PART for each INSTALLMENT.
	
- System will find MAX from all SUM from step 3 = MAX_SUM_OF_INSTALLMENT_PARTS

where as INSTALLMENTS are taken Contract->Installments if for the contract exists Contract->Installments,
otherwise Contract->Offer_Financial_Parameters[.Chosen = TRUE]->Offer_Installments

CREDIT_AMOUNT:

For applications: OFFER_DDM_LIMIT = Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Net_Credit_Amount

For contracts: OFFER_DDM_LIMIT = Contract->Offer_Financial_Parameters.Net_Credit_Amount
For next DDM on the contract value of limit = value of the limit of last DDM on the contract.

==================
---- REL Contracts ---
==================
2. For Contract.Type = 'REL'
For applications: OFFER_DDM_LIMIT = Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Provided_Credit_Limit x global parameter DDMLimitMultipleREL

For contracts in status APPROVED: OFFER_DDM_LIMIT = Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Provided_Credit_Limit x global parameter DDMLimitMultipleREL

For contracts NOT in status APPROVED (i.e. it has been already approved): OFFER_DDM_LIMIT = Contract->Financial_Parameters.Provided_Credit_Limit x global parameter DDMLimitMultipleREL

## 🔗 Connections (10)

- ← Dependency: [[DDM Limit height for applications and approved contracts (VAL_0122_OFFER_DDM_LIMIT)]]
- ← Dependency: [[DDM Limit height for _non-APPROVED_ contracts (VAL_0119_DDM_LIMIT)]]
- ← Dependency: [[01.776 Create contract DDM service]]
- ← Dependency: [[01.777 Update contract DDM service]]
- ← Dependency: [[{MOD}01.081 Fill in application - 1SP]]
- ← Dependency: [[01.420 Create DDM on the contract]]
- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[{MOD}01.460 Create DDM externally]]
- ← Dependency: [[01.421 Create application DDM (UseCase 1818674)]]
- ← Dependency: [[Limit (GUIElement 1820767)]]

## 📊 Appears In (5 diagrams)

- Custom: Create DDM
- Use Case: Contract DDM operations
- Use Case: Create/Update/Receive DDM
- Use Case: Fill in application - 1SP
- Use Case: Fill in application - 2SP

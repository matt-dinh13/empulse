---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Payment Channel Management/Business Rules"
domain: "Analysis Model"
element_id: 1692193
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Payment channel validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Payment Channel Management/Business Rules

## 📝 Notes

1. Related to payment channel type
When payment channel type = 'SBA' then

	
- paymentChannel.salesroomCode - mandatory


When payment channel type = 'PBA' then

	
- paymentChannel.salesroomCode - mandatory


When payment channel type = 'GBA' then

	
- paymentChannel->bankAcountType.accountNumber - mandatory


	
- paymentChannel->bankAcountType.accountType - mandatory
	
- paymentChannel->bankAcountType.bankBranchCode - mandatory
	
- paymentChannel.currency - mandatory


When payment channel type = 'DD' then

	
- paymentChannel->bankAcountType.accountNumber - mandatory


	
- paymentChannel->bankAcountType.accountType - mandatory
	
- paymentChannel->bankAcountType.bankBranchCode - mandatory
	
- paymentChannel->bankAcountType.holderName - mandatory
	
- paymentChannel.currency - mandatory
	
- paymentChannel->ddmData.limitAmount - mandatory


When payment channel type = 'CA' then

	
- paymentChannel->cardData.truncatedPan - mandatory
	
- paymentChannel->cardData.externalCardId - mandatory
	
- paymentChannel->cardData.cardIssuerName - mandatory


When paymentChannel->ddmData.regularPayment = 'FIXED'

	
- paymentChannel->ddmData.regularPaymentAmount - mandatory


2. Other

	
- type - Repayment Channel validation rule / Disbursement Channel validation rule
	
- paymentChannel.currency - must be value of Currency.Code
	
- paymentChannel->ddmData.limitAmount- DDM Limit height for applications and approved contracts (VAL_0122_OFFER_DDM_LIMIT)
	
- paymentChannel->ddmData.regularPayment - mandatory if contract type = REL and repayment type = DD, must be value of Regular_Payment_Type.Code;
	
- paymentChannel->ddmData.regularPaymentAmount - must be higher than minimal payment in offer
	
- paymentChannel->bankAcountType.bankBranchCode - must be value of Bank Branch.Synchronization Code
	
- paymentChannel->bankAcountType.accountType - must pass account number validation
	
- paymentChannel.sourceType - must be value of Source_type.Code
	
- paymentChannel.salesroomCode - must be existing Salesroom.Code (in HOMESIS)

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.465 Set payment channel]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules

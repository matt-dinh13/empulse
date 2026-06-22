---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1285989
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Impact other in BSL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

ApplicationOfferManagementWS

	
- AcceptOfferRequest
	
- AcceptOfferResultCode
	
- ApplicationRELIPOffer
	
- CreateApplicationRequest
	
- CreateApplicationResultCode
	
- UpdateApplicationRequest
	
- UpdateApplicationResultCode

Product Calculator UI

	
- Product Offer Search Result

HO_CONTRACT_DATA

	
- ConsumerLoanParametersType
	
- InstallmentsType

HO_PRODUCT_OFFER_DETAIL

	
- RELIPOfferDetailType
	
- ServiceDetail

Offer Financial Parameters

	
- Offer RELIP Service Variant

Offer Detail

	
- customization - Product Offer Detail Item Parameters
	
- Product Offer Detail Item Type
	
- Preliminary installment schedule
	
- Copy of RELIP Installment Plan in Offer structure

Contract Detail

	
- Available optional offers
	
- Current offer

InstallmentPlanOffers

	
- InstalmentPlanSetupDto

Loan Service notifications

	
- RequestParametersChoice


	
- LoanServiceRequestTypeDto
	
- switchServiceOperationStatusParametersDto

Loan Service Processing

	
- REL installment plan mapping for printout
	
- Update Offer RELIP Service Variant rule

Financial Partnership

	
- OfferFinancialParameters


Use Cases

	
- 12.630 Create request for transaction without card


	
- 01.076 Display preliminary installment schedule


	
- 01.187 Sign contract
	
- 01.080 Fill in application
	
- 01.095 Create application externally
	
- 01.158 Accept offer
	
- 01.167 Accept offer externally
	
- 01.182 Prepare documentation manually
	
- 05.310 Process disbursement confirmations
	
- 01.166 Get application offers
	
- 01.184 Process ContractSignTransactionsSE event
	
- 01.186 Prepare documentation

## 📊 Appears In (1 diagrams)

- Custom: PCG-701 Financing Schema II (CBL-1533)

---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2583 (CLM-1161) API to Update Account Opening Result for DBS Bundling Product"
domain: "Requirements Model"
element_id: 1879424
diagrams: 7
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Copy chosen offer financial parameters to contract

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2583 (CLM-1161) API to Update Account Opening Result for DBS Bundling Product

## 📝 Notes

This rule describes mapping between chosen offer's financial parameters and Contract Financial parameters:

Financial Parameters are copied from Offer Financial Parameter:
- Credit Amount
- Advance Payments Number
- Annuity
- Interest Rate
- IS Interest Rate
- Terms
- First Due Date
- Shifted Last Due Date
- Customer First Due Date
- Price
- Total Monthly Payment
- Cash Payment
- Net Credit Amount
- Provided Credit Amount
- Total Payment Per Credit
- Net Cash Payment
- Offer Calculation Date
- Billing Day
- Net Credit Limit
- Initial Transaction Type
- Installment Due Day
- Minimal Installment Amount
- Provided Credit Limit
- Installment Schedule Method
- Loan Providing Date
- Day Count Method
- Financing Scheme Variant Number
- Financing Scheme
- Financing Package
- Account Transaction Code
- Product (Code & Version)
- Tariff (Code & Version)
-{ADD CLM-2846}Marketing Offer Id{/ADD}
- {ADD LOR-11243}{country PH}Discount Goods Price Amount{/ADD}
- {ADD LOR-11243}{country PH}Discount Goods Price Currency{/ADD}
- {ADD IS-2779}{country PH} Remaining Cash Payment Amount {/ADD}
- {ADD IS-2779}{country PH} Remaining Cash Payment Curr {/ADD}
- {ADD IS-2779}{country PH} Trade In Amount {/ADD}
- {ADD IS-2779}{country PH} Trade In Amount Curr {/ADD}
 

	
- ContractService (or its subclass) instance is created for each OfferService (or its subclass) instance
- Status ->if ContractService->Service.TypeCode = 'BUNDLE1', set 'NEW', else set 'ACTIVE'
- StartDate is set to current date
- EndDate and StatusReason is not set
- When Created = 'CS'
- If any OfferServiceParameters are registered, then they are copied to ContractServiceParameters
- Following attributes are copied from OfferService or its respective subclass (source attribute has the same name if not stated otherwise):
  -- ContractInsuranceService.InsuranceContractCode
  -- ContractInsuranceService.InsuranceProgramCode
  -- ContractInsuranceService.InsuranceProgramVersion
  -- ContractInsuranceService.EstimatedInsurancePeriodStart
  -- ContractInsuranceService.EstimatedInsurancePeriodEnd
  -- ContractCardService.CardNumber
  -- ContractCardService.IssueMethod
  -- ContractCardService.Salesroom
  -- ContractCardService.Holder Name
  -- ContractCardService.Expiration Date
  -- ContractCardService.IssueFormat
  -- ContractService.Commodity ID
	
- FinancialParameterItem (or its subclasses) instance is created for each OfferFinancialParameterItem and for each created item, the system generates the value of FinancialParameterItem.dataExchangeId as an unique identifier of the FinancialParameterItem across the systems (it is not DB ID).
If OFPServiceTariffItem is linked to an OfferService, then link is created between respective FPTariffItem and ContractService.
If OfferFinancialParametersItem2Subvention is linked to an OfferService then link is created between respective FinancialParametersItem2Subvention and ContractService.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Update data in contract related structures]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-2583 (CLM-1161) API to Update Account Opening Result for DBS Bundling Product
- Custom: CBL-6335 (CLM-2105) Insurance premium calculation and bundling of services
- Custom: CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag
- Custom: CBL-8758 (CLM-2846) Display offer type code on Contract Detail
- Custom: CSI-608 Adding InsuranceProgram identifier into InsuranceContract
- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- Use Case: Contract signing

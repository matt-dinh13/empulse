---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA"
domain: "Requirements Model"
element_id: 1879506
diagrams: 3
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 HO_ALOP_DATA filling rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA

## 📝 Notes

This rule presents creation of the HO_ALOP_DATA datasource for Transaction Supplement printouts

Steps

	
- System gets ApplicationData by Get ALOP application data by code with ContractSupplement.ApplicationCode parameter
	
- If ApplicationData.Parties[Applicant].Code is returned then system gets applicant data for printout by Get Applicant by Id from CIF with parameter ApplicationData.Parties[Applicant].Code
	
- ContractSupplement.Loan Type = 'ALOP', system gets Get Offer by offerId from SQS with parameter Account Transaction Supplement.Chosen Offer Id -- financial data for ChargedFees
	
- System get Installment Plan data by Get Installment Plan data from ASQ with parameter Contract Supplement ->Contract.Account Number, Account Transaction Supplement.Chosen Offer Id, Account Transaction Supplement.Loan Type, current_date -- financial data for LoanParameters, ChargedFees, and ChargedInterests structures
	
- If ContractSupplement.Loan Type = 'ALOP'
A. System gets a client's bank connection data by Get PaymentChannel data by paymentChannelId with Account Transaction Supplement.Disbursement Payment Channel Id -- optional data for PamentChannel structure
B. System gets Get tariff items related to the account with accountNumber as parameter -- optional data for ApplicableTariffItem structure
	
- If VerificationData is provided, system adds this data to the data source.
	
- {ADD CSI-4244 VN only}
- System get list of commodityIds (it means list of values with key = commodityId from Supplement Custom Data)
- System call COMMODITY API for commodityIds list
- System find commodity with highest price CoHP  (use first commodity if there are more with the same highest price)
- System add following key+value items to additionalData attribute. Use NULL value if no commodity found.
  -- commodityType = CoHP.CommodityTypeName (use CoHP.CommodityTypeCode if CoHP.CommodityTypeName is not defined)
  -- commodityPrice = CoHP.CommodityPrice 
  -- totalGoodsAmount = sum of CommodityPrice for all commodities from the list

## 🔗 Connections (7)

- ← Dependency: [[{MOD}13.205 Create contract supplement documents v2]]
- → Dependency: [[Get PaymentChannel data by paymentChannelId]]
- → Dependency: [[Get Applicant by Id from CIF]]
- → Dependency: [[Get Offer by offerId from SQS]]
- → Dependency: [[Get application data by code]]
- → Dependency: [[Get tariff items related to the account]]
- → Dependency: [[Get Installment Plan data from ASQ]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA
- Custom: HO_ALOP_DATA - getting external data
- Use Case: Transaction Supplement documents - Use case model 

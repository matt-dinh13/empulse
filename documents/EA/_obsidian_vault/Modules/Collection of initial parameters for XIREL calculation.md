---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation"
domain: "Modules"
element_id: 1121362
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Collection of initial parameters for XIREL calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation

## 📝 Notes

Input: 
- Financial parameters of offer/contract (FP)

Output: 
- Values of Initial parameters for XIREL calculation


	
- Read codes of Tariff Item Types from PIR Parameter To Tariff Item Type, find the last corresponding Tariff Items in tariff assigned to FP and then in tariffs assigned to Insurance and Zero Promo service (if the service is assigned to the FP) and save them as:
- TransCash_IR_TI
- TransPOS_IR_TI
- TransInsur_IR_TI
- TransCashZero_IR_TI
- TransPOSZero_IR_TI
- TransInsurZero_IR_TI
- Maintenance_Fee_TI
If any Tariff Item is not found or corresponding Percentage is not defined then the value of percentage is set to 0 in further calculations.
	
- Set
- InsurIR = TransInsur_IR_TI.Percentage
- MaintenanceFeeRate = Maintenance_Fee_TI.Percentage
- MaintenanceFeeInit = true 
	
- If FP.InitialTransactionType = POS then
- TranIR = TransPOS_IR_TI.Percentage
- TranInitIR = TransPOS_IR_TI.Percentage
else
- TranIR = TransCash_IR_TI.Percentage
- TranInitIR = TransCash_IR_TI.Percentage
end if
	
- If service Zero promo (ZPROMO) is assigned to FP then 
- InsurIR = TransInsurZero_IR_TI.Percentage
- If FP.InitialTransactionType = POS then
-- TranInitIR = TransPOSZero_IR_TI.Percentage
- else
-- TranInitIR = TransCashZero_IR_TI.Percentage
- endif
- If FP.ZeroPromoRELService.ChargeEOMFee = false then MaintenanceFeeInit = false
	
- Calculate total insurance premium from FP:
- Find all services linked to FP where FP.OfferService/ContractService.ServiceType.ServiceCategory = 'Insurance'
- Find all fees linked to FP where FP.FPTariffItem.TariffItemType.Usage = 'Service' and FP.FPTariffItem.TariffItemType.Flag.ToPrincipal = true and FP.FPTariffItem.TariffItemType.Periodicity in (ONE_TIME, YEARLY) which are linked to services found in previous step
- InsurInitAmount = sum of found FPTariffItem.ItemAmount
- InsurAmount = InsurInitAmount * FP.ProvidedCreditLimit / FP.NetCreditLimit
	
- Find another parameters for calculation from FP:
- MinInstallmentRate = FP.Product.RevolvingLoanProductVariant.MinInstallmentRate
- MinInstallmentAmount = FP.Product.RevolvingLoanProductVariant.MinInstallmentAmount
- TranInitAmount = FP.NetCreditAmount
- TranAmount = FP.NetCreditLimit - FP.NetCreditAmount
- TotalCreditLimit = FP.ProvidedCreditLimit
	
- Calculate minimal installment amount:
- MinInstallmentRateAmount = MinInstallmentRate * TotalCreditLimit
- If MinInstallmentRateAmount > MinInstallmentAmount then MinInstallmentAmount = MinInstallmentRateAmount
MinInstallmentAmount is rounded according to parameters of FP.Product.RevolvingLoanProductVariant (MinInstallmentRounding, MinInstallmentRoundingScale)
	
- If FP is assigned to Contract then StartDate = ContractSignDate else StartDate = current date.
	
- Calculate BillingDate according to the rule Calculation of Billing date for PIR with StartDate as parameter.

## 🔗 Connections (3)

- ← Dependency: [[Generation of cash flow for XIRR calculation]]
- → Dependency: [[PIR Parameter To Tariff Item Type]]
- → Dependency: [[Calculation of Billing date for PIR]]

## 📊 Appears In (1 diagrams)

- Custom: XIREL calculation

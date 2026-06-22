---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance"
domain: "Requirements Model"
element_id: 1827128
diagrams: 7
connections: 10
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Calculate new installment amount on service termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance

## 📝 Notes

{MOD CSI-3602}
Rule Calculate new installment amount on insurance termination renamed to Calculate new installment amount on service termination and moved to COMMON for Loan Services part in Loan Service processing package. Now it can be used generally for any contract service (not only contract insurance service).
{/MOD}
-- originally separated from UC 11.121 - AW - CEL insurance contract termination alternate
This rule describes calculation new financial parameters of the contract when insurance is to be terminated.
Input:

	
- Contract
	
- {MOD CSI-3602} ContractService ContractInsuranceService {/MOD}
	
- ServiceParameters
	
- TerminationEffectiveDate (Effective date of termination value)
	
- serviceStartDate - start date of service usage (contract service start date or Insurance period start date)
	
- serviceEndDate - original end date of service usage (contract last due date or Insurance period end date)
	
- {DEL CSI-3602} VIP (the last Valid Insurance Period){/MOD}


Output:

	
- NewFinancialParameters (NFP)


	
- WarningMessage



	
- Get OriginalPremiumAmountInPrincipal or OriginalMonthlyInsuranceFee by Get Tariff Items used for Insurance premium with Contract Service as parameter
If no OriginalPremiumAmountInPrincipal neither OriginalMonthlyInsuranceFee is obtained, then scenario returns WarningMessage = MSG_CELInsuranceNoTariffForInsurance and ends
	
- {ADD CSI-3602} If ContractService is ContractInsuranceService then {/ADD} system gets Insurance Contract where Contract Code = ContractInsuranceService.Insurance Contract Code and Insurance Period is the last active Insurance Period and system sets:
- remainingFeeCalculationType = ServiceParameters.Remaining Fee Calculation
- ratio = ServiceParameters.Ratio
	
- {ADD CSI-3602} If ContractService is not ContractInsuranceService then system sets:
-- remainingFeeCalculationType = IN_PROPORTION_TO_TERM
- ratio = 1
{/ADD}
	
- System calls the function of BSL .../installments/feededuction/futureprincipal with parameters:
- contractCode (from provided Contract)
- terminationDate = TerminationEffectiveDate
- feeAmount  = OriginalPremiumAmountInPrincipal -- amount of the fee to be terminated
- remainingFeeCalculationType
- ratio
- insuranceStartDate = serviceStartDate 
- insuranceEndDate =  serviceEndDate
	
- If the call returns an error, then scenario returns WarningMessage = the returned error description and ends
	
- System sets following parameters with returned values of the call:
- RemainingPremium = installment.RemainingFee
- RemainingProvidedCreditAmount = installment.RemainingProvidedCreditAmount
- terminatedInstallmentCount = installment.terminatedInstallmentCount
- firstTerminatedInstallmentDueDate = installment.firstTerminatedInstallmentDueDate -- for SAI, it is Due Date of the last installment
	
- If RemainingProvidedCreditAmount <= 0, then scenario returns WarningMessage = MSG_CELInsuranceNoRemainingPremium and ends -- the check of the returned values
	
- {ADD CSI-3602} If ContractService is ContractInsuranceService then {/ADD} system calculates RemainingPremiumRevenue as follow:
- get Insurance Program setting Get INSR Insurance Program data with Insurance Contract.Insurance Program ExternalId
- RemainingPremiumRevenue = get Calculate Net Premium based on Revenue Share with RemainingPremium, Insurance Program
	
- System checks if installment schedule of the contract has been already closed according to rule Check if Installment Schedule is Closed. If TRUE is returned, scenario returns WarningMessage = MSG_InstallmentScheduleClosed and ends
	
- {ADD CLM-5981}If Contract Type=CEL,{/ADD} calculate a NewAnnuity by Annuity calculation with parameters -- skipped for SAI
- AIR (interest rate) = FP.Interest Rate
- TERM (number of terms) = terminatedInstallmentCount 
- Annuity Base Amount = RemainingProvidedCreditAmount
- Installment Schedule Method = FP.Installment Schedule Method 
- Day Count Method = FP.DayCountMethod
- StartDate = firstTerminatedInstallmentDueDate - 1 month
- FirstDueDate = firstTerminatedInstallmentDueDate
	
- {ADD CLM-5981}If Contract Type=CEL,{/ADD} system calculates the NewFinancialParameters (NFP) as follow:
- NFP.ProvidedCreditAmount = RemainingProvidedCreditAmount
- NFP.Annuity = NewAnnuity
- NFP.FirstDueDate = FirstDueDate 
- NFP.LoanProvidingDate = StartDate --- start of interest period for the new installment schedule
- NFP.TotalMonthlyPayment = Annuity + Sum(FP.Financial Parameter Items.Amount having Contract Service -> FP Service Tariff Item ->Tariff Item ->Tariff Item Type.Charging Periodicity = IN_INSTALLMENT) - OriginalMonthlyInsuranceFee (if OriginalMonthlyInsuranceFee is not NULL and is greater than 0)
	
- Returns NFP

## 🔗 Connections (9)

- → Dependency: [[Calculate future principal]]
- ← Dependency: [[{ADD}Terminate Contract service for CEL contract]]
- → Dependency: [[Calculate Net Premium based on Revenue Share (Requirement 1876160)]]
- → Dependency: [[Get INSR Insurance Program data (Requirement 1876179)]]
- → Dependency: [[Get Tariff Items used for a Service fees]]
- → Dependency: [[Calculate remaining principal on fee termination - IS]]
- → Dependency: [[Annuity calculation]]
- ← Dependency: [[11.121 Terminate insurance contract manually (UseCase 1878971)]]
- ← Dependency: [[08.453 Get Contract insurance Terminate preview service (UseCase 1878969)]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-14272 (CSI-1000) Update Termination Feature for Regular and Upfront Insurance
- Custom: CBL-16453 (CSI-2123) Change the calculation of refunding fee when customer ET
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: CBL-25867 (CSI-3602) Removal of fee after contract service termination
- Use Case: CLM-5981 Termination of the SAI with installments
- Use Case: Contract insurance termination
- Use Case: Termination of Insurance contract options

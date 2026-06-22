---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25867 (CSI-3602) Removal of fee after contract service termination"
domain: "Requirements Model"
element_id: 1833370
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Terminate Contract service for CEL contract


> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25867 (CSI-3602) Removal of fee after contract service termination

## 📝 Notes

{ADD CSI-3602 /}
Code excluded from 08.121 Terminate contract insurance common - scenario AW - CEL insurance contract termination. Now it can be used generally for any contract service (not only contract insurance service).

This rule describes possible modification of CEL contract installments when a contract service or insurance on loan contract is to be terminated
Input values:

	
- Contract.Financial Parameters (FP) of the processed Contract
	
- TerminationEffectiveDate = Effective date of termination value
	
- ContractService
	
- ServiceParameters
	
- serviceStartDate - start date of service usage (contract service start date or Insurance period start date)
	
- serviceEndDate - original end date of service usage (contract last due date or Insurance period end date)


Output values:

	
- WarningMessage



	
- System calculates a new Financial Parameters of the loan by {MOD}Calculate new installment amount on service termination  rule with parameters Contract and ContractService, TerminationEffectiveDate,  ServiceParameters, serviceStartDate, serviceEndDate 
If a WarningMessage is returned, then rule returns this WarningMessage and ends.
	
- The collection of the found Incoming Payments is unpaired by calling of 05.200 Perform decoupling use case
	
- System cancels all following standard installments (Installments where I.Installment Type = 'STANDARD' and Installment.Active = TRUE and Contract = processed  Contract) after given due date (Installment.Due Date > TerminationEffectiveDate) date as inactive:
- I.Active = 'FALSE'
- I. Deactivated In Version = MV incremented by 1
	
- System generates standard Installment schedule for remaining principal, a new annuity/term according to the algorithm Generate installment schedule algorithm with parameters
- Contract
- NewFinancialParameters (NFP)
- Recalculation reason = {ADD CSI-3602} If ContractService is ContractInsuranceService then 'IT' (Insurance termination) else 'ST' (Service Termination){/ADD}
- Installment Version = NV incremented by 1
- Installment Number = FP.Term - terminatedInstallmentCount + 1
which returns Installment Schedule
	
- System stores the Installment Schedule into the contract Installment and Installment Part
	
- System generates a system event RegeneratedInstallmentScheduleSE with a list containing the created (only stored) and canceled installments as a parameter.
	
- System archives the original version of the Contract.Financial Parameters (FP) and creates a new one as follow:
- FP.Annuity = NFP.Annuity
- --FP.Provided Credit Amount = FP.Provided Credit Amount - RemainingPremium ???
- FP.Total Monthly Installment = sum of all installment Parts of the Installment of Installment Schedule where Installment.Due Date = NFP.FirstDueDate (new installment value which should be paid)
- FP.Total Payment Per Credit = sum of all Installment Parts of the all Installments of Installment Schedule having Installment Type = STANDARD and Active Flag = 1
- all FP.Tariff Items presenting the insurance premium of the Contract Service (i.e. PremiumTariffItemsId[]) are removed
- other remaining attribute values including related FP Items stay the same
	
- System calculates new values of presented interest rates by Recalculate Presented Interest rates on financial parameters change with parameters: Contract FP, Contract Installment Schedule
	
- System stores presented interest rates into FP.Contract Presented Interest Rate
	
- System couples of Contract Incoming Payments by UC 05.180 Perform coupling payment with installment for the Contract.

## 🔗 Connections (2)

- → Dependency: [[{MOD}Calculate new installment amount on service termination]]
- ← Dependency: [[{MOD}08.121 Terminate contract insurance common]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-25867 (CSI-3602) Removal of fee after contract service termination

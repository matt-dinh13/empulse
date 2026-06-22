---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Business Rules"
domain: "Modules"
element_id: 1876182
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Sum Insured calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Business Rules

## 📝 Notes

Inputs:

	
- Insurance Service
	
- Price
	
- Preferred cash payment
	
- Preferred loan amount
	
- CUID


Outputs:

	
- Sum Insured


reference date = date of generation of the offer, which is currently generated or chosen

Calculation of the sum insured for the loan being offered:
Calculate the value sumInsuredLoan according to rule defined for item Sum Insured in description of Base Type.
The base amount for calculation of Sum Insured (SI) is defined by TarifItem(SI).PercentageBasedOn as follows: 

	
- If SI.PercentageBasedOn = GP then base = price.


	
- If SI.PercentageBasedOn in (SP,WP, WPI, NCL, PCL) then base is calculated according to algorithm Simple principal calculation.

Otherwise, the value of the Sum insured is not calculated because the required percentage-based amount is not defined yet.

Calculation of the sum insured for other contracts:
If CUID is known then sumInsuredOther is calculated as a sum of InsurancePeriod.SumInsured (InsurancePeriod is denoted as Period in following lines) where:

	
- Period is related to the same person as the person asking for the new loan, i.e. Period.InsuranceContract.CUID = CUID on input


	
- Period.Status = Active
	
- Period.EndDate is not filled in or is greater or equal to reference date
	
- Period.InsuranceContract.Status = Active
	
- Insurance service asked for the new loan is assigned to the same Insurance program, i.e. Period.InsuranceContract.InsuranceProgram.Code is equal to InsuranceService.InsuranceProgram.Code

If CUID is unknown (client has not been identified yet) then sumInsuredOther = 0.

return sumInsured = sumInsuredLoan + sumInsuredOther

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Eligible Insurance Service]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- → Dependency: [[{MOD}Simple principal calculation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Eligible Insurance Service

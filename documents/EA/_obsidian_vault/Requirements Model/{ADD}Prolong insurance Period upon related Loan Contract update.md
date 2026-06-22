---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change"
domain: "Requirements Model"
element_id: 1876178
diagrams: 2
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Prolong insurance Period upon related Loan Contract update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change

## 📝 Notes

{ADD CSI-3472}
This rule describes updating of active Insurance Period based on the related Contract and its financial parameters update. 
The rule is used for CEL/SAI contract type whose insurance should be prolonged after PAYHOL or LRES execution.
Inputs:

	
- RelatedLoanContract


Steps:

	
- If RelatedLoanContract.Contract Type is not in (CEL, SAI) then rule ends.
	
- System finds all insurance contracts related to RelatedLoanContract which meet following criteria:
- Insurance contract status = Signed OR Active
- Insurance contract service definition.First Insurance Period Duration = LAST_REPAYMENT_DATE_AND_PROLONGATION
- there is insurance period with status=A
	
- For each found insurance contract system updates active insurance period:
- insurance period.End date = RelatedLoanContract.Financial Parameters.Expected End Date
	
- Return to the calling use case

## 📊 Appears In (2 diagrams)

- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Custom: Insurance contract

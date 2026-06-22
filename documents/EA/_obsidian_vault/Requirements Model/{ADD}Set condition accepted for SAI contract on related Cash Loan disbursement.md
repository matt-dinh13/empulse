---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23420 (CLM-5952) [VAS] Standalone PPI as a second loan_Prior 2/CLM-6205 Condition accepted for related SAI update"
domain: "Requirements Model"
element_id: 1878896
diagrams: 3
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Set condition accepted for SAI contract on related Cash Loan disbursement

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23420 (CLM-5952) [VAS] Standalone PPI as a second loan_Prior 2/CLM-6205 Condition accepted for related SAI update

## 📝 Notes

{ADD CLM-6205 /}
The rule present functionality for setting Condition accepted value for the SAI contract triggered by disbursement confirmation of related cash loan.
 

	
- If Contract.Contract Type != 'CEL', then use case ends.
	
- System gets ContractCode[] from active Contract.Extended Property Value.Value related to the processed Contract having Extended Property Item Code = 'RELATED_LOAN'
If no record is found, use case ends.
	
- For each ContractCode[], system
- gets SaiContract from Contract where Contract Type = 'SAI' and Status in ('N') and Condition Accepted <> 'A'  and Contract Code = ContractCode. If no Contract is found, it is continued with next ContractCode[], else
- system sets loan condition acceptation by Set contract Condition Accepted rule with SaiContract as parameter.

## 🔗 Connections (1)

- → Dependency: [[Set contract Condition Accepted]]

## 📊 Appears In (3 diagrams)

- Custom: CLM-6205 Condition accepted for related SAI contract
- Custom: Common Business Rules for Contract Management
- Use Case: Activate Insurance on related CL Contract disbursement

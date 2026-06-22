---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1876172
diagrams: 4
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Generate Insurance Contract Code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

Generates insurance contract code for a new insurance contract.

Input parameters:


	
- insurance program - mandatory - insurance program which the insurance contract is based on
	
- loan contract code - optional - code of the loan contract which the insurance contract is created for
	
- contract index - optional - additional index (number) for insurance contract code.


Output parameters:


	
- insurance contract code


Processing:

Insurance Contract Code will be generated according to the settings of the insurance program:

For insurance program.Contract Numbering = FIXED, the insurance contract code is set to the insurance program.Fixed Contract Code

For insurance program.Contract Numbering = INHERITED, the insurance contract code is generated in format {prefix}loan contract code{contract index}{suffix} where:

	
- {prefix} - is static text defined in insurance program..Contract code prefix (empty string if not defined)


	
- {suffix} - is static text defined in insurance program..Contract code suffix (empty string if not defined)


	
- {contract index} - is order number of insurance contract under the loan contract padded left with zeroes to the length of 2 chars (01 - if it is the first insurance contract under loan contract, 02 for second,...). 


Loan contract code must be specified if INHERITED numbering is in effect, otherwise rule evaluation ends with error: insurance contract number cannot be generated.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}11.010 Create insurance contract]]

## 📊 Appears In (4 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
- Use Case: Adding Insurance Service on REL contract
- Use Case: Create and Sign Insurance contract
- Use Case: Insurance on REL Contract management

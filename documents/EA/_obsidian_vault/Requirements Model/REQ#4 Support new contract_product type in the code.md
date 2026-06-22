---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance"
domain: "Requirements Model"
element_id: 1375657
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#4 Support new contract/product type in the code

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance

## 📝 Notes

We need to carefully find and check all conditions using Contract type or Product type in the application code and update them with respect for new contract/product type SAI.

Examples:

	
- if ContractType != REL most probably means if ContractType == CEL and should not be evaluated as true for SAI if not said otherwise
	
- if ContractType != CEL most probably means if ContractType == REL and should not be evaluated as true for SAI if not said otherwise
	
- all above apply also to ProductType

## 🔗 Connections (1)

- → Generalization: [[PAYM-1410 (CBL-3666) Standalone insurance (Requirement 1375653)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1410 (CBL-3666) Standalone insurance

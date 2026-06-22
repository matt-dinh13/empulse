---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13715 (CLM-4506) Change data source for printing documents during contract sign"
domain: "Requirements Model"
element_id: 1689348
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4506 Change data source for printing documents during contract sign

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13715 (CLM-4506) Change data source for printing documents during contract sign

## 📝 Notes

Change data sources to Contract->Agreement->Agreement_Data_Source for following use cases:
 

	
- Button CON_REPRINT_SIGN_DOCS
	
- MBean printContractDocuments - if parameter forceDataSourceCreation = True then error message returned (HO_CONTRACT_DATA source not supported after sign)


Original data source HO_CONTRACT_DATA can not be used after sign due to possible missing application data (application is temporary entity).

## 📊 Appears In (1 diagrams)

- Custom: CBL-13715 (CLM-4506) Change data source for printing documents during contract sign

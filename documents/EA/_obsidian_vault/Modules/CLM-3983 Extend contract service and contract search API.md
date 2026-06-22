---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-13442 (CLM-3983) Extend contract service and contract search API"
domain: "Modules"
element_id: 1799702
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 CLM-3983 Extend contract service and contract search API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-13442 (CLM-3983) Extend contract service and contract search API

## 📝 Notes

ContractService v10:

	
- Add /services GET method with minimal structure (externalId, serviceCode, serviceVersion, serviceType)
	
- Add productVersion to main GET method - it should already be there 


ContractRestService v11:

	
- Provide financialParameter.expectedEndDate and financialParameter.firstDueDate in the FINANCIAL_PARAMETER_DEFAULT projection
	
- Check whether contractServiceId is externalId

## 📊 Appears In (1 diagrams)

- Custom: CBL-13442 (CLM-3983) Extend contract service and contract search API

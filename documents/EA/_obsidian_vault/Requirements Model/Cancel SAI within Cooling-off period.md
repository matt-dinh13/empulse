---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1805096
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Cancel SAI within Cooling-off period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

Customer can asks for SAI contract including insurance cancellation within Cooling-off period (let say 14 days after signature). This action is available via BSL UI, or WEB API,

	
- Customer asks for SAI contract withdrawal (cancellation)
	
- Operator creates COP request.
	
- System evaluates and executes the COP request in the night automatic job of the request day
	
- SAI contract is finished in status


Prerequisites:

	
- SAI contract has a COP service assigned
	
- COP service cannot be set in automatic mode (Request required for processing = TRUE). Reason is the customer is not obligated to pay any amount, but automatic COP is triggered by an incoming payment. 
	
- COP service should be set for Finish contract after processing = TRUE 
	
- To excluding all installment parts (mainly the principal amount), it is needed to create a new Terms & Condition for SAI with new Installment Parts Included In Operation setting for COP service (CO). (Perform EIT via DB scripts). The new Terms & Condition is assigned to the SAI product.

## 📊 Appears In (1 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

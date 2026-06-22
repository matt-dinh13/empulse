---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Business Rules"
domain: "Analysis Model"
element_id: 1860910
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Allowed contract statuses for CLIP/CLDP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Business Rules

## 📝 Notes

This rule returns list of possible contract statuses for CLIP or CLDP according to CL type and global parameter.

Input:

	
- CL change Type


Output:

	
- list of contract statuses



	
- If CL change Type = CLIP then the rule returns statuses N, A  (Signed + Active)
	
- else (for CLDP + RCLDP) the rule returns statuses N, A + additional statuses defined by global parameter CLDPExtraContractStatusList (if exists, comma separated list).

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Validate Credit limit change request from messaging]]
- ← Dependency: [[13.060 Create change credit limit request manually (UseCase 1877196)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-8776 (CLM-2825) Decrease credit limit for paid-off contracts
- Use Case: Credit Limit Change via messaging - Use Case model

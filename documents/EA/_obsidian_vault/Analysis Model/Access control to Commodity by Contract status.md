---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Access Rights"
domain: "Analysis Model"
element_id: 1573592
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to Commodity by Contract status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Access Rights

## 📝 Notes

Entry condition A: Contract is in status S (Approved) or R (InProcess)
Entry condition B: User has extended right for all statuses
Entry condition C: Contract is in status N (Signed) AND Commodity hasn't been validated (GetCommodityDataResponse.data.Validated = False) AND user has 01.650 Edit Contract Commodity (non-validated commodity) privilege
{ADD CLM-1868}Entry condition D: Contract is in status N (Signed) AND user has {ADD}01.650 Edit Contract Commodity (skip validation) privilege{/ADD}

	
- If (A = False AND B=False) then commodity is not editable
	
- If (A = True) or (B = True) then commodity is editable
	
- If C = TRUE then commodity is editable
	
- {ADD CLM-1868}If D = TRUE, then commodity is editable{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]
- ← Dependency: [[01.650 Edit Contract Commodity (UseCase 1852203)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: Common Business Rules for Contract Management
- Use Case: Manage contract commodities

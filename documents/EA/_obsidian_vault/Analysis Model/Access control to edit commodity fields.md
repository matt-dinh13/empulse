---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Access Rights"
domain: "Analysis Model"
element_id: 1573589
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to edit commodity fields

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Access Rights

## 📝 Notes

Entry condition A: User has basic access right
Entry condition B: User has access right to edit other editable fields
Entry condition C: Contract is in status APPROVED and Commodity type is vehicle (Commodity_Type.CommodityTypeFlag(IS_VEHICLE) = True)
Entry condition D: Commodity hasn't been validated (Commodity.Validated = False)
Entry condition E: user has access right 01.650 Edit Contract Commodity (validated commodity)


	
- If (A = False) then commodity is not editable or


	
- (A = True AND B = False AND C = True) then commodity is not editable


	
- otherwise it is editable

## 🔗 Connections (3)

- ← Dependency: [[Get update mode for commodity data update]]
- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]
- ← Dependency: [[01.650 Edit Contract Commodity (UseCase 1852203)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: Business Rules
- Use Case: Manage contract commodities

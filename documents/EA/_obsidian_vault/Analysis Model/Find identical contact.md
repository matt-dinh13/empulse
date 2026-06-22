---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Update application/Business rules"
domain: "Analysis Model"
element_id: 1817758
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Find identical contact

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Update application/Business rules

## 📝 Notes

If contactID is not null, appropriate record is found.
Otherwise following attributes are compared:

For contact types with Maximum count=1:

	
- contact type
	
- contact type role


For contact types with Maximum count>1:

	
- contact type
	
- contact type role
	
- value


If exists a record where value of all these attributes equals values from input, the record is considered as identical.
If the stored value is empty, only other attributes are compared.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Find identical records]]

## 📊 Appears In (1 diagrams)

- Custom: Update application - Business rules

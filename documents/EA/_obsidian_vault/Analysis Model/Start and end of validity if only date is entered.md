---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623714
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Start and end of validity if only date is entered

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

If a validity of any business object is set on day D, then

	
- start of validity is day D, from time 00.00.00 (hh:mm:ss)
	
- end of validity is day D, till time 23:59:59

## 🔗 Connections (2)

- ← Dependency: [[Summary PRECONDITIONS for setting of time dependent properties]]
- ← Dependency: [[Summary VALIDATIONS for setting of time dependent properties]]

## 📊 Appears In (1 diagrams)

- Custom: Time dependent business objects

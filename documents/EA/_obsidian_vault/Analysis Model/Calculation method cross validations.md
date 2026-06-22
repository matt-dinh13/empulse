---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Validation rules/Common for all variants"
domain: "Analysis Model"
element_id: 1789770
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Calculation method cross validations

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Validation rules/Common for all variants

## 📝 Notes

Calculation method validation rules:

	
- If calculation method is defined and set to fixed then value fixed amount is mandatory (MSG_FIX_AMOUNT, MSG_CALCULATION_METHOD_FIXED).
	
- If calculation method is defined and set to percentage or annual percentage then values percentage based on is mandatory (MSG_CALCULATION_METHOD_PERCENTAGE).


	
- If value percentage based on is defined then values percentage, rounding and rounding scale are mandatory else this values must be empty (MSG_PERCENTAGE_TYPE_FILLED, MSG_PERCENTAGE_TYPE_EMPTY, MSG_PERCENTAGE_BASE_FILLED, MSG_PERCENTAGE_BASE_EMPTY).

## 🔗 Connections (6)

- ← Dependency: [[Calculation method cross validations - simple]]
- ← Dependency: [[Percentage based on]]
- ← Dependency: [[Fixed amount (GUIElement 1825323)]]
- ← Dependency: [[Percentage rate (GUIElement 1825320)]]
- ← Dependency: [[Rounding Scale]]
- ← Dependency: [[Rounding (GUIElement 1825308)]]

## 📊 Appears In (1 diagrams)

- Custom: General rule tasks

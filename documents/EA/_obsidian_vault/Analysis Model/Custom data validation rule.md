---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Custom Data Definition/Validation rules"
domain: "Analysis Model"
element_id: 1007276
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Custom data validation rule

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Custom Data Definition/Validation rules

## 📝 Notes

This rule describes validation of one string value according to Custom data definition (only active records are considered).

Input:

	
- value
	
- Custom data definition.Code (CDD)


If CDD.Custom data Type=TEXT then value must be string (MSG).
If CDD.Custom data Type=NUMBER then value must be number(MSG).
If CDD.Custom data Type=CUSTOM then value is validate by a specific validation in CDD.Bean name(MSG).
If CDD.Mandatory then value must be not null value (MSG).
If length the of input value id greater then CDD.Maximum length, then validation failed (MSG).
If length the of input value id less then CDD.Minimum length, then validation failed (MSG).
If CDD.Enumeration source is filled in, then value must be CODE of referenced enumeration (MSG).

## 📊 Appears In (1 diagrams)

- Custom: Validation rules

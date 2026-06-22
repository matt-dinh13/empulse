---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Cross validations"
domain: "Analysis Model"
element_id: 1773150
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Obligation of family member

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Cross validations

## 📝 Notes

Family member is mandatory. Related person must be one of the type:

	
- father, 
	
- mother, 
	
- grandfather, 
	
- grandmother or 
	
- spouse.


{ADD BRR-3357 v6}
This validation is applied only if at least one of the records above is offered in the Relationship combo-box (panel Contact information IN). 
{/ADD}

If mandatory related person is missing, MSG_ONE_OF_RELATED_PERSON appears.

## 🔗 Connections (1)

- ← Dependency: [[Obligation of related person for student]]

## 📊 Appears In (1 diagrams)

- Custom: Cross validations

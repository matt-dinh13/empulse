---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773402
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Configurable application validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Input:

	
- application form configuration
	
- list of application attributes



	
- System gets all active validations related to application form configuration and list of application attributes(Application form configuration->Field Validation->Validation where Field Validation.Active=TRUE).
	
- System performs all found validations according to Validation Type with each application element from input. If such validation requires any parameter, it is get from Validation Parameter.
	
- System gets all active cross validations related to application form configuration (Application Form Configuration->Cross Validation where Cross Validation.Active=TRUE).
	
- System performs all found validations according to Validation Type. If such validation requires any parameter, it is get from Validation Parameter.
	
- If any validation fails, system gets the value of parameter with code MSG and add it to the output. If such parameter is not defined, value Validation Type.Message is used.


Output:
List of error messages-optional

Note: The class Validation Type contains list of all existing validating types including the description.

## 🔗 Connections (2)

- ← Dependency: [[Application validation rule]]
- → Dependency: [[{DEL}Validation Type]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules

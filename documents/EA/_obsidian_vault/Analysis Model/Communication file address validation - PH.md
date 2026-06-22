---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Validations"
domain: "Analysis Model"
element_id: 1558094
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Communication file address validation - PH

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Validations

## 📝 Notes

Philippine version of the Communication file address validation
 

	
- Try to find Address.District.Code in the system by value from addressType.district
	
- If the district is found then find all Address.Zip Codes for given Address.District.Code in ZIP_CODE enumeration
	
- Check if given addressType.zipCode exists in result of previous search of zip code (by district code)

## 🔗 Connections (1)

- → Generalization: [[Communication file address validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validations

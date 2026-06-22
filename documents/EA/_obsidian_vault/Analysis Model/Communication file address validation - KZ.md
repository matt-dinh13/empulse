---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Validations"
domain: "Analysis Model"
element_id: 1558095
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Communication file address validation - KZ

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Validations

## 📝 Notes

Kazakh version of the Communication file address validation


	
- Try to find Address.Town.Code in the system by value from addressType.town
	
- If the town is found then find all Address.Zip Codes for given Address.Town.Code in ZIP_CODE enumeration
	
- Check if given addressType.zipCode exists in result of previous search of zip code (by town code or by sub district code)

## 🔗 Connections (1)

- → Generalization: [[Communication file address validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validations

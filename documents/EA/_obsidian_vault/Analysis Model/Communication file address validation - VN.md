---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Validations"
domain: "Analysis Model"
element_id: 1558097
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Communication file address validation - VN

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Validations

## 📝 Notes

- Try to find town by AddressTown.Name in the system by addressType.town value – this returns first result from town enumeration 
	
- If the town is found then find all zip codes for Address.Town.Code of found town in  Address.ZipCode enumeration
Else if town was not found, try to find zip codes by addressType.subDistrict value
	
- Check if given addressType.zipCode value exists in result of previous search of zip code (by town code or by sub district code)

## 🔗 Connections (1)

- → Generalization: [[Communication file address validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validations

---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Validations"
domain: "Analysis Model"
element_id: 1558092
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Communication file address validation - IN

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Validations

## 📝 Notes

Indian version of the Communication file address validation


	
- Try to find town by AddressTown.Name in the system by  addressType.town value – this returns first result from town enumeration (this is bad, it has to return all town entries with different town codes, or better change the evaluation to get all items from ZIP_CODE enumeration for given zip code and then find town items in TOWN enumeration by town codes from zip_code items, and in this result list check the presence of the town name)
	
- If the town is found then find all zip codes for Address.Town.Code of found town in  Address.ZipCode enumeration
Else if town was not found, try to find zip codes by addressType.subDistrict value
	
- Check if given addressType.zipCode value exists in result of previous search of zip code (by town code or by sub district code)

## 🔗 Connections (1)

- → Generalization: [[Communication file address validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validations

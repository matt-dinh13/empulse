---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Communication detail"
domain: "Analysis Model"
element_id: 1442205
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Get communication contact algorithm

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Communication detail

## 📝 Notes

Description: This algorithm is used for construction of communication contact into presentation text form on the Communication detail screen. Algorithm accepts id of communication record as parameter.

Algorithm steps
1. If communication has address associated

	
- Construct contact string from values of address (for address format see generic rules)


2. If communication has contact associated

	
- If contact is email (CONTACT is EMAIL)
- use email as contact string (EMAIL.EMAIL)


	
- If contact is phone (CONTACT is PHONE) and extension is defined (PHONE.EXTENSION is not null)
- use phone number (PHONE.PHONE_NUMBER) and extension (PHONE.EXTENSION) as contact string (values are separated by space)


	
- If contact is phone (CONTACT is PHONE) and extension is NOT defined
- use only phone number as contact string

## 🔗 Connections (3)

- ← Dependency: [[Contact]]
- ← Dependency: [[{MOD}Contact]]
- ← Dependency: [[07.030 Show detail of communication (UseCase 1879992)]]

## 📊 Appears In (3 diagrams)

- Custom: Show communication record
- Custom: Update communication record
- Use Case: Communication records

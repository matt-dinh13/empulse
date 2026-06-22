---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL"
domain: "Requirements Model"
element_id: 1373288
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 Use Pairing Settings for TAC in pairing process

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL

## 📝 Notes

In order to use the new structure for pairing settings, we need to modify:

	
- UC 05.180 Perform coupling payments with installments
	
- ALG_Get sorted installment parts - both classical and by specific date, all three method types (standard, DPD, highest DPD)
	
- Delete foreign key of Installment priority entity to TERMS_AND_CONDITIONS.CODE. – as a last part of this requirement.
	
- Delete unused attributes from T&C entity - as a last part of this requirement.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL (Requirement 1373290)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL

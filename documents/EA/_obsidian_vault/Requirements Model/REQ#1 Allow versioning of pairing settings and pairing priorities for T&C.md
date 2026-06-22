---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL"
domain: "Requirements Model"
element_id: 1373292
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Allow versioning of pairing settings and pairing priorities for T&C

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL

## 📝 Notes

In order to be able to maintain the settings of pairing process, we need to do following changes to the BSL data model:

	
- Copy pairing settings (Keep pairing priority, Method type, DPD limit) from Terms and Conditions entity to new Pairing Settings entity.
	
- Create an entry in table Pairing Settings for every T&C used on CEL contracts with Valid from = 1.1.1970 and copy pairing settings (Keep pairing priority, Method type, DPD limit) values from corresponding Terms and Conditions entries.
	
- Modify Installment priority entity to point to Pairing Settings instead of T&C (add foreign key PAYMENT_SETTINGS.ID).
	
- Link Installment priorities to Payment Settings based on original T&C code (at the moment there is only one Payment Settings for one T&C code).
	
- Contact DWH in order to change the DWH data structure according to implemented changes.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL (Requirement 1373290)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL

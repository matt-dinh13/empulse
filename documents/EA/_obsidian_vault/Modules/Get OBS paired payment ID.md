---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-3487 - Mapping of OBS payment ID to Homer ID"
domain: "Modules"
element_id: 1224427
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Get OBS paired payment ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-3487 - Mapping of OBS payment ID to Homer ID

## 📝 Notes

Input:

	
- HoSel paired payment ID
	
- 

Output:

	
- OBS paired payment ID


Algorithm:

	
- System tries to find a record in PairedPaymentIdTranslation where Code = passed 'HoSel paired payment ID'.
	
- System returns:
- 'HoSel paired payment ID' in case that no record is found 
- Value of found record otherwise

## 🔗 Connections (2)

- ← Dependency: [[Processing PairedPaymentInfoDto]]
- → Dependency: [[REQ#1 Payment ID transaltion]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-3487 - Mapping of OBS payment ID to Homer ID
- Custom: COMMON for CBSA - Business rules
- Custom: Incoming payments - Business rules

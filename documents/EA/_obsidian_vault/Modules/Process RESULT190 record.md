---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)"
domain: "Modules"
element_id: 815968
diagrams: 4
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Process RESULT190 record

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)

## 📝 Notes

This algorithm is run whenever a new record is inserted into comm table RESULT190.

Input:

	
- a new record in RESULT190


Algorithm:

	
- System finds an original record (for which the result has been inserted) in an appropriate comm table according RESULT190.TypeMessage and RESULT190.IdRecord (e.g. for the record where TypeMessage = 170 and IdRecord = 123456789 the system finds a record in comm table SECCREDIT170 where Id = 123456789)

	
- System sets for the found original record the following values of service attributes:
- OriginalRecord.IdResult190 = RESULT190.Id
- OriginalRecord.ResultCode = RESULT190.ResultCode

	
- According to the TypeMessage the system runs one of the algorithms below:
- 170 - Generating SaleContractResponse
- any other TypeMessage - nothing

## 🔗 Connections (2)

- → Dependency: [[Generating SaleContractResponse]]
- ← Dependency: [[RESULT190]]

## 📊 Appears In (4 diagrams)

- Custom: BRR-2205 - OBS interface - Operations on contract (CEL)
- Custom: Business rules
- Logical: COMMON - Communication tables
- Logical: Contract sale - Communication model

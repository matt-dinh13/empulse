---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Business rules"
domain: "Analysis Model"
element_id: 1834843
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create or update Amortized Contract record

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Business rules

## 📝 Notes

{ADD CLM-5027/}

Inputs:
- Contract code
- Reason
- Exclusion reason
- Status

 

	
- System transforms contract code to id.
	
- If Status = ALREADY_WRITTEN_OFF and entry for given contract exists in Amortized Contract table with Processing Status WRITTEN_OFF then rule ends. \\Preventing from updating existing entry about written-off contract. In case entry does not exist then following steps will create it.
	
- System creates (if entry for given contract does not exist)/updates entry in Amortized Contract table about contract write-off with the following mapping:
.Contract Code = WriteOffRequest.Contract Code
.Processed Batch = -1
.Amortization Date = WriteOffRequest.Write Off Date
.Amortization Request Type = AUTOMATIC
.Processing Status = Status on input in case of a successful write off : WRITTEN_OFF, otherwise EXCLUDED
.Exclusion Reason = on input in case of an unsuccessful write off otherwise NULL
.Reason = WriteOffRequest.Reason Code
	
- If Status = WRITTEN_OFF, then system creates installment part amounts written-off - Amortized Installment Part as sum of unpaid installment parts of contract installment schedule.

## 🔗 Connections (1)

- ← Dependency: [[01.550 Write-off CEL contract]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: CLM-5027 - Start to populate amortized contracts tables for LCS CEL contracts write-off
- Use Case: Write-off CEL contract

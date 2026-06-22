---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Business Rules"
domain: "Analysis Model"
element_id: 1536029
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Create import sold contracts file record

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Business Rules

## 📝 Notes

This business rule describes creating record in Import sold contracts file

Input:

	
- Imported sold contracts file


Algorithm:
System creates a record in the Import sold contracts file for imported file:

	
- Name = imported file name
	
- Comment = comment of imported file
	
- Creation date = current date and time
	
- Total records = count of records in imported file
	
- Successful records = successfully processed records from imported file

## 📊 Appears In (1 diagrams)

- Custom: Business Rules

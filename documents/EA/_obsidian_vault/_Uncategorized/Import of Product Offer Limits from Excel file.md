---
type: Requirement
stereotype: "External"
package: ""
domain: "_Uncategorized"
element_id: 1380782
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Import of Product Offer Limits from Excel file

> **Type**: Requirement · **Stereotype**: «External»
> **Package**: N/A

## 📝 Notes

There is an external tool for import of Product Offer Limits from excel file in countries which have no support of campaigns by external system (e.g. LCS).
Template of the file is in linked document.
For the tab Product are defined following rules:

	
- If CUID or Segment is filled then Product code in column C is assigned to record in Product_Offer_Limit with corresponding CUID/Segment 
	
- If both CUID and Segment are not filled then Product code in column C is assigned to record in Product_Offer_Limit_Common 
	
- If both CUID and Segment are filled then an exception is raised and whole import file is refused

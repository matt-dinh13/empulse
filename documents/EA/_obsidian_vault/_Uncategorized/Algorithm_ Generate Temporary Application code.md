---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878429
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Algorithm: Generate Temporary Application code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Each object of Temporary will have 14 characters TACode in format: AAMMDD-BBBBBBB
Where:
Code                     Length  Description
AA                         2              Calculation of (actual year (in AAAA format) minus 1980)                             
MM                      2              number of month
DD                        2              number of day
-                            1              minus
BBBBBBB             7              Sequence starting 0000001 each day 5 minutes after midnight

YY example: for year 2019 is stored number 39 (actual year (2019) minus 1980 = 39)
If the TA Code (exclude minus) is not Modulo 7 then system will create next code with next available number from sequence

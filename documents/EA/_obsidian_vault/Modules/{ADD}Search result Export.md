---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Business Rules"
domain: "Modules"
element_id: 1873734
diagrams: 2
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Search result Export

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Business Rules

## 📝 Notes

{ADD-5594} Product assignment Governance 
For country: PH

System must support export of data which are displayed on Search Result part of page.
Format of exported file: CSV

Data/columns for export:
The export must contain all visible data columns from the UI, except the Action column, which must be excluded.
Resulting Columns (in order):
Salesroom code → salesroom_code
Salesroom name → salesroom_name
Product code → product_code
Product name → product_name
Partner code → partner_code
Partner name → partner_name
Valid from → valid_from
Valid to → valid_to

Data Types
All values exported as string, except:
valid_from → date-formatted string (YYYY-MM-DD)
valid_to → same formatting as valid_from - can be null

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Products Assignment Governance

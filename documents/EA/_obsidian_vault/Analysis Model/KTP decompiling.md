---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID"
domain: "Analysis Model"
element_id: 1727263
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 KTP decompiling

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID

## 📝 Notes

After KTP value (specific document attribute) is correctly filled in, date of birth and gender is extracted immediately as follows:

If 7th and 8th value from the left is between 41 and 71, gender=Female, otherwise gender=Male.

7th and 8th value from the left is day of birth, for female 40 is subtracted.
9th and 10th value from the left is month of birth.
11th and 12th value from the left is year of birth. If the value is bigger than current year, the value of year will be 19xx. Otherwise, it will be 20xx.

Then extracted values are saved into appropriate fields on AF even if they are invisible.

## 🔗 Connections (2)

- ← Dependency: [[Gender (GUIElement 1640041)]]
- ← Dependency: [[Date of birth (GUIElement 1640045)]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules ID

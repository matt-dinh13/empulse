---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules"
domain: "Analysis Model"
element_id: 865587
diagrams: 2
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Basic asterisk search

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Business rules

## 📝 Notes

Search field accepts value with asterisk wild character (*), which stands for any text. Use of asterisk has following limitations and characteristics:

	
- At least 3 valid characters has to be inserted before use of asterisk
	
- Asterisk is considered as the last character in inserted value. Any character (including symbols, numbers, special chars etc.) behind asterisk is ignored
	
- Characters in front of asterisk are tested  for exact match during search - case insensitive.

## 🔗 Connections (5)

- ← Dependency: [[00.150 Find bank branch (UseCase 1300670)]]
- ← Dependency: [[00.110 Find bank (UseCase 1300665)]]
- ← Dependency: [[Bank name (GUIElement 1761598)]]
- ← Dependency: [[Bank name (GUIElement 1761595)]]
- ← Dependency: [[Bank branch name (GUIElement 1761544)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Custom: Find bank

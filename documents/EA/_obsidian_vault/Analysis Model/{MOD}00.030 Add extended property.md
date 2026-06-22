---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Access Rights"
domain: "Analysis Model"
element_id: 1879942
diagrams: 6
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}00.030 Add extended property

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Access Rights

## 📝 Notes

The purpose of the use case is to add extended property to specified entity. System allows user to select one property from list of available properties. Each available extended property can be added to one entity instance only once.

Available logical data types
Extended properties support at least following logical data types:

	
- Text
	
- Date
	
- Number


Basic validation of logical data type of inserted value will be done on submit.
Generic enumerations are not supported though it will be possible to create extended property with specific enumeration as logical data type. But in this case implementation (coding) of a new data type which will represent this enumeration will be needed.

## 🔗 Connections (6)

- ← Realisation: [[Add extended property (Screen 1268437)]]
- ← Realisation: [[Add property]]
- ← Dependency: [[Create extended property (GUIElement 1521164)]]
- ← Realisation: [[Create extended property]]
- → Realisation: [[00.030 Add extended property]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-31177 (CLM-7629) Migrated contract support
- Custom: Create extended property
- Custom: List of extended properties panel
- Custom: Tab - Extended properties
- Use Case: Extended properties

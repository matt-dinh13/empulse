---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1750945
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Client Preferred language

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

Client's preferred language for communication.

Set value for attribute Preference Order as in Temporary_Application.Temp_Appl_Preferred_Language:

	
- 0 - for first preferred language
	
- 1 - for second preferred language

## 🔗 Connections (3)

- → Aggregation: [[{MOD}Client Snapshot]]
- → Association: [[Language (Enumeration 1758711)]]
- → Dependency: [[{DEL}CustomerAdditionalData]]

## 📊 Appears In (2 diagrams)

- Logical: Client management
- Logical: Enumerations

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Preference Order | Number |  |
